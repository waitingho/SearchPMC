const express = require('express')
const app = express()
const port = 3000

const cheerio = require('cheerio');
const axios = require('axios');
const { resolve } = require('path');
const data = []

const lcscsearch = async (p) => {

  var config = {
    method: 'get',
    url: `https://lcsc.com/product-detail/Microcontroller-Units-MCUs-MPUs-SOCs_Texas-Instruments-${p}.html`,
  };

  try {
    let response = await axios(config);
    const $ = cheerio.load(response.data);

    let tmp = {

      partnumber: $('#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.left > div.product-info > div.desc > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim(),
      inventory: $('#app > div > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.ship-stock.box > div:nth-child(1)').text().trim(),
      price: $('#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table > tbody').text().trim().replace(/\s+/g, ' ')
    }
    data.push(tmp)
    console.log(data);
    const fs = require('fs');
    const content = JSON.stringify(data);

    return await new Promise((resolve, reject) => {
      fs.writeFile("infoti.json", content, 'utf8', function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  } catch (err) { throw err; }
}


app.get('/lcsc', async (req, res) => {
  let promises = [];
  try {
    const po = ['MSP430FR2633IRHBR_C2053228', 'MSP430FR2633IRHBT_C173299', 'CC2642R1FRGZR_C2151618', 'TPS62050DGSR_C128604', 'TPS62160DGKR_C60726', 'TPS62160DGKT_C2070781']
//     const po = ['MSP430FR2633IRHBR_C2053228']
    for (let p of po) {
      promises.push(new Promise(async (resolve, reject) => {
        try { await lcscsearch(p); resolve(); } catch (err2) { reject(err2); }
      }));
    }
    let ress = await Promise.all(promises);
    console.log('幹你娘')
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send('操');
  }
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}/lcsc`)
})

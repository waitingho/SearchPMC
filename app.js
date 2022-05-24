const express = require('express')
const app = express()
const port = 3001

const cheerio = require('cheerio');
const axios = require('axios');
const { resolve } = require('path');
const data = []
const getAxios = require('/home/ec2-user/SearchPMC/getAxios.js');
const lcscsearch = async (p) => {

  var config = {
    method: 'get',
    url: `https://www.arrow.com/en/products/${p}/texas-instruments`,
  };

  try {
    let response = await axios(config);
    const $ = cheerio.load(response.data);

    let tmp = {
      Partnumber: $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.col-lg-7 > div.Product-Summary.row.ng-star-inserted > div > div > div.col-7 > h1 > span.product-summary-name--Original').text().trim(),
      Inventory: $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div:nth-child(1) > h2').text().trim(),
      Leadtime: $('#content0 > li').text().trim(),
      Price: $('#ariaContainer0 > li:nth-child(2) > div:nth-child(2) > ol').text().trim()

    }
    data.push(tmp)
    console.log(data);
    const fs = require('fs');
    const content = JSON.stringify(data);

    return await new Promise((resolve, reject) => {
      fs.appendFile("infoti.json", content, 'utf8', function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  } catch (err) { throw err; }
}



app.get('/arrow', async (req, res) => {
  let promises = [];
  try {
//     const po = ['MSP430FR2633IRHBR', 'MSP430FR2633IRHBT', 'CC2642R1FRGZR', 'TPS62050DGSR', 'TPS62160DGKR', 'TPS62160DGKT']
    const po = ['MSP430FR2633IRHBR']
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
  console.log(`Express is running on http://localhost:${port}/arrow`)
})

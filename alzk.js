

const express = require('express')
const app = express()
const port = 3001

const cheerio = require('cheerio');
const axios = require('axios');

const { resolve } = require('path');
const data = []
const https = require('https')
const lcscsearch = async (p) => {

  var config = {
    method: 'get',
    url: `https://alzk.com.tw/about/`,

    // timeout: 60000, //optional
    // maxContentLength: 10000000,
    // httpsAgent: new https.Agent({ keepAlive: true }),

  };
 
  try {
    let response = await axios(config);
    const $ = cheerio.load(response.data);

    let tmp = {
      partnumber: $('#post-5 > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-5c40d7b.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-2ebbf9c > div > div.elementor-element.elementor-element-e5f497e.elementor-widget.elementor-widget-text-editor > div > span').text().trim()
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


app.get('/alzk', async (req, res) => {
  let promises = [];
  try {
    const po = ['MSP430FR2633IRHBR']
    // const po = ['MSP430FR2633IRHBR', 'MSP430FR2633IRHBT', 'CC2642R1FRGZR', 'TPS62050DGSR', 'TPS62160DGKR', 'TPS62160DGKT']
    for (let p of po) {
      promises.push(new Promise(async (resolve, reject) => {
        try { await lcscsearch(p); resolve(); } catch (err2) { reject(err2); }
      }));
    }
    let ress = await Promise.all(promises);
    console.log('幹你娘成功ㄌ')
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send('哈哈白癡又失敗ㄌ');
    
  }
})





// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}/alzk`)
})

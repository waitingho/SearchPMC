const express = require('express');
const app = express();
const port = 3001;

const cheerio = require('cheerio');
const axios = require('axios').default;

const { resolve } = require('path');
const data = [];
const https = require('https');
const lcscsearch = async (p) => {

  var config = {
    method: 'get',
    url: `https://www.arrow.com/zh-cn/components-services/why-components-services`,
    timeout: 60000, //optional
    maxContentLength: 10000000,
    httpsAgent: new https.Agent({ keepAlive: true }),
  };

   
  try {
    let response = await axios(config);
    const $ = cheerio.load(response.data);

    let tmp = {
      partnumber: $('#main-content > div.Content > article > section > div').text().trim(),
      

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


app.get('/arrow', async (req, res) => {
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
    console.log('幹你娘')
    res.sendFile(data);
  } catch (err) {
    console.log(err);
    res.send('操');
  }
})





// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}/arrow`)
})

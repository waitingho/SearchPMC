
   
const express = require('express')
const app = express()
const port = 3001
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
//     const po = ['MSP430FR2633IRHBR_C2053228', 'MSP430FR2633IRHBT_C173299', 'CC2642R1FRGZR_C2151618', 'TPS62050DGSR_C128604', 'TPS62160DGKR_C60726', 'TPS62160DGKT_C2070781']
    const po = ['MSP430FR2633IRHBR_C2053228']
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


const puppeteer = require('puppeteer');
const mesearch = async (p) => {
    
    const browser = await puppeteer.launch({ headless: true, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });

        const page = await browser.newPage();
        await page.goto(`https://www.mouser.tw/ProductDetail/Texas-Instruments/${p}`);
      
try {
        let body = await page.content()
        let $ = await cheerio.load(body)
 //我們把cheerio找到的資料轉成文字並存進data這個變數
        await $('body').each((i, el) => {
            let $1 = cheerio.load($(el).html())
            //裏面建立一個物件並把資料都放進去
            //這是物件 不了解的可以搜尋了解一下

            let tmp = {
                partnumber: $1('#pdpProdInfo > div.panel-heading.pdp-product-card-header').text().trim(),
                inventory: $1('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div:nth-child(1) > h2').text().trim().replace(/\s+/g, ' '),
                price: $1('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody').text().trim().replace(/\s+/g, ' '),
                leadtime: $1('#content-onOrderShipments').text().trim()
            }

            data.push(tmp)
        })

        // console.log("data爬到ㄌ");

        const fs = require('fs');
        const content = JSON.stringify(data); //轉換成json格式
        // await browser.close()
        return await new Promise((resolve, reject) => {
            fs.writeFile("infoti.json", content, 'utf8', function (err) {
                if (err) reject(err);

                else resolve();
            });
        });
    } catch (err) { throw err; }

}

console.log('幹你123娘');


app.get('/mouser', async (req, res) => {

    let promises = [];

    try {
//         const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D', 'CC2642R1FRGZR?qs=rrS6PyfT74fHZyxeWJx9DQ%3D%3D', 'TPS62050DGSR?qs=Gse6rAGbi7%252Bae8YoL367mQ%3D%3D', 'TPS62160DGKR?qs=2UFnnMkojnUsiNxEDO710Q%3D%3D'];
        const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D']

        for (let p of po) {
            promises.push(new Promise(async (resolve, reject) => {
                try { await mesearch(p); resolve(); } catch (err2) { reject(err2); }
            }));
        }

        let ress = await Promise.all(promises);
        res.send(data);
        console.log('幹你娘成功ㄌ');
        console.log(data);
    } catch (err) {
        res.send('白癡又失敗ㄌ');
        console.log('白癡又失敗ㄌ');
        console.log(err);
    }
})

// start and listen on the Express server
// app.listen(port, () => {
//     console.log(`Express is running on http://localhost:${port}`)
// })




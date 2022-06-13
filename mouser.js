



const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const cheerio = require('cheerio');
const port = 3001
const { resolve } = require('path');
const data = []

const mesearch = async (p) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
//     await page.setDefaultNavigationTimeout(0);
    //mouser url
    await page.goto(`https://www.mouser.tw/ProductDetail/Texas-Instruments/${p}`)
    await page.goto(`https://www.mouser.tw/ProductDetail/Texas-Instruments/${p}`, {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
//     await page.waitForSelector('body')
    try {
        let body = await page.content()
        let $ = await cheerio.load(body)

        //先再外面建立陣列
        
        //我們把cheerio找到的資料轉成文字並存進data這個變數
        await $('body').each((i, el) => {
            let $1 = cheerio.load($(el).html())
            //裏面建立一個物件並把資料都放進去
            //這是物件 不了解的可以搜尋了解一下

            let tmp = {
                partnumber: $1('#pdpProdInfo > div.panel-heading.pdp-product-card-header').text().trim(),
                inventory: $1('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' '),
                leadtime: $1('#content-onOrderShipments').text().trim(),
                price: $1('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody').text().trim().replace(/\s+/g, ' ')
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
           const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D','MSP430FR2633IRHBT?qs=VymPLiRQZISEXW%2FbVKpnJQ%3D%3D','CC2642R1FRGZR?qs=rrS6PyfT74fHZyxeWJx9DQ%3D%3D'];
//         const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D','MSP430FR2633IRHBT?qs=VymPLiRQZISEXW%2FbVKpnJQ%3D%3D','CC2642R1FRGZR?qs=rrS6PyfT74fHZyxeWJx9DQ%3D%3D','TPS62050DGSR?qs=Gse6rAGbi7%252Bae8YoL367mQ%3D%3D','TPS62160DGKR?qs=2UFnnMkojnUsiNxEDO710Q%3D%3D'];
//         const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D','MSP430FR2633IRHBT?qs=VymPLiRQZISEXW%2FbVKpnJQ%3D%3D'];
//         const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D']
        for (let p of po) {
            promises.push(new Promise(async (resolve, reject) => {
                try { await mesearch(p); resolve(); } catch (err2) { reject(err2); }
            }));
        }
        let ress = await Promise.any(promises);
        res.send(data);
        console.log(data);
        console.log('幹你娘成功ㄌ');
    } catch (err) {
        res.send('白癡又失敗ㄌ');
        console.log(err);
    }
})

// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}/mouser`)
})





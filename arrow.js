


const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const cheerio = require('cheerio');
const port = 3001
const { resolve } = require('path');
const data = []

const arsearch = async (p) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.setDefaultNavigationTimeout(0);
    //mouser url
    await page.goto(`https://www.arrow.com/en/products/${p}/texas-instruments`, {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
    // await page.waitForSelector('body')
    try {
        let body = await page.content()
        let $ = await cheerio.load(body)



        //我們把cheerio找到的資料轉成文字並存進data這個變數
        await $('body').each((i, el) => {
            let $1 = cheerio.load($(el).html())
            //裏面建立一個物件並把資料都放進去
            //這是物件 不了解的可以搜尋了解一下

            let tmp = {
                partNumber: $1('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.col-lg-7 > div.Product-Summary.row.ng-star-inserted > div > div > div.col-7 > h1 > span.product-summary-name--Original').text().trim(),
                // inventory: $1('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div.BuyingOptions-content.BuyingOptions--noBorder.ng-star-inserted > h2').text().trim(),
                inventory: $1("#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div:nth-child(1) > h2").text().trim(),
                
                leadtime: $1('#content0 > li > div:nth-child(1) > dl > dd').text().trim(),
                price: $1('#ariaContainer0 > li:nth-child(2) > div:nth-child(2) > ol').text().trim().replace(/\s+/g, ' ')
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
app.get('/arrow', async (req, res) => {
    let promises = [];
    try {
        // const po = ['MSP430FR2633IRHBR', 'MSP430FR2633IRHBT', 'CC2642R1FRGZR', 'TPS62050DGSR', 'TPS62160DGKR', 'TPS62160DGKT']
        // const po = ['MSP430FR2633IRHBR']
        const po = ['MSP430FR2633IRHBR', 'MSP430FR2633IRHBT']
        for (let p of po) {
            promises.push(new Promise(async (resolve, reject) => {
                try { await arsearch(p); resolve(); } catch (err2) { reject(err2); }
            }));
        }
        let ress = await Promise.all(promises);
        res.send(data);
        console.log('幹你娘成功ㄌ');
        console.log(data);
    } catch (err) {
        res.send('白癡又失敗ㄌ');
        console.log('白癡又失敗ㄌ');
    }
})

// start and listen on the Express server
app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}/arrow`)
})



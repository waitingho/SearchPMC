

const express = require('express')
const app = express();
const port = 3001;
const cheerio = require('cheerio');
const axios = require('axios');
const { resolve } = require('path');
cconst puppeteer = require('puppeteer');
const { SocketAddress } = require('net');


// --------------------------------------------------------lcsc----------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}/mouser`)
})

const lcscSearch = async (p) => {

    var config = {
        method: 'get',
        url: `https://lcsc.com/product-detail/Microcontroller-Units-MCUs-MPUs-SOCs_Texas-Instruments-${p}.html`,
    };
    // const data1 = [];
    // const data = data1.concat();
    const data = [];
    try {

        let response = await axios(config);
        const $ = cheerio.load(response.data);

        let tmp = {
            partnumber: $('#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.left > div.product-info > div.desc > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim(),
            inventory: $('#app > div > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.ship-stock.box > div:nth-child(1)').text().trim(),
            price: $('#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table > tbody').text().trim().replace(/\s+/g, ' ')
        }
        data.push(tmp);
        
        console.log(data);

        const fs = require('fs');
        const content = JSON.stringify(data);
        // return content;

        return await new Promise((resolve, reject) => {
            fs.writeFile("infoti.json", content, 'utf8', function (err) {
                if (err) reject(err);
                else resolve(data);
            });
        });

    } catch (err) { throw err; }
}


app.get('/lcsc', async (req, res) => {
    // let promises = [];
    try {
//         const po = ['MSP430FR2633IRHBR_C2053228', 'MSP430FR2633IRHBT_C173299', 'CC2642R1FRGZR_C2151618', 'TPS62050DGSR_C128604', 'TPS62160DGKR_C60726', 'TPS62160DGKT_C2070781'];
        const po = ['MSP430FR2633IRHBR_C2053228']
        
        const ress = await Promise.all(po.map(p => lcscSearch(p)).concat())
        console.log('幹你娘 成功ㄌ')
        res.send(ress);
    } catch (err) {
        console.log(err);
        res.send('操 失敗ㄌ');
    }
})


// --------------------------------------------------------mouser----------------------------------------------------------------------------------------


const mouserSearch = async (p) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        if (['image', 'stylesheet', 'font', 'script'].indexOf(request.resourceType()) !== -1) {
            request.abort();
        } else {
            request.continue();
        }
    });

    await page.goto(`https://www.mouser.tw/ProductDetail/Texas-Instruments/${p}`, {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
    
    const data2 = [];
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
                leadtime: $1('#content-onOrderShipments').text().trim(),
                price: $1('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody').text().trim().replace(/\s+/g, ' ')
            }


            data2.push(tmp)
        })


        const fs = require('fs');
        const content = JSON.stringify(data2); //轉換成json格式


        return await new Promise((resolve, reject) => {
            fs.writeFile("infoti.json", content, 'utf8', function (err) {
                if (err) reject(err);

                else resolve(data2);
            });
        });
    } catch (err) { throw err; }

}

app.get('/mouser', async (req, res) => {

    // let promises = [];
    try {
        const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D', 'CC2642R1FRGZR?qs=rrS6PyfT74fHZyxeWJx9DQ%3D%3D', 'TPS62050DGSR?qs=Gse6rAGbi7%252Bae8YoL367mQ%3D%3D', 'TPS62160DGKR?qs=2UFnnMkojnUsiNxEDO710Q%3D%3D'];
        // const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D'];
        // const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D', 'MSP430FR2633IRHBT?qs=VymPLiRQZISEXW%2FbVKpnJQ%3D%3D'];

       
        const ress = await Promise.all(po.map(p => mouserSearch(p)))
        res.send(ress);
        console.log('幹你娘成功ㄌ');
        console.log(ress);
        console.log(new Date());
    } catch (err) {
        res.send('白癡又失敗ㄌ');
        console.log('白癡又失敗ㄌ');
        console.log(err);
    }
})

// -----------------------------------------------------------------------------------arrow----------------------------------------------------------------------------------------
const arrowSearch = async (p) => {
    const browser = await puppeteer.launch({ headless: false, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        if (['image', 'stylesheet', 'font', 'script', 'stylesheet'].indexOf(request.resourceType()) !== -1) {
            request.abort();
        } else {
            request.continue();
        }
    });
    //mouser url
    await page.goto(`https://www.arrow.com/en/products/${p}/texas-instruments`, {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
    // await page.waitForSelector('body')
    const data3 = [];
    try {
        let body = await page.content()
        let $ = await cheerio.load(body)



        //我們把cheerio找到的資料轉成文字並存進data這個變數
        await $('body').each((i, el) => {
            let $1 = cheerio.load($(el).html())
            //裏面建立一個物件並把資料都放進去
            //這是物件 不了解的可以搜尋了解一下

            let tmp = {
                partnumber: $1(`<p> ${p} </p>`).text().trim(),
                // inventory: $1('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div.BuyingOptions-content.BuyingOptions--noBorder.ng-star-inserted > h2').text().trim(),
                inventory: $1("#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div:nth-child(1) > h2").text().trim(),
                leadtime: $1('#content0 > li > div:nth-child(1) > dl > dd').text().trim(),
                price: $1('#ariaContainer0 > li:nth-child(2) > div:nth-child(2) > ol').text().trim().replace(/\s+/g, ' ')
            }

            data3.push(tmp)
        })

        // console.log("data爬到ㄌ");

        const fs = require('fs');
        const content = JSON.stringify(data3); //轉換成json格式
        // await browser.close()
        return await new Promise((resolve, reject) => {
            fs.writeFile("infoti.json", content, 'utf8', function (err) {
                if (err) reject(err);

                else resolve(data3);
            });
        });
    } catch (err) { throw err; }
}

console.log('幹你123娘');
app.get('/arrow', async (req, res) => {
    // let promises = [];
    try {
        // const po = ['MSP430FR2633IRHBR', 'MSP430FR2633IRHBT', 'CC2642R1FRGZR', 'TPS62050DGSR', 'TPS62160DGKR', 'TPS62160DGKT']
        // const po = ['MSP430FR2633IRHBR']
        const po = ['MSP430FR2633IRHBR', 'MSP430FR2633IRHBT']
    //     for (let p of po) {
    //         promises.push(new Promise(async (resolve, reject) => {
    //             try { await arsearch(p); resolve(); } catch (err2) { reject(err2); }
    //         }));
    //     }
        // let ress = await Promise.all(promises);
        const ress = await Promise.all(po.map(p => arrowSearch(p)))
        res.send(ress);
        console.log('幹你娘成功ㄌ');
        console.log(ress);
    } catch (err) {
        res.send('白癡又失敗ㄌ');
        console.log('白癡又失敗ㄌ');
        console.log(err);
    }
})


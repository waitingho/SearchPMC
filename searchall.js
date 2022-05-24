const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const mesearch = async (p) => {
    const browser = await puppeteer.launch({ headless: false, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();
    //ti url
    await page.goto(`https://www.mouser.tw/ProductDetail/Texas-Instruments/${p}`);
    // await page.waitForSelector('body')

    let body = await page.content()
    let $ = await cheerio.load(body)

    //先再外面建立陣列
    let data = []
    //我們把cheerio找到的資料轉成文字並存進data這個變數
    await $('body').each((i, el) => {
        let $1 = cheerio.load($(el).html())
        //裏面建立一個物件並把資料都放進去
        //這是物件 不了解的可以搜尋了解一下
        let tmp = {
            PartNumber: $1('#pdpProdInfo > div.panel-heading.pdp-product-card-header').text().trim(),
            Inventory: $1('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' '),
            OnOrder: $1('#content-onOrderShipments').text().trim().replace(/\s+/g, ' ').replace(/檢視預期日期/g, '').replace(/隱藏日期/g, ''),
            pricing: $1('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody').text().trim().replace(/\s+/g, ' '),
        }
        data.push(tmp)
    })
    console.log(data);

    const fs = require('fs');
    const content = JSON.stringify(data); //轉換成json格式
    fs.appendFile(`infome.json`, content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    await browser.close()

}
(function () {
    const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D', 'CC2642R1FRGZR?qs=rrS6PyfT74fHZyxeWJx9DQ%3D%3D', 'TPS62050DGSR?qs=Gse6rAGbi7%252Bae8YoL367mQ%3D%3D', 'TPS62160DGKR?qs=2UFnnMkojnUsiNxEDO710Q%3D%3D'];
    for (let p of po) {
        mesearch(p);

    }

})();















const tisearch = async (p) => {
    console.log('--------------------以下為ti-----------------------------------')
    const browser = await puppeteer.launch({ headless: false, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();
    await page.goto(`https://www.ti.com/store/ti/en/p/product/?p=${p}&keyMatch=${p}`);
    await page.waitForSelector('body')
    
    let body = await page.content()

    let $ = await cheerio.load(body)

    //先再外面建立陣列
    let data = []
    //我們把cheerio找到的資料轉成文字並存進data這個變數
    await $('body').each((i, el) => {
        let $1 = cheerio.load($(el).html())
        //裏面建立一個物件並把資料都放進去
        //這是物件 不了解的可以搜尋了解一下
        let tmp = {
            PartNumber: $1('body > main > div:nth-child(10) > div.body-wrap > div.product-details.product-details-b2c.row > div.col-pdp-main > section > div.header-top.u-margin-bottom-l > div.product-header-info > h1 > span').text().trim(),
            Inventory: $1('#inventoryDiv > span').text().trim().replace(/\s+/g, ' ').replace(/Limit: 999,999,999/g, ''),
            pricing: $1('#priceTable').text().trim().replace(/\s+/g, ' '),
        }
        data.push(tmp)
    })
    console.log(data);

    const fs = require('fs');
    const content = JSON.stringify(data); //轉換成json格式
    fs.appendFile("infoti.json", content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    await browser.close()
}
(() => {
    const po = ['MSP430FR2633IRHBR','CC2642R1FRGZR','TPS62050DGSR','TPS62160DGKR/T'];
    for (let p of po) {
        tisearch(p);
    }
})();











const puppeteer = require('puppeteer');
const cheerio = require('cheerio');



const digisearch = async (p) => {
    const browser = await puppeteer.launch({ headless: false, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();
    //ti url
    await page.goto(`https://www.digikey.tw/en/products/detail/texas-instruments/${p}`);
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
            PartNumber: $1('#__next > main > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-align-content-xs-flex-start.MuiGrid-grid-xs-12.MuiGrid-grid-md-8 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-true > div > table > tbody > tr:nth-child(3) > td.MuiTableCell-root.MuiTableCell-body.jss140 > div').text().trim(),
            // Inventory: $1('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' '),
            // OnOrder: $1('#content-onOrderShipments').text().trim().replace(/\s+/g,' ').replace(/檢視預期日期/g,'').replace(/隱藏日期/g,''),
            // pricing: $1('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody').text().trim().replace(/\s+/g, ' '),
        }
        data.push(tmp)
    })
    console.log(data);

    const fs = require('fs');
    const content = JSON.stringify(data); //轉換成json格式
    fs.appendFile(`infodigi.json`, content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    await browser.close()

}
(function () {
    const po = ['MSP430FR2633IRHBR/5819971?s=N4IgTCBcDaILIGUAKAWAzABgGICUwDY00BJHACQCEcQBdAXyA'];
    for (let p of po) {
        digisearch(p);

    }

})();



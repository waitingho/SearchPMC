


const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const CronJob = require('cron').CronJob;


const tisearch = async (p) => {
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
            pricing: $1('#priceTable').text().trim().replace(/\s+/g, ' ').replace(/Qty Price (USD)/g, ' ').split(' '),
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


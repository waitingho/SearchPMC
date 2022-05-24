


const puppeteer = require('puppeteer');
const cheerio = require('cheerio');



const mesearch = async (p) => {
    const browser = await puppeteer.launch({ headless: false, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();
    //ti url
    await page.goto(`https://www.mouser.tw/c/?q=${p}`);
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
            PartNumber: $1('#lnkMfrPartNumber_1').text().trim(),
            Inventory: $1('#SearchResultsGrid_grid > tbody > tr:nth-child(1) > td:nth-child(7) > div:nth-child(1)').text().trim().replace(/\s+/g, ' '),
            OnOrder: $1('#content-onOrderShipments').text().trim().replace(/\s+/g,' ').replace(/檢視預期日期/g,'').replace(/隱藏日期/g,'').split(' '),
            pricing: $1('#SearchResultsGrid_grid > tbody > tr:nth-child(1) > td:nth-child(8)').text().trim().replace(/\s+/g, ' ').replace(/帶狀裁切 /g, ' ').replace(/可選用MouseReel/g, ' '),
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
(function() {
    const po = ['MSP430FR2633IRHBR','CC2642R1FRGZ','TPS62050DGSR','TPS62160DGKR'];
    for (let p of po) {
        mesearch(p);
        
    }
   
})();



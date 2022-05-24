


const puppeteer = require('puppeteer');
const cheerio = require('cheerio');



const digisearch = async (p) => {
    const browser = await puppeteer.launch({ headless: false, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
    const page = await browser.newPage();
    //ti url
    await page.goto(`https://lcsc.com/product-detail/Microcontroller-Units-MCUs-MPUs-SOCs_Texas-Instruments-${p}.html`);
    await page.waitForSelector('body')
    
    let body = await page.content()
   
    let $ = await cheerio.load(body)
    
    //先再外面建立陣列
    let data = []
    //我們把cheerio找到的資料轉成文字並存進data這個變數
    await $('body').each((i, el) => {
        let $1 = cheerio.load($(el).html())
        //裏面建立一個物件並把資料都放進去
        
        let tmp = {
            PartNumber: $1('#app > div > main > div > div > div.padX.padY.base > div > div > div.left > div.product-info > div.desc > table > tbody > tr:nth-child(2) > td:nth-child(2)').text(),
            Inventory: $1('#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.ship-stock.box > div:nth-child(1)').text().trim(),
            // OnOrder: $1('#checkLeadTimeModal > section > table').text().trim(),
            pricing: $1('#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table').text().trim().replace(/\s+/g, ' ').split(' '),
        }
        data.push(tmp)
    })
    console.log(data);

    const fs = require('fs');
    const content = JSON.stringify(data); //轉換成json格式
    fs.appendFile("infolcsc.json", content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    await browser.close()
}
(function() {
    const po = ['MSP430FR2633IRHBR_C2053228','CC2642R1FRGZR_C2151618','TPS62050DGSR_C128604','TPS62160DGKR_C60726']
 
    for (let p of po) {
        digisearch(p);
        
    }
   
})();


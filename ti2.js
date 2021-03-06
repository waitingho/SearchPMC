// const puppeteer = require('puppeteer');
// //引入cheerio
// const cheerio = require('cheerio');
// (async () => {
//   const browser = await puppeteer.launch({headless: false, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
//   const page = await browser.newPage();
// //   await page.goto('https://www.ti.com.cn/product/zh-cn/CC2642R?keyMatch=CC2642R1FRGZR&tisearch=search-everything&usecase=OPN#order-quality');
// await page.goto('https://tw.news.yahoo.com/%E5%A5%BD%E5%B8%82%E5%A4%9A-%E5%B7%A8%E5%AC%B0-%E5%86%8D%E7%8F%BE-%E7%B6%B2%E8%AB%B7-%E8%AB%8B%E9%97%9C%E6%87%B7%E7%89%B9%E6%AE%8A%E6%97%8F%E7%BE%A4-014532433.html');
  
//   //先等待網頁載入到底下的section的html標籤，不然有時候執行太快抓不到網頁
//    await page.waitForSelector('section')
  
//   //把網頁的body抓出來
//   let body = await page.content()
  
//   //接著我們把他丟給cheerio去處理
//   let $ = await cheerio.load(body)


// let data = await $('<h1 data-test-locator="headline">好市多「巨嬰」再現 網諷：請關懷特殊族群</h1>').text();
//   console.log(data)
  
//   await browser.close()
// })();


const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
(async () => {
  const browser = await puppeteer.launch({headless: false, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
    const page = await browser.newPage();
   
    await page.goto('https://www.ti.com/store/ti/zh/p/product/?p=TPS62160DSGR&keyMatch=TPS62160DSGR&tisearch=search-everything&usecase=OPN');
     
    await page.waitForSelector('section')
    let body = await page.content()
    let $ = await cheerio.load(body)
    
    //我們把cheerio找到的資料轉成文字並存進data這個變數
    let data = await $('body > main > div:nth-child(10) > div.body-wrap > div.product-details.product-details-b2c.row > div.col-pdp-side.u-laptop-up-only').text().trim()
    
    //並再終端機print出來
    console.log(data)

    await browser.close()
})();




const cheerio = require('cheerio');
var axios = require('axios');
console.log('-------------------------------LCSC-------------------------------')


const lcscsearch = async (p) => {

  var config = {
    method: 'get',
    url: `https://lcsc.com/product-detail/Microcontroller-Units-MCUs-MPUs-SOCs_Texas-Instruments-${p}.html`,
    headers: {
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'host': 'lcsc.com'
    }
  };
  // console.log('---------------------696----------------------')
  axios(config)
    .then(function (response) {

      const $ = cheerio.load(response.data);
      var partnumber = $('#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.left > div.product-info > div.desc > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim()
      var Inventory = $('#app > div > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.ship-stock.box > div:nth-child(1)').text().trim()
      var qty = $(`#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table > tbody > tr:nth-child(1) > td.tbody-num.ahover`).text().trim().replace(/\s+/g, ' ')
      var Price = $(`#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table > tbody > tr:nth-child(1) > td:nth-child(2)`).text().trim().replace(/\s+/g, ' ')
      var qty2 = $('#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table > tbody > tr:nth-child(2) > td.tbody-num.ahover').text().trim().replace(/\s+/g, ' ')
      var Price2 = $(`#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table > tbody > tr:nth-child(2) > td:nth-child(2)`).text().trim().replace(/\s+/g, ' ')
      var qty3 = $('#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table > tbody > tr:nth-child(3) > td.tbody-num.ahover').text().trim().replace(/\s+/g, ' ')
      var Price3 = $(`#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table > tbody > tr:nth-child(3) > td:nth-child(2)`).text().trim().replace(/\s+/g, ' ')
      var qty4 = $('#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table > tbody > tr:nth-child(4) > td.tbody-num.ahover').text().trim().replace(/\s+/g, ' ')
      var Price4 = $(`#app > div.v-application--wrap > main > div > div > div.padX.padY.base > div > div > div.right > div:nth-child(1) > div.box.ladder-price > table > tbody > tr:nth-child(4) > td:nth-child(2)`).text().trim().replace(/\s+/g, ' ')
      console.log('partnumber : ' + partnumber)
      console.log('Inventory :' + Inventory)
      console.log('Price: ' + qty + ':' + Price + ', ' + qty2 + ':' + Price2 + ', ' + qty3 + ':' + Price3 + ', ' + qty4 + ':' + Price4)
      console.log('-------------------------------------------------------------')
    })
    .catch(function (error) {
      console.log(error);
    });
}
const startTask = () => {
  const po = ['MSP430FR2633IRHBR_C2053228','MSP430FR2633IRHBT_C173299', 'CC2642R1FRGZR_C2151618', 'TPS62050DGSR_C128604', 'TPS62160DGKR_C60726','TPS62160DGKT_C2070781']
  for (let p of po) {
    lcscsearch(p);
  }
};

module.exports = startTask;

const cheerio = require('cheerio');
var axios = require('axios');


const lcscsearch = async (p) => {

    var config = {
        method: 'get',
        url: `https://www.arrow.com/en/products/${p}/texas-instruments`,
        // headers: {
        //   'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        //   'sec-ch-ua-mobile': '?0',
        //   'sec-ch-ua-platform': '"Windows"',
        //   'Upgrade-Insecure-Requests': '1',
        //   'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36',
        //   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        //   'host': 'lcsc.com'
        // }
    };
    // console.log('---------------------696----------------------')
    axios(config)
        .then(function (response) {
            const $ = cheerio.load(response.data);
            var partnumber = $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.col-lg-7 > div.Product-Summary.row.ng-star-inserted > div > div > div.col-7 > h1 > span.product-summary-name--Original').text().trim()
            var Inventory = $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div:nth-child(1) > h2').text().trim()
            var qty = $('#quantity20').text().trim()
            var price = $('#price10').text().trim()
            var qty2 = $('#quantity21').text().trim()
            var price2 = $('#price11').text().trim()
            console.log('Partnumber: ' + partnumber)
            console.log('Inventory: ' + Inventory)

            if (qty) {
                console.log('Price: ' + qty + ': US' + price + ', ' + qty2 + ': US' + price2)
            } else {
                console.log('Price: no info')
            }

            console.log('-----------------------------------------------------------------')
        })
        .catch(function (error) {
            console.log(error);
        });
    // let data = []

    // const fs = require('response.data');
    // const content = JSON.stringify(data);

    // fs.appendFile("infoti.json", content, 'utf8', function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log("The file was saved!");
    // });
}
// const startTask = () => {
const po = ['MSP430FR2633IRHBR', 'MSP430FR2633IRHBT', 'CC2642R1FRGZR', 'TPS62050DGSR', 'TPS62160DGKR', 'TPS62160DGKT']
for (let p of po) {
    lcscsearch(p);
}
// };

// module.exports = startTask;
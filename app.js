const express = require('express')
const app = express()
const port = 3001

const cheerio = require('cheerio');
const axios = require('axios');
const data = []

const lcscsearch = async (p) => {

  var config = {
    method: 'get',
    url: `https://www.arrow.com/en/products/${p}/texas-instruments`,
  };


  axios(config)
    .then(function (response) {
      const $ = cheerio.load(response.data);

      let tmp = {
        partnumber: $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.col-lg-7 > div.Product-Summary.row.ng-star-inserted > div > div > div.col-7 > h1 > span.product-summary-name--Original').text().trim(),
        Inventory: $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div:nth-child(1) > h2').text().trim(),
        qty: $('#quantity20').text().trim(),
        price: $('#price10').text().trim(),
        qty2: $('#quantity21').text().trim(),
        price2: $('#price11').text().trim(),
      }
      data.push(tmp)
      console.log(data);
      const fs = require('fs');
      const content = JSON.stringify(data);

      fs.appendFile("infoti.json", content, 'utf8', function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });


      console.log('-----------------------------------------------------------------')
    })
    .catch(function (error) {
      console.log(error);
    });

}


// const startTask = () => {
const po = ['MSP430FR2633IRHBR', 'MSP430FR2633IRHBT', 'CC2642R1FRGZR', 'TPS62050DGSR', 'TPS62160DGKR', 'TPS62160DGKT']
for (let p of po) {
  lcscsearch(p);

}

app.get('/', (req, res) => {
  res.send(data)
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
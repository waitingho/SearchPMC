const cheerio = require('cheerio');
var axios = require('axios');


const lcscsearch = async (p) => {

  var config = {
    method: 'get',
    url: `https://www.mouser.tw/ProductDetail/${p}`,
    headers: {
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'host': 'www.mouser.tw',
      // 'Cookie': 'AKA_A2=A; CARTCOOKIEUUID=8f2bfe2b-754f-46cd-b15f-01b65ddbf546; _abck=320C97C459AACA8418A49E0422505533~-1~YAAQpegyF/TavJKAAQAAv02OkwcNEox777ZBCOveJI6gqnCEOcnTxYeQfril5TkI2UZsVORwA/Nb+o553JwR5OzfiFaOkpJLDJ0t9WpJBYzM+Qau6LgFYXjQ8WrLivpiGqmoz3L4uDAgP7eBjhFamaL+t5Ea2vh7pKNWWAALOKvw/BzmgkreZTyAgcGyGoLx0r/Ck57PmBGh5jQ+uYDxsV3KEG7o3S6/ZJNuvjw/TsFeQXFVVLlCBukF87Oy7gdn2zwVYE5ODJaMYTu9iIw5G6HTFMxgOb0EUlYPphdOcwFyCcJ1iZ415kL2xLW6afuKKgizWvPt6RzRlDTMmKFYfwLYhzjb2DS6vNdhkQSFseJLS5LPFbJntzUswgrYP5HjsnqOwP+zE9PG~-1~-1~-1; ak_bmsc=A6373E8146F582F99646786678AED4DA~000000000000000000000000000000~YAAQpegyF/XavJKAAQAAv02Okw8Qh3BATb4G/talO8yZUjzZoNZkAfU+DkMDU0mfS8YfUwLnyoCElj9EMvB2uXdKWdkeZJtcS27aA3C7syT8b5RqXxqGn9uuup2z90RKUHh7k300H/ZQUZcNTP4V+cRV8Kv9tJhAhWDqXoD6dxaJwI9JgcewXyiwz7wZqi7AMN8GnxJESUCh/brup2Tmr5WZoGVbvH82PjEa3HDfNAx5q1yU6xmTmw3EImv6BotpU18WiW2ntxtkznGiYTFau9WOUplQPFYTKM7RqDpedO2E+GyyRA1xgBrNIOtYSsrmW1juce6+CqBGBmoDxMsIpRNR/25TDNx8RnuepvEgAoE43TkoegM9HjsqkA==; bm_mi=1C0CB4AF5901824DEFC4CFBB2D633901~YAAQpegyF8IhvZKAAQAATwmTkw+xlz6SywJtP8EB54uht660sOFbaL6Z+pcoKtWamDic3HpxPYMOeTHFi50OQ2kF2N9p2mIB9RFVyI4QuC5KO/xMdM5OCv1ZCYmx/nI1Ihfbe0VmRNVx/7eOphv+pArcq/tiHz4zMNBuhPFV10E4EebYDDxkktz/nG/CdvNGu+rNDXpheo4hcE8VJ63rXpcPy9S1xadI7JlDMn/71LWLbC2Tc7rF9gm73b9dnSORb14Bo9zZSamotEmIipBY9TUvX03lOKyum4vKPtoOB57C9pg9D/uIKmXRzsnT1p0572uFdkN2x1V8cTc7IDw075QmkjGMpLODVU26Lw==~1; bm_sz=DE3C3F492AF87FDAD0A4C59551B8B817~YAAQpegyF/favJKAAQAAv02Okw9BPq+iYqro7tksYpNmV2yiqo7R5/65ZVK/LaoTBfq+VdSDQVB22SEEmYjUnXRQqhTGZaM/0AnGupjOXzxVLZcIU1AixvpjCTZf/TZpwJttjj4phT3lrRYPebElKrj4ngWyqPyyDsrkWhgdEfCm7YTWexX+5p/+STkn4B/4JUb1K7SzncRSJ/vuQUhRW+gjG7IARBc3FMJsNmGKfvKks10kltf++repT4QLmPFFgpj1Tvt3YqMqM8SrPhayIBMmb8UxIuSHMzQa+kzYN0FfIA==~3555908~4404292; preferences=pl=zh-CHT&pc_tw=TWD'
    }
  };

  // console.log('---------------------696----------------------')
  axios(config)
    .then(function (response) {
      const $ = cheerio.load(response.data);
      var partnumber = $('#pdpProdInfo > div.panel-heading.pdp-product-card-header > h1').text().trim().replace(/\s+/g, ' ')
      var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
      var onoder = $('#content-onOrderShipments').text().trim().replace(/\s+/g, ' ').replace(/檢視預期日期/g, '').replace(/隱藏日期/g, '').split(' ')
      var price = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table').text().trim().replace(/\s+/g, ' ').split(' ').replace(/\s+/g, ' ')


      console.log('partnumber: ' + partnumber)
      console.log('Inventory: ' + Inventory)
      // if (onoder) {
      //   console.log('onoder: ' + onoder)
      // } else {
      //   console.log('Price: no info')
      // }
      console.log('onoder: ' + onoder)
      console.log(price)


      console.log('-------------------------------------------------------------------------------------------------------------------------------')
    });
}
// const startTask = () => {
const po = ['MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D', 'CC2642R1FRGZR?qs=rrS6PyfT74fHZyxeWJx9DQ%3D%3D', 'TPS62050DGSR?qs=Gse6rAGbi7%252Bae8YoL367mQ%3D%3D', 'TPS62160DGKR?qs=2UFnnMkojnUsiNxEDO710Q%3D%3D']
for (let p of po) {
  lcscsearch(p);
}
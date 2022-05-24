
var axios = require('axios');
const cheerio = require('cheerio');
console.log('-------------------------------ME-------------------------------')
// module.exports = () => {
  const searchme4 = () => {
  // MSP430FR2633IRHBT
var config = {
    method: 'get',
    url: 'https://www.mouser.tw/ProductDetail/MSP430FR2633IRHBT?qs=VymPLiRQZISEXW%2FbVKpnJQ%3D%3D',
    headers: { 
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"', 
      'sec-ch-ua-mobile': '?0', 
      'sec-ch-ua-platform': '"Windows"', 
      'Upgrade-Insecure-Requests': '1', 
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36', 
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
      'host': 'www.mouser.tw', 
    //   'Cookie': 'AKA_A2=A; ASP.NET_SessionId=0lda254t3momq3zgievdjels; CARTCOOKIEUUID=8f2bfe2b-754f-46cd-b15f-01b65ddbf546; __RequestVerificationToken=qZj_Mz0s_xqqXjSeCG6YmTVt-yqTSvo2tvAWNMfdRlce0XDpmu2MRACqxE4oPiCpTvfL08KzJ76JiBdogb1a5QC1IxY1; _abck=320C97C459AACA8418A49E0422505533~-1~YAAQdIpFy/ADp1GAAQAAAZ6/jQcayHKHqXZWb3O3sqhwxONITvPvc+Pqvy2YkhrHlL5jivfnQZQ+fZ93FGkxhbNNcf/7a/jozzNRC54EP3Vds0mDkZtuRRBDPrkzpeJcEwz7LT5ApofTpmc83jokPxw7SWEpR9p8qR9xBZnR/j+qC0lpov4o4oxMac6v2xfSe+XRaQhei3w6WdjlHhQNmjitJSmykK+jYeioy2DfDrGJEFr0LXCrpXHj3w/uN+WyNpGtLl818GBLzudckUCz7xImrtQrubQDK07ix0YKvnEb+P1Hl235qbSKFTEP1x2IBBXaJmnwaRoBa1UOTf2lFm0A5LshD6LHkby4Y2AYq3zjKoJ5mzW2aJf6QfEpnvASQsEsg62iuLlA~-1~-1~-1; ak_bmsc=7E8843A1814654E604F3A6692F04986F~000000000000000000000000000000~YAAQdIpFy/EDp1GAAQAAAZ6/jQ/aJBeDDak9+sXpBEuzXHm1fwCfopzEBl1oFgyu0sVo611DIlzjoToe6+Ns3zx54e+96eRbMnih0vL6fz8bYRgYeKyAuAgyJCo3jJqiSWO6Y26h/y0GN1tddmgvIRaBZxXdFCbqRpzCqRid7CdnyLexVJP+0EFxV1CWIRLtNgDsCk663tYCpmsAua2Vhta9xElnw9TzrJCtY3FjhLCSPNgGrBMUtn+IHMHrrWP4/yUnfJrs+/yvwQgT2PXI98qg8/43hdecsLIu4aTOQ7aNnSQInDhy5aJJD6o0orJyXLO5a0C+arQODHwoQ1iyMnCu8t8pWx70YmxHmRnRxBQMLoGhhnh5LZ/z; bm_mi=0C376D86368DB9F4E9819421C106F0AE~DizLCVm7A9NOvFH80ursXifuRCDrkmfyALVzaxFWWL9XoUUbebevayxVbJfSsYnqyGOr7W5JnQ4kTC55iNILbKP1ClJ2sI5mbzTK77DMhQFGn2sxfqF0soRLoheKcLtERCCicUJ8Ys27rACGKjREWmstKi14qZx8jke6JHl68juFn+FNKyzAKC+mRwhKPygQZxjt/88bdbkQqVaL+aREJkx5qoDcn1+V/bxQdY+PWK8SKjcrymeKgqLfkyBc5Gz+nIGt+dq1LL8PoIEkMXO8IWtG7pTOlFHxyTVmgf7nNNI=; bm_sz=8A0CEDFBB67F056D77DD1BE081AE56CE~YAAQdIpFy/IDp1GAAQAAAZ6/jQ/mC5Y61eHHCiLZQ1W3exK38p2nOa97N6rS5eKVbD2vlO4o5IOtJiQNSYQfCnU2st41FnOqYV/5WXSW+lEoHoOVCQyVQdoOY09gsyL0O3xgtqK2SclBmol30o+q52Fglvk7jNfEAU8HODB05463c5OACJDaQ8qNUqhlG8wLM9C//l3LRFAP+YyDc+XL3H9mG5zuSO/sURV/xXXcdjMW12As7YfvyKKmV8dFZFJuDvAXzWgwjA1ahdvSL886nXXU7PjGGvcYp4chq6MRgAJflA==~4339010~3748913; preferences=pl=zh-CHT&pc_tw=TWD; akacd_Default_PR=3829098385~rv=6~id=3cd3d6030b59369da14f246e94992df3'
    }
  };
    axios(config)
        .then(function (response) {
            const $ = cheerio.load(response.data);
            var partnumber = $('#pdpProdInfo > div.panel-heading.pdp-product-card-header > h1').text().trim()
            var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
            var onoder = $('#content-onOrderShipments').text().trim().replace(/\s+/g, ' ').replace(/檢視預期日期/g, '').replace(/隱藏日期/g, '').split(' ')
            var qty = $('#pricebreakqty_1').text().trim()
            var price = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(1) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ').split(' ')
            var qty2 = $('#pricebreakqty_10').text().trim()
            var price2 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ').split(' ')
            var qty3 = $('#pricebreakqty_25').text().trim()
            var price3 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(3) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ').split(' ')
            var qty4 = $('#pricebreakqty_100').text().trim()
            var price4 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(4) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ').split(' ')
            var qty5 = $('#pricebreakqty_250').text().trim()
            var price5 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(5) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ').split(' ')
            var qty6 = $('#pricebreakqty_500').text().trim()
            var price6 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(6) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ').split(' ')
            var qty7 = $('#pricebreakqty_1000').text().trim()
            var price7 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(7) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ').split(' ')
    
            console.log('ME partnumber: ' + partnumber)
            console.log('Inventory: ' + Inventory)
            console.log('onoder: ' + onoder)
            console.log('price: ' + qty + ':' + price + ', ' + qty2 + ':' + price2 + ', ' + qty3 + ':' + price3 + ', ' + qty4 + ':' + price4 + ', ' + qty5 + ':' + price5 + ', ' + qty6 + ':' + price6 + ', ' + qty7 + ':' + price7)
            console.log('-----------------------------------------------------------------')
        })
    };
  

    module.exports = searchme4;
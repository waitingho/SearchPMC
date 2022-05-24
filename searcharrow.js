var axios = require('axios');
const cheerio = require('cheerio');

// MSP430FR2633IRHBR
var config = {
    method: 'get',
    url: 'https://www.arrow.com/en/products/MSP430FR2633IRHBR/texas-instruments',
    //     headers: {
    //         'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
    //         'sec-ch-ua-mobile': '?0',
    //         'sec-ch-ua-platform': '"Windows"',
    //         'Upgrade-Insecure-Requests': '1',
    //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    //         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //         'host': 'www.arrow.com',
    //         // 'Cookie': 'IsNewUser=False; _abck=FFEC88F33C2CC726D9FC51D94608AC4D~-1~YAAQNPk90quyV2iAAQAAXPmFagc2QhXaTC68vZ1V9d+764hHjQEjlDExRfvnxuv20vy55Wqb/GpbYsMcum8Yp9lH3FWSkRbm1HVNKrLArCSaMvRk7DJJ0Mo9kFViE8Ntq2aq1bMVHt1u3/FLeMQ72xolrZ6j+cQ5swbBdq04eNCcEr4sgdhYCwzRZ0sUhFIyK+Vp7A0PbJ7o1Fdz/6FqcXZvNqrWOiGd69ozYTI8VWpmHKed23goYymzSCclJqHJT2g3l81IIp8DiKZsDfL3kw/20Izam9QlSDZRrD7a5r6/E5Y1xNVRKaGSs70dADq0g4hfl2lHnlohx5cJjRck87pfIQhEXIkSqYAtoRo0xcxygqFoCs+3W84mnQ==~-1~-1~-1; ak_bmsc=FF2CE9D4411408FD1E3D2A7F498C4067~000000000000000000000000000000~YAAQNPk90qyyV2iAAQAAXPmFag/o9VOjcTAgfjCCPIPcef81vJkiriuakNDooTqHVqIvDQdC2ctx/OFmeBfVhiGlrYqzz6jXDblFiudaOzFYjqKa6aPvaTTsbWpYVux9/rrdfuP2V1ey6oLELnRepg/CuUE6wgUFcQoSrtquvDLx3Gwk9GDtLuOto7f7csFGNc5gbMwsAwStNwVk/3jUKZztqS7m8Ni4NahH1NKhcseDXnLuctUOF/xWwASrH+HpvNMR8UQRosj2WdrL3ux4EDyHFco7Ht0Er12JU0e/roY4UVaqfxfIPab/hLBNlheydMQyseHEJSOG85RazDrJqQcfrjqYz7TmSeOx+ppjAQ58MW3GefpkPo88; arrowcache=a=EMPTY&cu=en-US&is=USD&ne=False; arrowcurrency=isocode=USD&culture=en-US; bm_mi=86AD288B0D0FA9827147C83C93BAD324~S//gCM/RFt3ngehFmaEif+xsDXG2mzQRQZTRtwxnijxkwDJQXbmKRObDqKXj7ZkbAi44sFyKXKJVG5x6ItNTM/yBcHsQxJPUO6INz7kWlwDZ6VUNyBG2nfQsLbS7+yV+nQc6HgpFTM7sYnn/BCajnRwFCrUPnJmk52RRU6G1wLOxJeiBm6d91kGyHLHOTUxQfXCZ/Gl379Z6peMv3GEUAEmvwPBzOpxx++SmXGxXArzSPO/SOOkYc5ZQF/CNXU9bzUL6Mdm3kF2gFBa5r5HdF//K+D4wvrbNCHmILMHK96s=; bm_sz=4A638FEC65B53F30996D9F49DBFC8584~YAAQNPk90q2yV2iAAQAAXPmFag9ZUoWtmUkOQ5QEXmmrExNpyGw4AB4HVrpp5th7wBv56dRPunoM2yE1w9uXl58QUdMI92Mpz/Am8izcXYb3bjhwp+1SMg/LF5t38Ovt437aGdCRW4UCRK4LF7B4I6k9hkxOOEkmuBCEDOv3LEPCWVemXzA/ijNpDrhouOSq/XUwYEhlz/c9HEpMy3UJrVsj9RJll4lglUV4YYWt2Hu5oOU72gft+l0Yi70YgKlNuxZD1Vpo6zBPUA8ZZK7tQ3Ilv/h7cx1XV3CbDGQqpN4CqA==~3686960~3421252; website#lang=en; ASP.NET_SessionId=ooyq3dd4r2xcjn3vztorvfvw'
    //     }
};


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
            console.log(qty + ': US' + price + ', ' + qty2 + ': US' + price2)
        } else {
            console.log('no info')
        }
        console.log('-----------------------------------------------------------------')
    })
    .catch(function (error) {
        console.log(error);
    });

var config = {
    method: 'get',
    url: 'https://www.arrow.com/en/products/msp430fr2633irhbt/texas-instruments?q=MSP430FR2633IRHBT',
    //     headers: {
    //         'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
    //         'sec-ch-ua-mobile': '?0',
    //         'sec-ch-ua-platform': '"Windows"',
    //         'Upgrade-Insecure-Requests': '1',
    //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    //         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //         'host': 'www.arrow.com',
    //         // 'Cookie': 'IsNewUser=False; _abck=FFEC88F33C2CC726D9FC51D94608AC4D~-1~YAAQNPk90quyV2iAAQAAXPmFagc2QhXaTC68vZ1V9d+764hHjQEjlDExRfvnxuv20vy55Wqb/GpbYsMcum8Yp9lH3FWSkRbm1HVNKrLArCSaMvRk7DJJ0Mo9kFViE8Ntq2aq1bMVHt1u3/FLeMQ72xolrZ6j+cQ5swbBdq04eNCcEr4sgdhYCwzRZ0sUhFIyK+Vp7A0PbJ7o1Fdz/6FqcXZvNqrWOiGd69ozYTI8VWpmHKed23goYymzSCclJqHJT2g3l81IIp8DiKZsDfL3kw/20Izam9QlSDZRrD7a5r6/E5Y1xNVRKaGSs70dADq0g4hfl2lHnlohx5cJjRck87pfIQhEXIkSqYAtoRo0xcxygqFoCs+3W84mnQ==~-1~-1~-1; ak_bmsc=FF2CE9D4411408FD1E3D2A7F498C4067~000000000000000000000000000000~YAAQNPk90qyyV2iAAQAAXPmFag/o9VOjcTAgfjCCPIPcef81vJkiriuakNDooTqHVqIvDQdC2ctx/OFmeBfVhiGlrYqzz6jXDblFiudaOzFYjqKa6aPvaTTsbWpYVux9/rrdfuP2V1ey6oLELnRepg/CuUE6wgUFcQoSrtquvDLx3Gwk9GDtLuOto7f7csFGNc5gbMwsAwStNwVk/3jUKZztqS7m8Ni4NahH1NKhcseDXnLuctUOF/xWwASrH+HpvNMR8UQRosj2WdrL3ux4EDyHFco7Ht0Er12JU0e/roY4UVaqfxfIPab/hLBNlheydMQyseHEJSOG85RazDrJqQcfrjqYz7TmSeOx+ppjAQ58MW3GefpkPo88; arrowcache=a=EMPTY&cu=en-US&is=USD&ne=False; arrowcurrency=isocode=USD&culture=en-US; bm_mi=86AD288B0D0FA9827147C83C93BAD324~S//gCM/RFt3ngehFmaEif+xsDXG2mzQRQZTRtwxnijxkwDJQXbmKRObDqKXj7ZkbAi44sFyKXKJVG5x6ItNTM/yBcHsQxJPUO6INz7kWlwDZ6VUNyBG2nfQsLbS7+yV+nQc6HgpFTM7sYnn/BCajnRwFCrUPnJmk52RRU6G1wLOxJeiBm6d91kGyHLHOTUxQfXCZ/Gl379Z6peMv3GEUAEmvwPBzOpxx++SmXGxXArzSPO/SOOkYc5ZQF/CNXU9bzUL6Mdm3kF2gFBa5r5HdF//K+D4wvrbNCHmILMHK96s=; bm_sz=4A638FEC65B53F30996D9F49DBFC8584~YAAQNPk90q2yV2iAAQAAXPmFag9ZUoWtmUkOQ5QEXmmrExNpyGw4AB4HVrpp5th7wBv56dRPunoM2yE1w9uXl58QUdMI92Mpz/Am8izcXYb3bjhwp+1SMg/LF5t38Ovt437aGdCRW4UCRK4LF7B4I6k9hkxOOEkmuBCEDOv3LEPCWVemXzA/ijNpDrhouOSq/XUwYEhlz/c9HEpMy3UJrVsj9RJll4lglUV4YYWt2Hu5oOU72gft+l0Yi70YgKlNuxZD1Vpo6zBPUA8ZZK7tQ3Ilv/h7cx1XV3CbDGQqpN4CqA==~3686960~3421252; website#lang=en; ASP.NET_SessionId=ooyq3dd4r2xcjn3vztorvfvw'
    //     }
};


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


var config = {
    method: 'get',
    url: 'https://www.arrow.com/en/products/CC2642R1FRGZR/texas-instruments',

    //     headers: {
    //         'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
    //         'sec-ch-ua-mobile': '?0',
    //         'sec-ch-ua-platform': '"Windows"',
    //         'Upgrade-Insecure-Requests': '1',
    //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    //         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //         'host': 'www.arrow.com',
    //         // 'Cookie': 'IsNewUser=False; _abck=FFEC88F33C2CC726D9FC51D94608AC4D~-1~YAAQNPk90quyV2iAAQAAXPmFagc2QhXaTC68vZ1V9d+764hHjQEjlDExRfvnxuv20vy55Wqb/GpbYsMcum8Yp9lH3FWSkRbm1HVNKrLArCSaMvRk7DJJ0Mo9kFViE8Ntq2aq1bMVHt1u3/FLeMQ72xolrZ6j+cQ5swbBdq04eNCcEr4sgdhYCwzRZ0sUhFIyK+Vp7A0PbJ7o1Fdz/6FqcXZvNqrWOiGd69ozYTI8VWpmHKed23goYymzSCclJqHJT2g3l81IIp8DiKZsDfL3kw/20Izam9QlSDZRrD7a5r6/E5Y1xNVRKaGSs70dADq0g4hfl2lHnlohx5cJjRck87pfIQhEXIkSqYAtoRo0xcxygqFoCs+3W84mnQ==~-1~-1~-1; ak_bmsc=FF2CE9D4411408FD1E3D2A7F498C4067~000000000000000000000000000000~YAAQNPk90qyyV2iAAQAAXPmFag/o9VOjcTAgfjCCPIPcef81vJkiriuakNDooTqHVqIvDQdC2ctx/OFmeBfVhiGlrYqzz6jXDblFiudaOzFYjqKa6aPvaTTsbWpYVux9/rrdfuP2V1ey6oLELnRepg/CuUE6wgUFcQoSrtquvDLx3Gwk9GDtLuOto7f7csFGNc5gbMwsAwStNwVk/3jUKZztqS7m8Ni4NahH1NKhcseDXnLuctUOF/xWwASrH+HpvNMR8UQRosj2WdrL3ux4EDyHFco7Ht0Er12JU0e/roY4UVaqfxfIPab/hLBNlheydMQyseHEJSOG85RazDrJqQcfrjqYz7TmSeOx+ppjAQ58MW3GefpkPo88; arrowcache=a=EMPTY&cu=en-US&is=USD&ne=False; arrowcurrency=isocode=USD&culture=en-US; bm_mi=86AD288B0D0FA9827147C83C93BAD324~S//gCM/RFt3ngehFmaEif+xsDXG2mzQRQZTRtwxnijxkwDJQXbmKRObDqKXj7ZkbAi44sFyKXKJVG5x6ItNTM/yBcHsQxJPUO6INz7kWlwDZ6VUNyBG2nfQsLbS7+yV+nQc6HgpFTM7sYnn/BCajnRwFCrUPnJmk52RRU6G1wLOxJeiBm6d91kGyHLHOTUxQfXCZ/Gl379Z6peMv3GEUAEmvwPBzOpxx++SmXGxXArzSPO/SOOkYc5ZQF/CNXU9bzUL6Mdm3kF2gFBa5r5HdF//K+D4wvrbNCHmILMHK96s=; bm_sz=4A638FEC65B53F30996D9F49DBFC8584~YAAQNPk90q2yV2iAAQAAXPmFag9ZUoWtmUkOQ5QEXmmrExNpyGw4AB4HVrpp5th7wBv56dRPunoM2yE1w9uXl58QUdMI92Mpz/Am8izcXYb3bjhwp+1SMg/LF5t38Ovt437aGdCRW4UCRK4LF7B4I6k9hkxOOEkmuBCEDOv3LEPCWVemXzA/ijNpDrhouOSq/XUwYEhlz/c9HEpMy3UJrVsj9RJll4lglUV4YYWt2Hu5oOU72gft+l0Yi70YgKlNuxZD1Vpo6zBPUA8ZZK7tQ3Ilv/h7cx1XV3CbDGQqpN4CqA==~3686960~3421252; website#lang=en; ASP.NET_SessionId=ooyq3dd4r2xcjn3vztorvfvw'
    //     }
};


axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        var partnumber = $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.col-lg-7 > div.Product-Summary.row.ng-star-inserted > div > div > div.col-7 > h1 > span.product-summary-name--Original').text().trim()
        // var Inventory = $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div:nth-child(1) > h2').text().trim()
        var Inventory = $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div.BuyingOptions-content.BuyingOptions--noBorder > h2').text().trim()
        var qty = $('#quantity20').text().trim()
        var price = $('#price10').text().trim()
        var qty2 = $('#quantity21').text().trim()
        var price2 = $('#price11').text().trim()
        console.log('Partnumber: ' + partnumber)
        console.log('Inventory: ' + Inventory)

        if (qty) {
            console.log(qty + ': US' + price + ', ' + qty2 + ': US' + price2)
        } else {
            console.log('no info')
        }
        console.log('-----------------------------------------------------------------')
    })
    .catch(function (error) {
        console.log(error);
    });

var config = {
    method: 'get',
    url: 'https://www.arrow.com/en/products/TPS62050DGSR/texas-instruments',

    //     headers: {
    //         'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
    //         'sec-ch-ua-mobile': '?0',
    //         'sec-ch-ua-platform': '"Windows"',
    //         'Upgrade-Insecure-Requests': '1',
    //         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    //         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //         'host': 'www.arrow.com',
    //         // 'Cookie': 'IsNewUser=False; _abck=FFEC88F33C2CC726D9FC51D94608AC4D~-1~YAAQNPk90quyV2iAAQAAXPmFagc2QhXaTC68vZ1V9d+764hHjQEjlDExRfvnxuv20vy55Wqb/GpbYsMcum8Yp9lH3FWSkRbm1HVNKrLArCSaMvRk7DJJ0Mo9kFViE8Ntq2aq1bMVHt1u3/FLeMQ72xolrZ6j+cQ5swbBdq04eNCcEr4sgdhYCwzRZ0sUhFIyK+Vp7A0PbJ7o1Fdz/6FqcXZvNqrWOiGd69ozYTI8VWpmHKed23goYymzSCclJqHJT2g3l81IIp8DiKZsDfL3kw/20Izam9QlSDZRrD7a5r6/E5Y1xNVRKaGSs70dADq0g4hfl2lHnlohx5cJjRck87pfIQhEXIkSqYAtoRo0xcxygqFoCs+3W84mnQ==~-1~-1~-1; ak_bmsc=FF2CE9D4411408FD1E3D2A7F498C4067~000000000000000000000000000000~YAAQNPk90qyyV2iAAQAAXPmFag/o9VOjcTAgfjCCPIPcef81vJkiriuakNDooTqHVqIvDQdC2ctx/OFmeBfVhiGlrYqzz6jXDblFiudaOzFYjqKa6aPvaTTsbWpYVux9/rrdfuP2V1ey6oLELnRepg/CuUE6wgUFcQoSrtquvDLx3Gwk9GDtLuOto7f7csFGNc5gbMwsAwStNwVk/3jUKZztqS7m8Ni4NahH1NKhcseDXnLuctUOF/xWwASrH+HpvNMR8UQRosj2WdrL3ux4EDyHFco7Ht0Er12JU0e/roY4UVaqfxfIPab/hLBNlheydMQyseHEJSOG85RazDrJqQcfrjqYz7TmSeOx+ppjAQ58MW3GefpkPo88; arrowcache=a=EMPTY&cu=en-US&is=USD&ne=False; arrowcurrency=isocode=USD&culture=en-US; bm_mi=86AD288B0D0FA9827147C83C93BAD324~S//gCM/RFt3ngehFmaEif+xsDXG2mzQRQZTRtwxnijxkwDJQXbmKRObDqKXj7ZkbAi44sFyKXKJVG5x6ItNTM/yBcHsQxJPUO6INz7kWlwDZ6VUNyBG2nfQsLbS7+yV+nQc6HgpFTM7sYnn/BCajnRwFCrUPnJmk52RRU6G1wLOxJeiBm6d91kGyHLHOTUxQfXCZ/Gl379Z6peMv3GEUAEmvwPBzOpxx++SmXGxXArzSPO/SOOkYc5ZQF/CNXU9bzUL6Mdm3kF2gFBa5r5HdF//K+D4wvrbNCHmILMHK96s=; bm_sz=4A638FEC65B53F30996D9F49DBFC8584~YAAQNPk90q2yV2iAAQAAXPmFag9ZUoWtmUkOQ5QEXmmrExNpyGw4AB4HVrpp5th7wBv56dRPunoM2yE1w9uXl58QUdMI92Mpz/Am8izcXYb3bjhwp+1SMg/LF5t38Ovt437aGdCRW4UCRK4LF7B4I6k9hkxOOEkmuBCEDOv3LEPCWVemXzA/ijNpDrhouOSq/XUwYEhlz/c9HEpMy3UJrVsj9RJll4lglUV4YYWt2Hu5oOU72gft+l0Yi70YgKlNuxZD1Vpo6zBPUA8ZZK7tQ3Ilv/h7cx1XV3CbDGQqpN4CqA==~3686960~3421252; website#lang=en; ASP.NET_SessionId=ooyq3dd4r2xcjn3vztorvfvw'
    //     }
};


axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        var partnumber = $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.col-lg-7 > div.Product-Summary.row.ng-star-inserted > div > div > div.col-7 > h1 > span.product-summary-name--Original').text().trim()
        // var Inventory = $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div:nth-child(1) > h2').text().trim()
        var Inventory = $('#page > section > div.Pdp-layout > div.Pdp-layout-top.Content > div > div.PdpMobileTabs-panel.col-lg-5 > section > div.BuyingOptions > div.BuyingOptions-content.BuyingOptions--noBorder > h2').text().trim()
        var qty = $('#quantity20').text().trim()
        var price = $('#price10').text().trim()
        var qty2 = $('#quantity21').text().trim()
        var price2 = $('#price11').text().trim()
        console.log('Partnumber: ' + partnumber)
        console.log('Inventory: ' + Inventory)

        if (qty) {
            console.log(qty + ': US' + price + ', ' + qty2 + ': US' + price2)
        } else {
            console.log('no info')
        }
        console.log('-----------------------------------------------------------------')
    })
    .catch(function (error) {
        console.log(error);
    });
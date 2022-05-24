
var axios = require('axios');
const cheerio = require('cheerio');


// module.exports = () => {

// MSP430FR2633IRHBR
var config = {
    method: 'get',
    url: 'https://www.mouser.tw/ProductDetail/MSP430FR2633IRHBR?qs=VymPLiRQZITRQFkH8VS6GQ%3D%3D',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.mouser.tw',
        'Cookie': 'AKA_A2=A; ASP.NET_SessionId=0lda254t3momq3zgievdjels; CARTCOOKIEUUID=8f2bfe2b-754f-46cd-b15f-01b65ddbf546; __RequestVerificationToken=qZj_Mz0s_xqqXjSeCG6YmTVt-yqTSvo2tvAWNMfdRlce0XDpmu2MRACqxE4oPiCpTvfL08KzJ76JiBdogb1a5QC1IxY1; _abck=320C97C459AACA8418A49E0422505533~-1~YAAQpegyF/TavJKAAQAAv02OkwcNEox777ZBCOveJI6gqnCEOcnTxYeQfril5TkI2UZsVORwA/Nb+o553JwR5OzfiFaOkpJLDJ0t9WpJBYzM+Qau6LgFYXjQ8WrLivpiGqmoz3L4uDAgP7eBjhFamaL+t5Ea2vh7pKNWWAALOKvw/BzmgkreZTyAgcGyGoLx0r/Ck57PmBGh5jQ+uYDxsV3KEG7o3S6/ZJNuvjw/TsFeQXFVVLlCBukF87Oy7gdn2zwVYE5ODJaMYTu9iIw5G6HTFMxgOb0EUlYPphdOcwFyCcJ1iZ415kL2xLW6afuKKgizWvPt6RzRlDTMmKFYfwLYhzjb2DS6vNdhkQSFseJLS5LPFbJntzUswgrYP5HjsnqOwP+zE9PG~-1~-1~-1; ak_bmsc=A6373E8146F582F99646786678AED4DA~000000000000000000000000000000~YAAQpegyF/XavJKAAQAAv02Okw8Qh3BATb4G/talO8yZUjzZoNZkAfU+DkMDU0mfS8YfUwLnyoCElj9EMvB2uXdKWdkeZJtcS27aA3C7syT8b5RqXxqGn9uuup2z90RKUHh7k300H/ZQUZcNTP4V+cRV8Kv9tJhAhWDqXoD6dxaJwI9JgcewXyiwz7wZqi7AMN8GnxJESUCh/brup2Tmr5WZoGVbvH82PjEa3HDfNAx5q1yU6xmTmw3EImv6BotpU18WiW2ntxtkznGiYTFau9WOUplQPFYTKM7RqDpedO2E+GyyRA1xgBrNIOtYSsrmW1juce6+CqBGBmoDxMsIpRNR/25TDNx8RnuepvEgAoE43TkoegM9HjsqkA==; bm_mi=1C0CB4AF5901824DEFC4CFBB2D633901~YAAQpegyFzzbvJKAAQAAZleOkw8E0z3PR/FIus01OcFxVXMsQ2cXnIX7FFDoh5rAnOwUPxtNrmfYgRwnBVyJgm/jn9itbFw8mOfAw5hw8+fo6LPrZVItDGcPXgB7vRZMlJT4Zrvg4KYHIVGETLKUbI003+UxymRYbBU8BntzKweMgbAnWjsn/6Dy1Xq87P/GCpl1CD/lZDJYHIpEjHs6PFwDkn/gwuv5Rq3V+AATkxoSqkbE8k+I3lQIVti/OYJl1CIJMG5Jdy1k7ni/HKf4Bx4cpWIk+VoexP3phP6n+JqAG9RsBgSvQfAy50vXlCt6qEsIA4+WHVHPX8gjGea+/QVZ46ZFUQymzvoI2A==~1; bm_sz=DE3C3F492AF87FDAD0A4C59551B8B817~YAAQpegyF/favJKAAQAAv02Okw9BPq+iYqro7tksYpNmV2yiqo7R5/65ZVK/LaoTBfq+VdSDQVB22SEEmYjUnXRQqhTGZaM/0AnGupjOXzxVLZcIU1AixvpjCTZf/TZpwJttjj4phT3lrRYPebElKrj4ngWyqPyyDsrkWhgdEfCm7YTWexX+5p/+STkn4B/4JUb1K7SzncRSJ/vuQUhRW+gjG7IARBc3FMJsNmGKfvKks10kltf++repT4QLmPFFgpj1Tvt3YqMqM8SrPhayIBMmb8UxIuSHMzQa+kzYN0FfIA==~3555908~4404292; preferences=pl=zh-CHT&pc_tw=TWD; akacd_Default_PR=3829098385~rv=6~id=3cd3d6030b59369da14f246e94992df3'
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

        console.log('partnumber: ' + partnumber)
        console.log('Inventory: ' + Inventory)
        if (qty) {
            console.log('onoder: ' + onoder)
        } else {
            console.log('Price: no info')
        }

        console.log('price: ' + qty + ':' + price + ', ' + qty2 + ':' + price2 + ', ' + qty3 + ':' + price3 + ', ' + qty4 + ':' + price4 + ', ' + qty5 + ':' + price5 + ', ' + qty6 + ':' + price6 + ', ' + qty7 + ':' + price7)
        console.log('-------------------------------------------------------------------------------------------------------------------------------')
    });

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
        var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div:nth-child(1)').text().trim().replace(/\s+/g, ' ')
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

        console.log('partnumber: ' + partnumber)
        console.log('Inventory: ' + Inventory)

        if (onoder) {
            console.log('onoder: ' + onoder)
        } else {
            console.log('onoder: no info')
        }
        console.log('price: ' + qty + ':' + price + ', ' + qty2 + ':' + price2 + ', ' + qty3 + ':' + price3 + ', ' + qty4 + ':' + price4 + ', ' + qty5 + ':' + price5 + ', ' + qty6 + ':' + price6 + ', ' + qty7 + ':' + price7)
        console.log('-----------------------------------------------------------------')
    })


// CC2642R1FRGZR
var config = {
    method: 'get',
    url: 'https://www.mouser.tw/ProductDetail/CC2642R1FRGZR?qs=rrS6PyfT74fHZyxeWJx9DQ%3D%3D',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.mouser.tw',
        // 'Cookie': 'AKA_A2=A; ASP.NET_SessionId=nniro2oklmyh4p1jrzigd3d1; CARTCOOKIEUUID=8f2bfe2b-754f-46cd-b15f-01b65ddbf546; __RequestVerificationToken=kCQBvWG4annGWxMHLHfihEVz1dflrVp_rkNvGsOj19ifKsJ0mk5m7hWU8BLoQh02EMnkm-0ac8j_vrBKGRCsYzJhUJs1; _abck=320C97C459AACA8418A49E0422505533~-1~YAAQHvk90svE4laAAQAAE9ouZQe0vG+t+634oZS5GRj8wHnYQgIC8pnCCvqg8ZpTCb6cN10gPs/Af9dAhws7CTako0D6RQwgoEYIB7L7w1BzEIfRWqZEnHvHQuFCC5uDiIDNCAEQFeXKnnsvgt4vSFKIYl8zAAeTZ/KpL1VYcxF1gM3wpNH7OV7UJ7yNzOfRszJPHAJ/HJEvvD94MADYSCTvMoOzgoaCqxCflGP+Yr9OGTucXdaVJFTgh74FJN5PXpULEEgmom64rkq2dup8O6bZSKjjjGVVT2YSA28uhEt5Far3qENVKkV00FZ1JHrcLCaIfTUsKADIbotSR2LtZXcR5va9wd2N/EuKL2HntlSLbDGveYSoLfZ4C7I0BE6FcsSeEXPKpgKD~-1~-1~-1; ak_bmsc=0C2C82F192EAD185B36503AC80B38ED0~000000000000000000000000000000~YAAQHvk90nPG4laAAQAAMi0vZQ9UF6nPx1aA6xeb+sd5KIDEeBs38GrpYeAKiakoLIpcp6NvLyT173dLPx1cFvn5IbcMv4iKWTjDrUhuGGPuMxMKl7vQ568imizsXfPdgu3YZ/Pfw2/uTMxlBDtyC9Yz+/c7PNNoqGmE2cE4XD44W+ZwBprlAZY4Ssl8WjQaFDNv+9rxCDEZkXmpe3W1RyrsPPh1Ru1Q68Dcesdra168XxjSEn8Bx5XCKjWcwTx8c9GxQ0tq+vEjouUgV8D8LCa1nTUTG/BqB7qdJ3uIBDVBn7ZLs/uA/iJDQnusBClj2deYGvE3Ad4Ej4nlYoZ3sJlqVQVtqXS0FZBXIx9nnoR+hYkTKXGI/zv3; bm_sz=38E6F94028A3F56FC9903A85077AC182~YAAQHvk90szE4laAAQAAE9ouZQ/dN+ebV7fz8eyeafuZhiGOMLTfFkPf+HUcpL3jqBtPElgYymgC0v+F5OKJ+QBrquh1BQnbt2jK0RS2gBxCNEmUnmFcK8FIMpa0wVm2gtGC3L5VIx27wPJrn4ZWYG6PQvO6cpewlAIzCME6rShI/+jwnhdx7su0vu2aRovyHFdOALnDcQ7Q9t8qcdvkr0yjNkOTaO2S4k7vcGSrffzWpBE2gOtmztmQ+ow4UQB9Vtd12exyEnww5Dz8HcnFKhREQou8V1Ww54XXIl8y7T8mjA==~3420727~3616835; preferences=pl=zh-CHT&pc_tw=TWD; akacd_Default_PR=3828038530~rv=78~id=fcd5b2f4fff8767ca50da7d7f4e13801'
    }
};

axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        var partnumber = $('#pdpProdInfo > div.panel-heading.pdp-product-card-header > h1').text().trim()
        var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
        var onoder = $('#content-onOrderShipments').text().trim().replace(/\s+/g, ' ').replace(/檢視預期日期/g, '').replace(/隱藏日期/g, '').split(' ')
        var qty = $('#pricebreakqty_1').text().trim()
        // var price = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(1) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ').split(' ')
        var price = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty2 = $('#pricebreakqty_10').text().trim()
        var price2 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(3) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty3 = $('#pricebreakqty_25').text().trim()
        var price3 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(4) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty4 = $('#pricebreakqty_100').text().trim()
        var price4 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(5) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty5 = $('#pricebreakqty_250').text().trim()
        var price5 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(6) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty6 = $('#pricebreakqty_500').text().trim()
        var price6 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(7) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty7 = $('#pricebreakqty_1000').text().trim()
        var price7 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(8) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')

        console.log('partnumber: ' + partnumber)
        console.log('Inventory: ' + Inventory)
        console.log('onoder: ' + onoder)
        console.log('Price: ' + qty + ':' + price + ', ' + qty2 + ':' + price2 + ', ' + qty3 + ':' + price3 + ', ' + qty4 + ':' + price4 + ', ' + qty5 + ':' + price5 + ', ' + qty6 + ':' + price6 + ', ' + qty7 + ':' + price7)
        console.log('-----------------------------------------------------------------')
    })

// CC2642R1FRGZT
var config = {
    method: 'get',
    url: 'https://www.mouser.tw/ProductDetail/CC2642R1FRGZT?qs=rrS6PyfT74fPHTvaP%2F1aHA%3D%3D',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.mouser.tw',
        //   'Cookie': 'AKA_A2=A; ASP.NET_SessionId=0lda254t3momq3zgievdjels; CARTCOOKIEUUID=8f2bfe2b-754f-46cd-b15f-01b65ddbf546; __RequestVerificationToken=qZj_Mz0s_xqqXjSeCG6YmTVt-yqTSvo2tvAWNMfdRlce0XDpmu2MRACqxE4oPiCpTvfL08KzJ76JiBdogb1a5QC1IxY1; _abck=320C97C459AACA8418A49E0422505533~-1~YAAQdIpFy/ADp1GAAQAAAZ6/jQcayHKHqXZWb3O3sqhwxONITvPvc+Pqvy2YkhrHlL5jivfnQZQ+fZ93FGkxhbNNcf/7a/jozzNRC54EP3Vds0mDkZtuRRBDPrkzpeJcEwz7LT5ApofTpmc83jokPxw7SWEpR9p8qR9xBZnR/j+qC0lpov4o4oxMac6v2xfSe+XRaQhei3w6WdjlHhQNmjitJSmykK+jYeioy2DfDrGJEFr0LXCrpXHj3w/uN+WyNpGtLl818GBLzudckUCz7xImrtQrubQDK07ix0YKvnEb+P1Hl235qbSKFTEP1x2IBBXaJmnwaRoBa1UOTf2lFm0A5LshD6LHkby4Y2AYq3zjKoJ5mzW2aJf6QfEpnvASQsEsg62iuLlA~-1~-1~-1; ak_bmsc=7E8843A1814654E604F3A6692F04986F~000000000000000000000000000000~YAAQdIpFy/EDp1GAAQAAAZ6/jQ/aJBeDDak9+sXpBEuzXHm1fwCfopzEBl1oFgyu0sVo611DIlzjoToe6+Ns3zx54e+96eRbMnih0vL6fz8bYRgYeKyAuAgyJCo3jJqiSWO6Y26h/y0GN1tddmgvIRaBZxXdFCbqRpzCqRid7CdnyLexVJP+0EFxV1CWIRLtNgDsCk663tYCpmsAua2Vhta9xElnw9TzrJCtY3FjhLCSPNgGrBMUtn+IHMHrrWP4/yUnfJrs+/yvwQgT2PXI98qg8/43hdecsLIu4aTOQ7aNnSQInDhy5aJJD6o0orJyXLO5a0C+arQODHwoQ1iyMnCu8t8pWx70YmxHmRnRxBQMLoGhhnh5LZ/z; bm_mi=0C376D86368DB9F4E9819421C106F0AE~DizLCVm7A9NOvFH80ursXifuRCDrkmfyALVzaxFWWL9XoUUbebevayxVbJfSsYnqyGOr7W5JnQ4kTC55iNILbKP1ClJ2sI5mbzTK77DMhQGmcBUMLYSBP5FUQQgIBRoJWCg1ky0bYa76silGHRWzxOzkxBbhAb5taTkYxwZEQQ2C3lBjqFsZ9oRD3UgbzL1GVhscUz6QyMc1KVhxJmWE4vnfoPvGLMjqXF4vmaFqF27WSYYfBbwkt93TuFcEmbaW; bm_sz=8A0CEDFBB67F056D77DD1BE081AE56CE~YAAQdIpFy/IDp1GAAQAAAZ6/jQ/mC5Y61eHHCiLZQ1W3exK38p2nOa97N6rS5eKVbD2vlO4o5IOtJiQNSYQfCnU2st41FnOqYV/5WXSW+lEoHoOVCQyVQdoOY09gsyL0O3xgtqK2SclBmol30o+q52Fglvk7jNfEAU8HODB05463c5OACJDaQ8qNUqhlG8wLM9C//l3LRFAP+YyDc+XL3H9mG5zuSO/sURV/xXXcdjMW12As7YfvyKKmV8dFZFJuDvAXzWgwjA1ahdvSL886nXXU7PjGGvcYp4chq6MRgAJflA==~4339010~3748913; preferences=pl=zh-CHT&pc_tw=TWD; akacd_Default_PR=3829098385~rv=6~id=3cd3d6030b59369da14f246e94992df3'
    }
};

axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        var partnumber = $('#pdpProdInfo > div.panel-heading.pdp-product-card-header > h1').text().trim()
        var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
        var onoder = $('#content-onOrderShipments').text().trim().replace(/\s+/g, ' ').replace(/檢視預期日期/g, '').replace(/隱藏日期/g, '').split(' ')
        var qty = $('#pricebreakqty_1').text().trim()
        // var price = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(1) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ').split(' ')
        var price = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty2 = $('#pricebreakqty_10').text().trim()
        var price2 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(3) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty3 = $('#pricebreakqty_25').text().trim()
        var price3 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(4) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty4 = $('#pricebreakqty_100').text().trim()
        var price4 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(5) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty5 = $('#pricebreakqty_250').text().trim()
        var price5 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(6) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty6 = $('#pricebreakqty_500').text().trim()
        var price6 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(7) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty7 = $('#pricebreakqty_1000').text().trim()
        var price7 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(8) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')

        console.log('partnumber: ' + partnumber)
        console.log('Inventory: ' + Inventory)
        console.log('onoder: ' + onoder)
        console.log('Price: ' + qty + ':' + price + ', ' + qty2 + ':' + price2 + ', ' + qty3 + ':' + price3 + ', ' + qty4 + ':' + price4 + ', ' + qty5 + ':' + price5 + ', ' + qty6 + ':' + price6 + ', ' + qty7 + ':' + price7)
        console.log('-----------------------------------------------------------------')
    })

//TPS62050DGSR
var config = {
    method: 'get',
    url: 'https://www.mouser.tw/ProductDetail/TPS62050DGSR?qs=Gse6rAGbi7%252Bae8YoL367mQ%3D%3D',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.mouser.tw',
        // 'Cookie': 'AKA_A2=A; ASP.NET_SessionId=nniro2oklmyh4p1jrzigd3d1; CARTCOOKIEUUID=8f2bfe2b-754f-46cd-b15f-01b65ddbf546; __RequestVerificationToken=kCQBvWG4annGWxMHLHfihEVz1dflrVp_rkNvGsOj19ifKsJ0mk5m7hWU8BLoQh02EMnkm-0ac8j_vrBKGRCsYzJhUJs1; _abck=320C97C459AACA8418A49E0422505533~-1~YAAQHvk90svE4laAAQAAE9ouZQe0vG+t+634oZS5GRj8wHnYQgIC8pnCCvqg8ZpTCb6cN10gPs/Af9dAhws7CTako0D6RQwgoEYIB7L7w1BzEIfRWqZEnHvHQuFCC5uDiIDNCAEQFeXKnnsvgt4vSFKIYl8zAAeTZ/KpL1VYcxF1gM3wpNH7OV7UJ7yNzOfRszJPHAJ/HJEvvD94MADYSCTvMoOzgoaCqxCflGP+Yr9OGTucXdaVJFTgh74FJN5PXpULEEgmom64rkq2dup8O6bZSKjjjGVVT2YSA28uhEt5Far3qENVKkV00FZ1JHrcLCaIfTUsKADIbotSR2LtZXcR5va9wd2N/EuKL2HntlSLbDGveYSoLfZ4C7I0BE6FcsSeEXPKpgKD~-1~-1~-1; ak_bmsc=0C2C82F192EAD185B36503AC80B38ED0~000000000000000000000000000000~YAAQHvk90nPG4laAAQAAMi0vZQ9UF6nPx1aA6xeb+sd5KIDEeBs38GrpYeAKiakoLIpcp6NvLyT173dLPx1cFvn5IbcMv4iKWTjDrUhuGGPuMxMKl7vQ568imizsXfPdgu3YZ/Pfw2/uTMxlBDtyC9Yz+/c7PNNoqGmE2cE4XD44W+ZwBprlAZY4Ssl8WjQaFDNv+9rxCDEZkXmpe3W1RyrsPPh1Ru1Q68Dcesdra168XxjSEn8Bx5XCKjWcwTx8c9GxQ0tq+vEjouUgV8D8LCa1nTUTG/BqB7qdJ3uIBDVBn7ZLs/uA/iJDQnusBClj2deYGvE3Ad4Ej4nlYoZ3sJlqVQVtqXS0FZBXIx9nnoR+hYkTKXGI/zv3; bm_sz=38E6F94028A3F56FC9903A85077AC182~YAAQHvk90szE4laAAQAAE9ouZQ/dN+ebV7fz8eyeafuZhiGOMLTfFkPf+HUcpL3jqBtPElgYymgC0v+F5OKJ+QBrquh1BQnbt2jK0RS2gBxCNEmUnmFcK8FIMpa0wVm2gtGC3L5VIx27wPJrn4ZWYG6PQvO6cpewlAIzCME6rShI/+jwnhdx7su0vu2aRovyHFdOALnDcQ7Q9t8qcdvkr0yjNkOTaO2S4k7vcGSrffzWpBE2gOtmztmQ+ow4UQB9Vtd12exyEnww5Dz8HcnFKhREQou8V1Ww54XXIl8y7T8mjA==~3420727~3616835; preferences=pl=zh-CHT&pc_tw=TWD; akacd_Default_PR=3828038530~rv=78~id=fcd5b2f4fff8767ca50da7d7f4e13801'
    }
};

axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        var partnumber = $('#pdpProdInfo > div.panel-heading.pdp-product-card-header > h1').text().trim()
        var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
        var onoder = $('#content-onOrderShipments').text().trim().replace(/\s+/g, ' ').replace(/檢視預期日期/g, '').replace(/隱藏日期/g, '').split(' ')
        var qty = $('#pricebreakqty_1').text().trim()
        var price = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty2 = $('#pricebreakqty_10').text().trim()
        var price2 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(3) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty3 = $('#pricebreakqty_25').text().trim()
        var price3 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(4) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty4 = $('#pricebreakqty_100').text().trim()
        var price4 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(5) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty5 = $('#pricebreakqty_250').text().trim()
        var price5 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(6) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty6 = $('#pricebreakqty_500').text().trim()
        var price6 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(7) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty7 = $('#pricebreakqty_1000').text().trim()
        var price7 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(8) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')

        console.log('partnumber: ' + partnumber)
        console.log('Inventory: ' + Inventory)
        console.log('onoder: ' + onoder)
        console.log('Price: ' + qty + ':' + price + ', ' + qty2 + ':' + price2 + ', ' + qty3 + ':' + price3 + ', ' + qty4 + ':' + price4 + ', ' + qty5 + ':' + price5 + ', ' + qty6 + ':' + price6 + ', ' + qty7 + ':' + price7)
        console.log('-----------------------------------------------------------------')
    })


// TPS62160DGKR
var config = {
    method: 'get',
    url: 'https://www.mouser.tw/ProductDetail/TPS62160DGKR?qs=2UFnnMkojnUsiNxEDO710Q%3D%3D',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.mouser.tw',
        // 'Cookie': 'AKA_A2=A; ASP.NET_SessionId=nniro2oklmyh4p1jrzigd3d1; CARTCOOKIEUUID=8f2bfe2b-754f-46cd-b15f-01b65ddbf546; __RequestVerificationToken=kCQBvWG4annGWxMHLHfihEVz1dflrVp_rkNvGsOj19ifKsJ0mk5m7hWU8BLoQh02EMnkm-0ac8j_vrBKGRCsYzJhUJs1; _abck=320C97C459AACA8418A49E0422505533~-1~YAAQHvk90svE4laAAQAAE9ouZQe0vG+t+634oZS5GRj8wHnYQgIC8pnCCvqg8ZpTCb6cN10gPs/Af9dAhws7CTako0D6RQwgoEYIB7L7w1BzEIfRWqZEnHvHQuFCC5uDiIDNCAEQFeXKnnsvgt4vSFKIYl8zAAeTZ/KpL1VYcxF1gM3wpNH7OV7UJ7yNzOfRszJPHAJ/HJEvvD94MADYSCTvMoOzgoaCqxCflGP+Yr9OGTucXdaVJFTgh74FJN5PXpULEEgmom64rkq2dup8O6bZSKjjjGVVT2YSA28uhEt5Far3qENVKkV00FZ1JHrcLCaIfTUsKADIbotSR2LtZXcR5va9wd2N/EuKL2HntlSLbDGveYSoLfZ4C7I0BE6FcsSeEXPKpgKD~-1~-1~-1; ak_bmsc=0C2C82F192EAD185B36503AC80B38ED0~000000000000000000000000000000~YAAQHvk90nPG4laAAQAAMi0vZQ9UF6nPx1aA6xeb+sd5KIDEeBs38GrpYeAKiakoLIpcp6NvLyT173dLPx1cFvn5IbcMv4iKWTjDrUhuGGPuMxMKl7vQ568imizsXfPdgu3YZ/Pfw2/uTMxlBDtyC9Yz+/c7PNNoqGmE2cE4XD44W+ZwBprlAZY4Ssl8WjQaFDNv+9rxCDEZkXmpe3W1RyrsPPh1Ru1Q68Dcesdra168XxjSEn8Bx5XCKjWcwTx8c9GxQ0tq+vEjouUgV8D8LCa1nTUTG/BqB7qdJ3uIBDVBn7ZLs/uA/iJDQnusBClj2deYGvE3Ad4Ej4nlYoZ3sJlqVQVtqXS0FZBXIx9nnoR+hYkTKXGI/zv3; bm_sz=38E6F94028A3F56FC9903A85077AC182~YAAQHvk90szE4laAAQAAE9ouZQ/dN+ebV7fz8eyeafuZhiGOMLTfFkPf+HUcpL3jqBtPElgYymgC0v+F5OKJ+QBrquh1BQnbt2jK0RS2gBxCNEmUnmFcK8FIMpa0wVm2gtGC3L5VIx27wPJrn4ZWYG6PQvO6cpewlAIzCME6rShI/+jwnhdx7su0vu2aRovyHFdOALnDcQ7Q9t8qcdvkr0yjNkOTaO2S4k7vcGSrffzWpBE2gOtmztmQ+ow4UQB9Vtd12exyEnww5Dz8HcnFKhREQou8V1Ww54XXIl8y7T8mjA==~3420727~3616835; preferences=pl=zh-CHT&pc_tw=TWD; akacd_Default_PR=3828038530~rv=78~id=fcd5b2f4fff8767ca50da7d7f4e13801'
    }
};

axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        var partnumber = $('#pdpProdInfo > div.panel-heading.pdp-product-card-header > h1').text().trim()
        var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
        var onoder = $('#content-onOrderShipments').text().trim().replace(/\s+/g, ' ').replace(/檢視預期日期/g, '').replace(/隱藏日期/g, '').split(' ')
        var qty = $('#pricebreakqty_1').text().trim()
        var price = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty2 = $('#pricebreakqty_10').text().trim()
        var price2 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(3) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty3 = $('#pricebreakqty_25').text().trim()
        var price3 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(4) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty4 = $('#pricebreakqty_100').text().trim()
        var price4 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(5) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty5 = $('#pricebreakqty_250').text().trim()
        var price5 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(6) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty6 = $('#pricebreakqty_500').text().trim()
        var price6 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(7) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty7 = $('#pricebreakqty_1000').text().trim()
        var price7 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(8) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')

        console.log('partnumber: ' + partnumber)
        console.log('Inventory: ' + Inventory)
        console.log('onoder: ' + onoder)
        console.log('Price: ' + qty + ':' + price + ', ' + qty2 + ':' + price2 + ', ' + qty3 + ':' + price3 + ', ' + qty4 + ':' + price4 + ', ' + qty5 + ':' + price5 + ', ' + qty6 + ':' + price6 + ', ' + qty7 + ':' + price7)
        console.log('-----------------------------------------------------------------')
    })
    .catch(function (error) {
        console.log(error);
    });


// TPS62160DGKT
var config = {
    method: 'get',
    url: 'https://www.mouser.tw/ProductDetail/TPS62160DGKT?qs=2UFnnMkojnVQry4yr%2Fdsnw%3D%3D',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.mouser.tw',
        // 'Cookie': 'AKA_A2=A; ASP.NET_SessionId=nniro2oklmyh4p1jrzigd3d1; CARTCOOKIEUUID=8f2bfe2b-754f-46cd-b15f-01b65ddbf546; __RequestVerificationToken=kCQBvWG4annGWxMHLHfihEVz1dflrVp_rkNvGsOj19ifKsJ0mk5m7hWU8BLoQh02EMnkm-0ac8j_vrBKGRCsYzJhUJs1; _abck=320C97C459AACA8418A49E0422505533~-1~YAAQHvk90svE4laAAQAAE9ouZQe0vG+t+634oZS5GRj8wHnYQgIC8pnCCvqg8ZpTCb6cN10gPs/Af9dAhws7CTako0D6RQwgoEYIB7L7w1BzEIfRWqZEnHvHQuFCC5uDiIDNCAEQFeXKnnsvgt4vSFKIYl8zAAeTZ/KpL1VYcxF1gM3wpNH7OV7UJ7yNzOfRszJPHAJ/HJEvvD94MADYSCTvMoOzgoaCqxCflGP+Yr9OGTucXdaVJFTgh74FJN5PXpULEEgmom64rkq2dup8O6bZSKjjjGVVT2YSA28uhEt5Far3qENVKkV00FZ1JHrcLCaIfTUsKADIbotSR2LtZXcR5va9wd2N/EuKL2HntlSLbDGveYSoLfZ4C7I0BE6FcsSeEXPKpgKD~-1~-1~-1; ak_bmsc=0C2C82F192EAD185B36503AC80B38ED0~000000000000000000000000000000~YAAQHvk90nPG4laAAQAAMi0vZQ9UF6nPx1aA6xeb+sd5KIDEeBs38GrpYeAKiakoLIpcp6NvLyT173dLPx1cFvn5IbcMv4iKWTjDrUhuGGPuMxMKl7vQ568imizsXfPdgu3YZ/Pfw2/uTMxlBDtyC9Yz+/c7PNNoqGmE2cE4XD44W+ZwBprlAZY4Ssl8WjQaFDNv+9rxCDEZkXmpe3W1RyrsPPh1Ru1Q68Dcesdra168XxjSEn8Bx5XCKjWcwTx8c9GxQ0tq+vEjouUgV8D8LCa1nTUTG/BqB7qdJ3uIBDVBn7ZLs/uA/iJDQnusBClj2deYGvE3Ad4Ej4nlYoZ3sJlqVQVtqXS0FZBXIx9nnoR+hYkTKXGI/zv3; bm_sz=38E6F94028A3F56FC9903A85077AC182~YAAQHvk90szE4laAAQAAE9ouZQ/dN+ebV7fz8eyeafuZhiGOMLTfFkPf+HUcpL3jqBtPElgYymgC0v+F5OKJ+QBrquh1BQnbt2jK0RS2gBxCNEmUnmFcK8FIMpa0wVm2gtGC3L5VIx27wPJrn4ZWYG6PQvO6cpewlAIzCME6rShI/+jwnhdx7su0vu2aRovyHFdOALnDcQ7Q9t8qcdvkr0yjNkOTaO2S4k7vcGSrffzWpBE2gOtmztmQ+ow4UQB9Vtd12exyEnww5Dz8HcnFKhREQou8V1Ww54XXIl8y7T8mjA==~3420727~3616835; preferences=pl=zh-CHT&pc_tw=TWD; akacd_Default_PR=3828038530~rv=78~id=fcd5b2f4fff8767ca50da7d7f4e13801'
    }
};

axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        var partnumber = $('#pdpProdInfo > div.panel-heading.pdp-product-card-header > h1').text().trim()
        var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
        var onoder = $('#content-onOrderShipments').text().trim().replace(/\s+/g, ' ').replace(/檢視預期日期/g, '').replace(/隱藏日期/g, '').split(' ')
        var qty = $('#pricebreakqty_1').text().trim()
        var price = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(2) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty2 = $('#pricebreakqty_10').text().trim()
        var price2 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(3) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty3 = $('#pricebreakqty_25').text().trim()
        var price3 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(4) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty4 = $('#pricebreakqty_100').text().trim()
        var price4 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(5) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty5 = $('#pricebreakqty_250').text().trim()
        var price5 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(6) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty6 = $('#pricebreakqty_500').text().trim()
        var price6 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(7) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')
        var qty7 = $('#pricebreakqty_1000').text().trim()
        var price7 = $('#pdpPricingAvailability > div.panel-body > div.pdp-pricing-table > table > tbody > tr:nth-child(8) > td:nth-child(2)').text().trim().replace(/\s+/g, ' ')

        console.log('partnumber: ' + partnumber)
        console.log('Inventory: ' + Inventory)
        console.log('onoder: ' + onoder + ' ')
        console.log('Price: ' + qty + ':' + price + ', ' + qty2 + ':' + price2 + ', ' + qty3 + ':' + price3 + ', ' + qty4 + ':' + price4 + ', ' + qty5 + ':' + price5 + ', ' + qty6 + ':' + price6 + ', ' + qty7 + ':' + price7)
        console.log('-----------------------------------------------------------------')
    })
    .catch(function (error) {
        console.log(error);
    });
// }
// }
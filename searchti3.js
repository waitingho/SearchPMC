var axios = require('axios');
const cheerio = require('cheerio');


// MSP430FR2633IRHBR
var config = {
    method: 'get',
    url: 'https://www.ti.com/storeservices/cart/opninventory?opn=MSP430FR2633IRHBR',
    headers: {
        'X-Sec-Clge-Req-Type': 'ajax',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-platform': '"Windows"',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'host': 'www.ti.com',
        'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQtz7cPbbs+gKAAQAAMz0oSgeDk5+yZ1/tUrp62xQ7U7XfgkWOTfKIpoW7YO58OAkFXuQ7dRPcS8Y92f/Sq8uHb7lXDb7GkpxjgaKrnxxWnvB90BscAaI4hrI2WUprgOXNZHwjSntj9Wc682tImNM1ypLTXxqWw8YWAgD4b/2h/LDl7JkaaF2qtSBSQTmbZ1JYtblfwUmcI5W9LCSwR21VEYD0ABtBq+FCXmMxuR4dm0ShgKZuRSRBu4tldImRq3JXUCaocnDwlKOzm7qZZGjxtt8u3q8l2PiS0UL/PE79YJRMkqqCSWoKydoB536YTZQx9CRdHFu6h7uvr/ozXHd/ZeET1BJ4DMJ8swH49mpieuP0TAfPQi7J3Ka63mqZstC8dBcZuAtiZP1RJQHeq6VWCpKSYG2fL1Rw7ZwLmDy6CTBueteJT5wUUDRYNYK1+WDu/2NG2FXbpqKnarWP~-1~-1~-1; ak_bmsc=F8D0CB606F85B4CBEB2C0E9EEBE11E7F~000000000000000000000000000000~YAAQtz7cPT/t+gKAAQAAB4woSg/yfQyretR9F9vUJuHA/4uO3X49wQZ+V4yPOWjfixcGxfIino1WD+xatzShdOQGImhvNfX4ljGPIOav60pPygksG9TMkqXWYiEhYvZffTqSvYFfmhjdFXm23K1LUejgMGmSnTNBG7l6pBxgRtTqDqGJTcEPySskbWHXxFiiYxR5VO1dJ5yf8gkfX2N7/g4xUWD/veu7ZP5p6Qtv4Q0kt402Ar+kKdRq0BMHIS7JQMMHXF1cHVtsL85poYUHxehubJeIKFdxGALRhI+Nm38FnqA2yi1mTIVNNBrd6Je6UUXWnz2hDSle/qVRHBh9wfkFO05ixcpeIeKnuj97Ic3jijK8+Yvg3qlyprshTgCQdSGjxihuWxieOuDRWHfMuK/+NgApi+PduWfzIw==; bm_sv=CF794841BDF32A4631ADCD9B50F7367C~1QYq1MEhVgVH/NnN9tuAFD5trXdoumwDW3Byhr2fmo8XykyUf8Fd/Ve9L8DYLH/E910Xv/1U0jGxfAn1KW80+QNnmQcCvmOd+aU67mVFSUb+EVjV42uXetwU/kc4ff6Fal5Onbl4pUSBrU0zIoMEDQ==; bm_sz=4EF43D5C4434F4FC04C626C8C6F8CE08~YAAQtz7cPbjs+gKAAQAAND0oSg+QQEyCCp8LrxHxbB5oKjG7LICev/igPa8nDc2Oq7DAVyDra7nH/Fs1vLlnKCNKC3HuB1D2V95Dn1bZY9Ik9TLA4j8rYLBIQf2aFM3v6nfnjwa5EQS2T97QuzbcNVNdlGNf+ySg6LBwtmy30BVSDVwzqiHKC5Ngb5z/cmuQ3mfwkEos5q1TPoedwka+BFyRhqbaYBoDX96opAFrGwe7IDGI7C+c7V18HLBD5Xe6PsOtg0+WEokT3g22S17uoAhVWP8Etd5wNxaDpB/vSm2iC+8vGmpAYrNEKPkpoa5uFUDPr7+YURAZTaJdpqFpEj5uYdAxmK9CurS0ZXZ7B6P19Jvm+21/Hap5jshCDtyaKFZiJ228ChkE5idM~3228723~4469318; ti_bm=; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=1.164.248.239; ti_rid=9c117db; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })





// MSP430FR2633IRHBR Price
var config = {
    method: 'get',
    url: 'https://www.ti.com/store/ti/en/p/product/?p=MSP430FR2633IRHBR',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.ti.com',
        'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQtz7cPbbs+gKAAQAAMz0oSgeDk5+yZ1/tUrp62xQ7U7XfgkWOTfKIpoW7YO58OAkFXuQ7dRPcS8Y92f/Sq8uHb7lXDb7GkpxjgaKrnxxWnvB90BscAaI4hrI2WUprgOXNZHwjSntj9Wc682tImNM1ypLTXxqWw8YWAgD4b/2h/LDl7JkaaF2qtSBSQTmbZ1JYtblfwUmcI5W9LCSwR21VEYD0ABtBq+FCXmMxuR4dm0ShgKZuRSRBu4tldImRq3JXUCaocnDwlKOzm7qZZGjxtt8u3q8l2PiS0UL/PE79YJRMkqqCSWoKydoB536YTZQx9CRdHFu6h7uvr/ozXHd/ZeET1BJ4DMJ8swH49mpieuP0TAfPQi7J3Ka63mqZstC8dBcZuAtiZP1RJQHeq6VWCpKSYG2fL1Rw7ZwLmDy6CTBueteJT5wUUDRYNYK1+WDu/2NG2FXbpqKnarWP~-1~-1~-1; ak_bmsc=F8D0CB606F85B4CBEB2C0E9EEBE11E7F~000000000000000000000000000000~YAAQtz7cPT/t+gKAAQAAB4woSg/yfQyretR9F9vUJuHA/4uO3X49wQZ+V4yPOWjfixcGxfIino1WD+xatzShdOQGImhvNfX4ljGPIOav60pPygksG9TMkqXWYiEhYvZffTqSvYFfmhjdFXm23K1LUejgMGmSnTNBG7l6pBxgRtTqDqGJTcEPySskbWHXxFiiYxR5VO1dJ5yf8gkfX2N7/g4xUWD/veu7ZP5p6Qtv4Q0kt402Ar+kKdRq0BMHIS7JQMMHXF1cHVtsL85poYUHxehubJeIKFdxGALRhI+Nm38FnqA2yi1mTIVNNBrd6Je6UUXWnz2hDSle/qVRHBh9wfkFO05ixcpeIeKnuj97Ic3jijK8+Yvg3qlyprshTgCQdSGjxihuWxieOuDRWHfMuK/+NgApi+PduWfzIw==; bm_sv=CF794841BDF32A4631ADCD9B50F7367C~1QYq1MEhVgVH/NnN9tuAFD5trXdoumwDW3Byhr2fmo8XykyUf8Fd/Ve9L8DYLH/E910Xv/1U0jGxfAn1KW80+QNnmQcCvmOd+aU67mVFSUb+EVjV42uXetwU/kc4ff6Fal5Onbl4pUSBrU0zIoMEDQ==; bm_sz=4EF43D5C4434F4FC04C626C8C6F8CE08~YAAQtz7cPbjs+gKAAQAAND0oSg+QQEyCCp8LrxHxbB5oKjG7LICev/igPa8nDc2Oq7DAVyDra7nH/Fs1vLlnKCNKC3HuB1D2V95Dn1bZY9Ik9TLA4j8rYLBIQf2aFM3v6nfnjwa5EQS2T97QuzbcNVNdlGNf+ySg6LBwtmy30BVSDVwzqiHKC5Ngb5z/cmuQ3mfwkEos5q1TPoedwka+BFyRhqbaYBoDX96opAFrGwe7IDGI7C+c7V18HLBD5Xe6PsOtg0+WEokT3g22S17uoAhVWP8Etd5wNxaDpB/vSm2iC+8vGmpAYrNEKPkpoa5uFUDPr7+YURAZTaJdpqFpEj5uYdAxmK9CurS0ZXZ7B6P19Jvm+21/Hap5jshCDtyaKFZiJ228ChkE5idM~3228723~4469318; ti_bm=; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=1.164.248.239; ti_rid=9c117db; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
    }
};


axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        // var partnumber = $('#spnManufacturerPartNumber').text().trim()
        // var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
        var price = $('#priceTable').text().trim().replace(/\s+/g, ' ').replace('Qty Price (USD) ', '').split('Q',);
        console.log('MSP430FR2633IRHBR price : ' + price[0])
        console.log('-----------------------------------------------------------------')
    })


// CC2642R1FRGZR
var config = {
    method: 'get',
    url: 'https://www.ti.com/storeservices/cart/opninventory?opn=CC2642R1FRGZR',
    headers: {
        'X-Sec-Clge-Req-Type': 'ajax',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-platform': '"Windows"',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'host': 'www.ti.com',
        'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQtz7cPbbs+gKAAQAAMz0oSgeDk5+yZ1/tUrp62xQ7U7XfgkWOTfKIpoW7YO58OAkFXuQ7dRPcS8Y92f/Sq8uHb7lXDb7GkpxjgaKrnxxWnvB90BscAaI4hrI2WUprgOXNZHwjSntj9Wc682tImNM1ypLTXxqWw8YWAgD4b/2h/LDl7JkaaF2qtSBSQTmbZ1JYtblfwUmcI5W9LCSwR21VEYD0ABtBq+FCXmMxuR4dm0ShgKZuRSRBu4tldImRq3JXUCaocnDwlKOzm7qZZGjxtt8u3q8l2PiS0UL/PE79YJRMkqqCSWoKydoB536YTZQx9CRdHFu6h7uvr/ozXHd/ZeET1BJ4DMJ8swH49mpieuP0TAfPQi7J3Ka63mqZstC8dBcZuAtiZP1RJQHeq6VWCpKSYG2fL1Rw7ZwLmDy6CTBueteJT5wUUDRYNYK1+WDu/2NG2FXbpqKnarWP~-1~-1~-1; ak_bmsc=F8D0CB606F85B4CBEB2C0E9EEBE11E7F~000000000000000000000000000000~YAAQtz7cPT/t+gKAAQAAB4woSg/yfQyretR9F9vUJuHA/4uO3X49wQZ+V4yPOWjfixcGxfIino1WD+xatzShdOQGImhvNfX4ljGPIOav60pPygksG9TMkqXWYiEhYvZffTqSvYFfmhjdFXm23K1LUejgMGmSnTNBG7l6pBxgRtTqDqGJTcEPySskbWHXxFiiYxR5VO1dJ5yf8gkfX2N7/g4xUWD/veu7ZP5p6Qtv4Q0kt402Ar+kKdRq0BMHIS7JQMMHXF1cHVtsL85poYUHxehubJeIKFdxGALRhI+Nm38FnqA2yi1mTIVNNBrd6Je6UUXWnz2hDSle/qVRHBh9wfkFO05ixcpeIeKnuj97Ic3jijK8+Yvg3qlyprshTgCQdSGjxihuWxieOuDRWHfMuK/+NgApi+PduWfzIw==; bm_sv=CF794841BDF32A4631ADCD9B50F7367C~1QYq1MEhVgVH/NnN9tuAFD5trXdoumwDW3Byhr2fmo8XykyUf8Fd/Ve9L8DYLH/E910Xv/1U0jGxfAn1KW80+QNnmQcCvmOd+aU67mVFSUb+EVjV42uXetwU/kc4ff6Fal5Onbl4pUSBrU0zIoMEDQ==; bm_sz=4EF43D5C4434F4FC04C626C8C6F8CE08~YAAQtz7cPbjs+gKAAQAAND0oSg+QQEyCCp8LrxHxbB5oKjG7LICev/igPa8nDc2Oq7DAVyDra7nH/Fs1vLlnKCNKC3HuB1D2V95Dn1bZY9Ik9TLA4j8rYLBIQf2aFM3v6nfnjwa5EQS2T97QuzbcNVNdlGNf+ySg6LBwtmy30BVSDVwzqiHKC5Ngb5z/cmuQ3mfwkEos5q1TPoedwka+BFyRhqbaYBoDX96opAFrGwe7IDGI7C+c7V18HLBD5Xe6PsOtg0+WEokT3g22S17uoAhVWP8Etd5wNxaDpB/vSm2iC+8vGmpAYrNEKPkpoa5uFUDPr7+YURAZTaJdpqFpEj5uYdAxmK9CurS0ZXZ7B6P19Jvm+21/Hap5jshCDtyaKFZiJ228ChkE5idM~3228723~4469318; ti_bm=; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=1.164.248.239; ti_rid=9c117db; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })


// CC2642R1FRGZR Price
var config = {
    method: 'get',
    url: 'https://www.ti.com/store/ti/en/p/product/?p=CC2642R1FRGZR',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.ti.com',
        'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQtz7cPbbs+gKAAQAAMz0oSgeDk5+yZ1/tUrp62xQ7U7XfgkWOTfKIpoW7YO58OAkFXuQ7dRPcS8Y92f/Sq8uHb7lXDb7GkpxjgaKrnxxWnvB90BscAaI4hrI2WUprgOXNZHwjSntj9Wc682tImNM1ypLTXxqWw8YWAgD4b/2h/LDl7JkaaF2qtSBSQTmbZ1JYtblfwUmcI5W9LCSwR21VEYD0ABtBq+FCXmMxuR4dm0ShgKZuRSRBu4tldImRq3JXUCaocnDwlKOzm7qZZGjxtt8u3q8l2PiS0UL/PE79YJRMkqqCSWoKydoB536YTZQx9CRdHFu6h7uvr/ozXHd/ZeET1BJ4DMJ8swH49mpieuP0TAfPQi7J3Ka63mqZstC8dBcZuAtiZP1RJQHeq6VWCpKSYG2fL1Rw7ZwLmDy6CTBueteJT5wUUDRYNYK1+WDu/2NG2FXbpqKnarWP~-1~-1~-1; ak_bmsc=F8D0CB606F85B4CBEB2C0E9EEBE11E7F~000000000000000000000000000000~YAAQtz7cPT/t+gKAAQAAB4woSg/yfQyretR9F9vUJuHA/4uO3X49wQZ+V4yPOWjfixcGxfIino1WD+xatzShdOQGImhvNfX4ljGPIOav60pPygksG9TMkqXWYiEhYvZffTqSvYFfmhjdFXm23K1LUejgMGmSnTNBG7l6pBxgRtTqDqGJTcEPySskbWHXxFiiYxR5VO1dJ5yf8gkfX2N7/g4xUWD/veu7ZP5p6Qtv4Q0kt402Ar+kKdRq0BMHIS7JQMMHXF1cHVtsL85poYUHxehubJeIKFdxGALRhI+Nm38FnqA2yi1mTIVNNBrd6Je6UUXWnz2hDSle/qVRHBh9wfkFO05ixcpeIeKnuj97Ic3jijK8+Yvg3qlyprshTgCQdSGjxihuWxieOuDRWHfMuK/+NgApi+PduWfzIw==; bm_sv=CF794841BDF32A4631ADCD9B50F7367C~1QYq1MEhVgVH/NnN9tuAFD5trXdoumwDW3Byhr2fmo8XykyUf8Fd/Ve9L8DYLH/E910Xv/1U0jGxfAn1KW80+QNnmQcCvmOd+aU67mVFSUb+EVjV42uXetwU/kc4ff6Fal5Onbl4pUSBrU0zIoMEDQ==; bm_sz=4EF43D5C4434F4FC04C626C8C6F8CE08~YAAQtz7cPbjs+gKAAQAAND0oSg+QQEyCCp8LrxHxbB5oKjG7LICev/igPa8nDc2Oq7DAVyDra7nH/Fs1vLlnKCNKC3HuB1D2V95Dn1bZY9Ik9TLA4j8rYLBIQf2aFM3v6nfnjwa5EQS2T97QuzbcNVNdlGNf+ySg6LBwtmy30BVSDVwzqiHKC5Ngb5z/cmuQ3mfwkEos5q1TPoedwka+BFyRhqbaYBoDX96opAFrGwe7IDGI7C+c7V18HLBD5Xe6PsOtg0+WEokT3g22S17uoAhVWP8Etd5wNxaDpB/vSm2iC+8vGmpAYrNEKPkpoa5uFUDPr7+YURAZTaJdpqFpEj5uYdAxmK9CurS0ZXZ7B6P19Jvm+21/Hap5jshCDtyaKFZiJ228ChkE5idM~3228723~4469318; ti_bm=; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=1.164.248.239; ti_rid=9c117db; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
    }
};

axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        // var partnumber = $('#spnManufacturerPartNumber').text().trim()
        // var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
        var price = $('#priceTable').text().trim().replace(/\s+/g, ' ').replace('Qty Price (USD) ', '').split('Q',);
        console.log('CC2642R1FRGZR price : ' + price[0])
        console.log('-----------------------------------------------------------------')
    })



// TPS62050DGSR
var config = {
    method: 'get',
    url: 'https://www.ti.com/storeservices/cart/opninventory?opn=TPS62050DGSR',
    headers: {
        'X-Sec-Clge-Req-Type': 'ajax',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-platform': '"Windows"',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'host': 'www.ti.com',
        'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQtz7cPbbs+gKAAQAAMz0oSgeDk5+yZ1/tUrp62xQ7U7XfgkWOTfKIpoW7YO58OAkFXuQ7dRPcS8Y92f/Sq8uHb7lXDb7GkpxjgaKrnxxWnvB90BscAaI4hrI2WUprgOXNZHwjSntj9Wc682tImNM1ypLTXxqWw8YWAgD4b/2h/LDl7JkaaF2qtSBSQTmbZ1JYtblfwUmcI5W9LCSwR21VEYD0ABtBq+FCXmMxuR4dm0ShgKZuRSRBu4tldImRq3JXUCaocnDwlKOzm7qZZGjxtt8u3q8l2PiS0UL/PE79YJRMkqqCSWoKydoB536YTZQx9CRdHFu6h7uvr/ozXHd/ZeET1BJ4DMJ8swH49mpieuP0TAfPQi7J3Ka63mqZstC8dBcZuAtiZP1RJQHeq6VWCpKSYG2fL1Rw7ZwLmDy6CTBueteJT5wUUDRYNYK1+WDu/2NG2FXbpqKnarWP~-1~-1~-1; ak_bmsc=F8D0CB606F85B4CBEB2C0E9EEBE11E7F~000000000000000000000000000000~YAAQtz7cPT/t+gKAAQAAB4woSg/yfQyretR9F9vUJuHA/4uO3X49wQZ+V4yPOWjfixcGxfIino1WD+xatzShdOQGImhvNfX4ljGPIOav60pPygksG9TMkqXWYiEhYvZffTqSvYFfmhjdFXm23K1LUejgMGmSnTNBG7l6pBxgRtTqDqGJTcEPySskbWHXxFiiYxR5VO1dJ5yf8gkfX2N7/g4xUWD/veu7ZP5p6Qtv4Q0kt402Ar+kKdRq0BMHIS7JQMMHXF1cHVtsL85poYUHxehubJeIKFdxGALRhI+Nm38FnqA2yi1mTIVNNBrd6Je6UUXWnz2hDSle/qVRHBh9wfkFO05ixcpeIeKnuj97Ic3jijK8+Yvg3qlyprshTgCQdSGjxihuWxieOuDRWHfMuK/+NgApi+PduWfzIw==; bm_sv=CF794841BDF32A4631ADCD9B50F7367C~1QYq1MEhVgVH/NnN9tuAFD5trXdoumwDW3Byhr2fmo8XykyUf8Fd/Ve9L8DYLH/E910Xv/1U0jGxfAn1KW80+QNnmQcCvmOd+aU67mVFSUb+EVjV42uXetwU/kc4ff6Fal5Onbl4pUSBrU0zIoMEDQ==; bm_sz=4EF43D5C4434F4FC04C626C8C6F8CE08~YAAQtz7cPbjs+gKAAQAAND0oSg+QQEyCCp8LrxHxbB5oKjG7LICev/igPa8nDc2Oq7DAVyDra7nH/Fs1vLlnKCNKC3HuB1D2V95Dn1bZY9Ik9TLA4j8rYLBIQf2aFM3v6nfnjwa5EQS2T97QuzbcNVNdlGNf+ySg6LBwtmy30BVSDVwzqiHKC5Ngb5z/cmuQ3mfwkEos5q1TPoedwka+BFyRhqbaYBoDX96opAFrGwe7IDGI7C+c7V18HLBD5Xe6PsOtg0+WEokT3g22S17uoAhVWP8Etd5wNxaDpB/vSm2iC+8vGmpAYrNEKPkpoa5uFUDPr7+YURAZTaJdpqFpEj5uYdAxmK9CurS0ZXZ7B6P19Jvm+21/Hap5jshCDtyaKFZiJ228ChkE5idM~3228723~4469318; ti_bm=; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=1.164.248.239; ti_rid=9c117db; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })


// TPS62050DGSR Price
var config = {
    method: 'get',
    url: 'https://www.ti.com/store/ti/en/p/product/?p=TPS62050DGSR',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.ti.com',
        'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQtz7cPbbs+gKAAQAAMz0oSgeDk5+yZ1/tUrp62xQ7U7XfgkWOTfKIpoW7YO58OAkFXuQ7dRPcS8Y92f/Sq8uHb7lXDb7GkpxjgaKrnxxWnvB90BscAaI4hrI2WUprgOXNZHwjSntj9Wc682tImNM1ypLTXxqWw8YWAgD4b/2h/LDl7JkaaF2qtSBSQTmbZ1JYtblfwUmcI5W9LCSwR21VEYD0ABtBq+FCXmMxuR4dm0ShgKZuRSRBu4tldImRq3JXUCaocnDwlKOzm7qZZGjxtt8u3q8l2PiS0UL/PE79YJRMkqqCSWoKydoB536YTZQx9CRdHFu6h7uvr/ozXHd/ZeET1BJ4DMJ8swH49mpieuP0TAfPQi7J3Ka63mqZstC8dBcZuAtiZP1RJQHeq6VWCpKSYG2fL1Rw7ZwLmDy6CTBueteJT5wUUDRYNYK1+WDu/2NG2FXbpqKnarWP~-1~-1~-1; ak_bmsc=F8D0CB606F85B4CBEB2C0E9EEBE11E7F~000000000000000000000000000000~YAAQtz7cPT/t+gKAAQAAB4woSg/yfQyretR9F9vUJuHA/4uO3X49wQZ+V4yPOWjfixcGxfIino1WD+xatzShdOQGImhvNfX4ljGPIOav60pPygksG9TMkqXWYiEhYvZffTqSvYFfmhjdFXm23K1LUejgMGmSnTNBG7l6pBxgRtTqDqGJTcEPySskbWHXxFiiYxR5VO1dJ5yf8gkfX2N7/g4xUWD/veu7ZP5p6Qtv4Q0kt402Ar+kKdRq0BMHIS7JQMMHXF1cHVtsL85poYUHxehubJeIKFdxGALRhI+Nm38FnqA2yi1mTIVNNBrd6Je6UUXWnz2hDSle/qVRHBh9wfkFO05ixcpeIeKnuj97Ic3jijK8+Yvg3qlyprshTgCQdSGjxihuWxieOuDRWHfMuK/+NgApi+PduWfzIw==; bm_sv=CF794841BDF32A4631ADCD9B50F7367C~1QYq1MEhVgVH/NnN9tuAFD5trXdoumwDW3Byhr2fmo8XykyUf8Fd/Ve9L8DYLH/E910Xv/1U0jGxfAn1KW80+QNnmQcCvmOd+aU67mVFSUb+EVjV42uXetwU/kc4ff6Fal5Onbl4pUSBrU0zIoMEDQ==; bm_sz=4EF43D5C4434F4FC04C626C8C6F8CE08~YAAQtz7cPbjs+gKAAQAAND0oSg+QQEyCCp8LrxHxbB5oKjG7LICev/igPa8nDc2Oq7DAVyDra7nH/Fs1vLlnKCNKC3HuB1D2V95Dn1bZY9Ik9TLA4j8rYLBIQf2aFM3v6nfnjwa5EQS2T97QuzbcNVNdlGNf+ySg6LBwtmy30BVSDVwzqiHKC5Ngb5z/cmuQ3mfwkEos5q1TPoedwka+BFyRhqbaYBoDX96opAFrGwe7IDGI7C+c7V18HLBD5Xe6PsOtg0+WEokT3g22S17uoAhVWP8Etd5wNxaDpB/vSm2iC+8vGmpAYrNEKPkpoa5uFUDPr7+YURAZTaJdpqFpEj5uYdAxmK9CurS0ZXZ7B6P19Jvm+21/Hap5jshCDtyaKFZiJ228ChkE5idM~3228723~4469318; ti_bm=; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=1.164.248.239; ti_rid=9c117db; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
    }
};

axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        // var partnumber = $('#spnManufacturerPartNumber').text().trim()
        // var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
        var price = $('#priceTable').text().trim().replace(/\s+/g, ' ').replace('Qty Price (USD) ', '').split('Q',);
        console.log('TPS62050DGSR price : ' + price[0])
        console.log('-----------------------------------------------------------------')
    })




// TPS62160DGKR
var config = {
    method: 'get',
    url: 'https://www.ti.com/storeservices/cart/opninventory?opn=TPS62160DGKR',
    headers: {
        'X-Sec-Clge-Req-Type': 'ajax',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-platform': '"Windows"',
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'host': 'www.ti.com',
        'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQtz7cPbbs+gKAAQAAMz0oSgeDk5+yZ1/tUrp62xQ7U7XfgkWOTfKIpoW7YO58OAkFXuQ7dRPcS8Y92f/Sq8uHb7lXDb7GkpxjgaKrnxxWnvB90BscAaI4hrI2WUprgOXNZHwjSntj9Wc682tImNM1ypLTXxqWw8YWAgD4b/2h/LDl7JkaaF2qtSBSQTmbZ1JYtblfwUmcI5W9LCSwR21VEYD0ABtBq+FCXmMxuR4dm0ShgKZuRSRBu4tldImRq3JXUCaocnDwlKOzm7qZZGjxtt8u3q8l2PiS0UL/PE79YJRMkqqCSWoKydoB536YTZQx9CRdHFu6h7uvr/ozXHd/ZeET1BJ4DMJ8swH49mpieuP0TAfPQi7J3Ka63mqZstC8dBcZuAtiZP1RJQHeq6VWCpKSYG2fL1Rw7ZwLmDy6CTBueteJT5wUUDRYNYK1+WDu/2NG2FXbpqKnarWP~-1~-1~-1; ak_bmsc=F8D0CB606F85B4CBEB2C0E9EEBE11E7F~000000000000000000000000000000~YAAQtz7cPT/t+gKAAQAAB4woSg/yfQyretR9F9vUJuHA/4uO3X49wQZ+V4yPOWjfixcGxfIino1WD+xatzShdOQGImhvNfX4ljGPIOav60pPygksG9TMkqXWYiEhYvZffTqSvYFfmhjdFXm23K1LUejgMGmSnTNBG7l6pBxgRtTqDqGJTcEPySskbWHXxFiiYxR5VO1dJ5yf8gkfX2N7/g4xUWD/veu7ZP5p6Qtv4Q0kt402Ar+kKdRq0BMHIS7JQMMHXF1cHVtsL85poYUHxehubJeIKFdxGALRhI+Nm38FnqA2yi1mTIVNNBrd6Je6UUXWnz2hDSle/qVRHBh9wfkFO05ixcpeIeKnuj97Ic3jijK8+Yvg3qlyprshTgCQdSGjxihuWxieOuDRWHfMuK/+NgApi+PduWfzIw==; bm_sv=CF794841BDF32A4631ADCD9B50F7367C~1QYq1MEhVgVH/NnN9tuAFD5trXdoumwDW3Byhr2fmo8XykyUf8Fd/Ve9L8DYLH/E910Xv/1U0jGxfAn1KW80+QNnmQcCvmOd+aU67mVFSUb+EVjV42uXetwU/kc4ff6Fal5Onbl4pUSBrU0zIoMEDQ==; bm_sz=4EF43D5C4434F4FC04C626C8C6F8CE08~YAAQtz7cPbjs+gKAAQAAND0oSg+QQEyCCp8LrxHxbB5oKjG7LICev/igPa8nDc2Oq7DAVyDra7nH/Fs1vLlnKCNKC3HuB1D2V95Dn1bZY9Ik9TLA4j8rYLBIQf2aFM3v6nfnjwa5EQS2T97QuzbcNVNdlGNf+ySg6LBwtmy30BVSDVwzqiHKC5Ngb5z/cmuQ3mfwkEos5q1TPoedwka+BFyRhqbaYBoDX96opAFrGwe7IDGI7C+c7V18HLBD5Xe6PsOtg0+WEokT3g22S17uoAhVWP8Etd5wNxaDpB/vSm2iC+8vGmpAYrNEKPkpoa5uFUDPr7+YURAZTaJdpqFpEj5uYdAxmK9CurS0ZXZ7B6P19Jvm+21/Hap5jshCDtyaKFZiJ228ChkE5idM~3228723~4469318; ti_bm=; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=1.164.248.239; ti_rid=9c117db; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })


// TPS62160DGKR Price
var config = {
    method: 'get',
    url: 'https://www.ti.com/store/ti/en/p/product/?p=TPS62160DGKR',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.ti.com',
        'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQtz7cPbbs+gKAAQAAMz0oSgeDk5+yZ1/tUrp62xQ7U7XfgkWOTfKIpoW7YO58OAkFXuQ7dRPcS8Y92f/Sq8uHb7lXDb7GkpxjgaKrnxxWnvB90BscAaI4hrI2WUprgOXNZHwjSntj9Wc682tImNM1ypLTXxqWw8YWAgD4b/2h/LDl7JkaaF2qtSBSQTmbZ1JYtblfwUmcI5W9LCSwR21VEYD0ABtBq+FCXmMxuR4dm0ShgKZuRSRBu4tldImRq3JXUCaocnDwlKOzm7qZZGjxtt8u3q8l2PiS0UL/PE79YJRMkqqCSWoKydoB536YTZQx9CRdHFu6h7uvr/ozXHd/ZeET1BJ4DMJ8swH49mpieuP0TAfPQi7J3Ka63mqZstC8dBcZuAtiZP1RJQHeq6VWCpKSYG2fL1Rw7ZwLmDy6CTBueteJT5wUUDRYNYK1+WDu/2NG2FXbpqKnarWP~-1~-1~-1; ak_bmsc=F8D0CB606F85B4CBEB2C0E9EEBE11E7F~000000000000000000000000000000~YAAQtz7cPT/t+gKAAQAAB4woSg/yfQyretR9F9vUJuHA/4uO3X49wQZ+V4yPOWjfixcGxfIino1WD+xatzShdOQGImhvNfX4ljGPIOav60pPygksG9TMkqXWYiEhYvZffTqSvYFfmhjdFXm23K1LUejgMGmSnTNBG7l6pBxgRtTqDqGJTcEPySskbWHXxFiiYxR5VO1dJ5yf8gkfX2N7/g4xUWD/veu7ZP5p6Qtv4Q0kt402Ar+kKdRq0BMHIS7JQMMHXF1cHVtsL85poYUHxehubJeIKFdxGALRhI+Nm38FnqA2yi1mTIVNNBrd6Je6UUXWnz2hDSle/qVRHBh9wfkFO05ixcpeIeKnuj97Ic3jijK8+Yvg3qlyprshTgCQdSGjxihuWxieOuDRWHfMuK/+NgApi+PduWfzIw==; bm_sv=CF794841BDF32A4631ADCD9B50F7367C~1QYq1MEhVgVH/NnN9tuAFD5trXdoumwDW3Byhr2fmo8XykyUf8Fd/Ve9L8DYLH/E910Xv/1U0jGxfAn1KW80+QNnmQcCvmOd+aU67mVFSUb+EVjV42uXetwU/kc4ff6Fal5Onbl4pUSBrU0zIoMEDQ==; bm_sz=4EF43D5C4434F4FC04C626C8C6F8CE08~YAAQtz7cPbjs+gKAAQAAND0oSg+QQEyCCp8LrxHxbB5oKjG7LICev/igPa8nDc2Oq7DAVyDra7nH/Fs1vLlnKCNKC3HuB1D2V95Dn1bZY9Ik9TLA4j8rYLBIQf2aFM3v6nfnjwa5EQS2T97QuzbcNVNdlGNf+ySg6LBwtmy30BVSDVwzqiHKC5Ngb5z/cmuQ3mfwkEos5q1TPoedwka+BFyRhqbaYBoDX96opAFrGwe7IDGI7C+c7V18HLBD5Xe6PsOtg0+WEokT3g22S17uoAhVWP8Etd5wNxaDpB/vSm2iC+8vGmpAYrNEKPkpoa5uFUDPr7+YURAZTaJdpqFpEj5uYdAxmK9CurS0ZXZ7B6P19Jvm+21/Hap5jshCDtyaKFZiJ228ChkE5idM~3228723~4469318; ti_bm=; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=1.164.248.239; ti_rid=9c117db; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
    }
};

axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        // var partnumber = $('#spnManufacturerPartNumber').text().trim()
        // var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
        var price = $('#priceTable').text().trim().replace(/\s+/g, ' ').replace('Qty Price (USD) ', '').split('Q',);
        console.log('TPS62160DGKR price : ' + price[0])
        console.log('-----------------------------------------------------------------')
    })
    .catch(function (error) {
        console.log(error);
    });
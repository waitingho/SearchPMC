var axios = require('axios');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

var config = {
    method: 'get',
    // url: 'https://www.ti.com/store/ti/en/p/product/?p=MSP430FR2633IRHBR&keyMatch=MSP430FR2633IRHBR&tisearch=search-everything&usecase=OPN',
    url: 'https://www.ti.com/store/ti/en/p/product/?p=THS6012CDWP',
    headers: {
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'host': 'www.ti.com',
        'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQHPk90ksI2j6AAQAAz6RYRAeTDkfRgT3OqU+necKq4K4RQE4uv8LoFt9aAf7ULGkUxLotcnb9KjBdtEjs8+AHUTjnPPLOXIHgQGPE/aV+5yFjbvFdX2Kn7Y8KG9ueta083hgesvXHZvpImy68gnq69y8asw4h3P7A9CmUf0U9vDHKKTRplyTM/3G7QxL0tg3dvPUCiJRMUR4KOlQg57t5+O2yghdw68XumxyNKuQK9IHWycTLfzQo/apCv80rP0tDUepH7Y/brl8L5J6+sdBPTEMEasMKPEUsTaCAYdK9zEfr43qsrlIO/guHGt8XCN/0p3UZ0Th0cqogTU5pgi1siJikk4hIT/nvVwxYMUOiJDFnEWOhwNO1y+diGZvuEPdYtL0ag21wxhSPV34AQ/DrzH1jiBe79krYzUycpEtfsfipS2PdCNJIx5STLcRcHDSCElYwpRL195ZyOBMt~-1~-1~-1; ak_bmsc=8ACE4FBD44B5AB50149A1D6FBFAC2D88~000000000000000000000000000000~YAAQNPk90sp01T6AAQAAvQphRA+Fw1E8naXxbMig5DyzEhEGoUTyu+8/Yji9uWOM9c8SkHr4eNFO756s8+oC9cAs4/VsrzGZOR1yIQJ4yNVDeQDaJdn+X6Fqg018a5Li+495fppx5ON0Lm7iC4bwD2HcwYBzubpUEdrApv24FWqFK1WCEJCTzMiZDU2epHy+NvQMypgH7b3hFMV9foP1D543goNAO2f+rJiexh+l6H3GbAYUmG3pFoyYyoHXBXa+p5WD4iNo3RYyndNbpTyHzr8RZSRtyF5sUroTxtwpuPU7Y0pVnL5M97xkrT95THytYucMB9gohocAsStA24XEJ1dEilNEBdvTWPOdnBI6TaRLYacVPVAUgs2DOQaZ0iH+hsf2DpwxuvduAATLKq5kHtjWBtL822v5U81m3D5bP0ajO9N6/Q==; bm_mi=203F4513F63976EE4AF6F7906744416F~RUC9qSYsKFnvUiI/GL6wWjS4DTrxICREmTzZeODIeWp61KBnnPzs23rFOIk+qgK9782MFgVTDFVOdQeKtlrkCZDw4grvc88ntxEWLUvxH+zieBlb4K/IGOHA0XiPPsZmsjEhteoYcrFoq66Xx/z5Ae0Izn4ghazif8UvVPPMBbsOjJLquY32SEWEW9RKcI80aiAguiDoygkRATWm+qdx6NTLMDQUv7dAWBEtE0vdWqU8i6/Qk3T3ha/icMQ9YM9ZxOlykjoLUydqyilwciQwxw==; bm_sv=CDF5E378A7A8F3F5EF76467014AF8B4C~OGAoZFXZInX2Bd8ExMXnLaCBBM9Oa8AZvPu2QL8G+YfSgObKFtLXHGJ84SpowxTnebasRD2lCkBn1WI41LK5+Yk3DnNQ9haeFhT72oZVXS6U3ogD3cM37mk3dWoWe5yXYJpExsfKPZ5s3/8yQ/T9uA==; bm_sz=1214F8B9EDF8F3FA72CD2C9EB64F5B1F~YAAQHPk90lb92T6AAQAAkGpTRA8/USqoYQLECNUUt/AcUBtTEluVdaWTFYSA4ARk9iL9HifqfQoGqmdqT1Jx+1HGeuvde+Uotj1n2tPN3YIxuRs31mjnVC0hrLMwZQo0LzyuDo+LhLBwYuzaHnOpFBS4ppKkYpJlNnECMPdvfCYxovkPbSdvu76pUUsIp3fezZ46qHO/ela2eq7o9UiJw5xvTZhLwPuN02tlsvdAbEYbT32rl2tAJ2BHECduJzv/zulEEGHYWG+y/azrNRDuSClOhtb6vCsHEEYU1Ty4wzVGmWfXQGsJxDen7D7K+x2DKNdUnkFN4h5nL4Cs9wZlETvpQzCx97Z7TsGrYQs77Zz/q0NnDvjykM1tb3wYh+f5006DoN07VhKiNh5g8w==~4604468~3355192; ti_bm=Unknown%20Bot%20(B0B1CB20BEBCAE0F191F2D67CC6B7C5E)%3aslow%3a%3aRequest%20Anomaly%3a%3a; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=111.83.31.79; ti_rid=4eb0f52; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
    }
};

axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        var partnumber = $('body > main > div:nth-child(10) > div.body-wrap > div.product-details.product-details-b2c.row > div.col-pdp-main > section > div.header-top.u-margin-bottom-l > div.product-header-info > h1 > span').text().trim()
        var Inventory = $('#stock_THS6012CDWP').text().trim().replace(/\s+/g, ' ')
        // .replace(/\s+/g, ' ').replace(/Limit: 999,999,999/g, '').replace('Inventory: Inventory: In stock Inventory:', '').replace('Inventory: ', '')
        var price = $('#priceTable').text().trim().replace(/\s+/g, ' ').replace('Qty Price (USD) ', '').split('Q',)
        // console.log('partnumber : ' + partnumber)
        // console.log('Inventory :' + Inventory)
        console.log('Inventory: ' + Inventory)
        console.log('price : ' + price[0])
        console.log('-----------------------------------------------------------------------------------------------')
    })
    .catch(function (error) {
        console.log(error);
    });

console.log('-----------------------------------------------------------------------------------------------')

// var config = {
//     method: 'get',
//     url: 'https://www.ti.com/store/ti/en/p/product/?p=CC2642R1FRGZR&keyMatch=CC2642R1FRGZR&tisearch=search-everything&usecase=OPN',
//     headers: {
//         'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
//         'sec-ch-ua-mobile': '?0',
//         'sec-ch-ua-platform': '"Windows"',
//         'Upgrade-Insecure-Requests': '1',
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
//         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//         'host': 'www.ti.com',
//         'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQHPk90ksI2j6AAQAAz6RYRAeTDkfRgT3OqU+necKq4K4RQE4uv8LoFt9aAf7ULGkUxLotcnb9KjBdtEjs8+AHUTjnPPLOXIHgQGPE/aV+5yFjbvFdX2Kn7Y8KG9ueta083hgesvXHZvpImy68gnq69y8asw4h3P7A9CmUf0U9vDHKKTRplyTM/3G7QxL0tg3dvPUCiJRMUR4KOlQg57t5+O2yghdw68XumxyNKuQK9IHWycTLfzQo/apCv80rP0tDUepH7Y/brl8L5J6+sdBPTEMEasMKPEUsTaCAYdK9zEfr43qsrlIO/guHGt8XCN/0p3UZ0Th0cqogTU5pgi1siJikk4hIT/nvVwxYMUOiJDFnEWOhwNO1y+diGZvuEPdYtL0ag21wxhSPV34AQ/DrzH1jiBe79krYzUycpEtfsfipS2PdCNJIx5STLcRcHDSCElYwpRL195ZyOBMt~-1~-1~-1; ak_bmsc=8ACE4FBD44B5AB50149A1D6FBFAC2D88~000000000000000000000000000000~YAAQNPk90sp01T6AAQAAvQphRA+Fw1E8naXxbMig5DyzEhEGoUTyu+8/Yji9uWOM9c8SkHr4eNFO756s8+oC9cAs4/VsrzGZOR1yIQJ4yNVDeQDaJdn+X6Fqg018a5Li+495fppx5ON0Lm7iC4bwD2HcwYBzubpUEdrApv24FWqFK1WCEJCTzMiZDU2epHy+NvQMypgH7b3hFMV9foP1D543goNAO2f+rJiexh+l6H3GbAYUmG3pFoyYyoHXBXa+p5WD4iNo3RYyndNbpTyHzr8RZSRtyF5sUroTxtwpuPU7Y0pVnL5M97xkrT95THytYucMB9gohocAsStA24XEJ1dEilNEBdvTWPOdnBI6TaRLYacVPVAUgs2DOQaZ0iH+hsf2DpwxuvduAATLKq5kHtjWBtL822v5U81m3D5bP0ajO9N6/Q==; bm_mi=203F4513F63976EE4AF6F7906744416F~RUC9qSYsKFnvUiI/GL6wWjS4DTrxICREmTzZeODIeWp61KBnnPzs23rFOIk+qgK9782MFgVTDFVOdQeKtlrkCZDw4grvc88ntxEWLUvxH+zieBlb4K/IGOHA0XiPPsZmsjEhteoYcrFoq66Xx/z5Ae0Izn4ghazif8UvVPPMBbsOjJLquY32SEWEW9RKcI80aiAguiDoygkRATWm+qdx6NTLMDQUv7dAWBEtE0vdWqU8i6/Qk3T3ha/icMQ9YM9ZxOlykjoLUydqyilwciQwxw==; bm_sv=CDF5E378A7A8F3F5EF76467014AF8B4C~OGAoZFXZInX2Bd8ExMXnLaCBBM9Oa8AZvPu2QL8G+YfSgObKFtLXHGJ84SpowxTnebasRD2lCkBn1WI41LK5+Yk3DnNQ9haeFhT72oZVXS6U3ogD3cM37mk3dWoWe5yXYJpExsfKPZ5s3/8yQ/T9uA==; bm_sz=1214F8B9EDF8F3FA72CD2C9EB64F5B1F~YAAQHPk90lb92T6AAQAAkGpTRA8/USqoYQLECNUUt/AcUBtTEluVdaWTFYSA4ARk9iL9HifqfQoGqmdqT1Jx+1HGeuvde+Uotj1n2tPN3YIxuRs31mjnVC0hrLMwZQo0LzyuDo+LhLBwYuzaHnOpFBS4ppKkYpJlNnECMPdvfCYxovkPbSdvu76pUUsIp3fezZ46qHO/ela2eq7o9UiJw5xvTZhLwPuN02tlsvdAbEYbT32rl2tAJ2BHECduJzv/zulEEGHYWG+y/azrNRDuSClOhtb6vCsHEEYU1Ty4wzVGmWfXQGsJxDen7D7K+x2DKNdUnkFN4h5nL4Cs9wZlETvpQzCx97Z7TsGrYQs77Zz/q0NnDvjykM1tb3wYh+f5006DoN07VhKiNh5g8w==~4604468~3355192; ti_bm=Unknown%20Bot%20(B0B1CB20BEBCAE0F191F2D67CC6B7C5E)%3aslow%3a%3aRequest%20Anomaly%3a%3a; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=111.83.31.79; ti_rid=4eb0f52; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
//     }
// };

// axios(config)
//     .then(function (response) {
//         const $ = cheerio.load(response.data);
//         var partnumber = $('body > main > div:nth-child(10) > div.body-wrap > div.product-details.product-details-b2c.row > div.col-pdp-main > section > div.header-top.u-margin-bottom-l > div.product-header-info > h1 > span').text().trim()
//         var Inventory = $('#inventoryDiv > span').text().trim().replace(/\s+/g, ' ').replace(/Limit: 999,999,999/g, '').replace('Inventory: Inventory: In stock Inventory:', '')
//         var price = $('#priceTable').text().trim().replace(/\s+/g, ' ').replace('Qty Price (USD) ', '').split('Q',)
//         console.log('partnumber : ' + partnumber)
//         console.log('Inventory :' + Inventory)
//         console.log('price : ' + price[0])
//         console.log('-----------------------------------------------------------------------------------------------')
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// var config = {
//     method: 'get',
//     url: 'https://www.ti.com/store/ti/en/p/product/?p=TPS62050DGSR&keyMatch=TPS62050DGSR&tisearch=search-everything&usecase=OPN',
//     headers: {
//         'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
//         'sec-ch-ua-mobile': '?0',
//         'sec-ch-ua-platform': '"Windows"',
//         'Upgrade-Insecure-Requests': '1',
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
//         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//         'host': 'www.ti.com',
//         'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQHPk90ksI2j6AAQAAz6RYRAeTDkfRgT3OqU+necKq4K4RQE4uv8LoFt9aAf7ULGkUxLotcnb9KjBdtEjs8+AHUTjnPPLOXIHgQGPE/aV+5yFjbvFdX2Kn7Y8KG9ueta083hgesvXHZvpImy68gnq69y8asw4h3P7A9CmUf0U9vDHKKTRplyTM/3G7QxL0tg3dvPUCiJRMUR4KOlQg57t5+O2yghdw68XumxyNKuQK9IHWycTLfzQo/apCv80rP0tDUepH7Y/brl8L5J6+sdBPTEMEasMKPEUsTaCAYdK9zEfr43qsrlIO/guHGt8XCN/0p3UZ0Th0cqogTU5pgi1siJikk4hIT/nvVwxYMUOiJDFnEWOhwNO1y+diGZvuEPdYtL0ag21wxhSPV34AQ/DrzH1jiBe79krYzUycpEtfsfipS2PdCNJIx5STLcRcHDSCElYwpRL195ZyOBMt~-1~-1~-1; ak_bmsc=8ACE4FBD44B5AB50149A1D6FBFAC2D88~000000000000000000000000000000~YAAQNPk90sp01T6AAQAAvQphRA+Fw1E8naXxbMig5DyzEhEGoUTyu+8/Yji9uWOM9c8SkHr4eNFO756s8+oC9cAs4/VsrzGZOR1yIQJ4yNVDeQDaJdn+X6Fqg018a5Li+495fppx5ON0Lm7iC4bwD2HcwYBzubpUEdrApv24FWqFK1WCEJCTzMiZDU2epHy+NvQMypgH7b3hFMV9foP1D543goNAO2f+rJiexh+l6H3GbAYUmG3pFoyYyoHXBXa+p5WD4iNo3RYyndNbpTyHzr8RZSRtyF5sUroTxtwpuPU7Y0pVnL5M97xkrT95THytYucMB9gohocAsStA24XEJ1dEilNEBdvTWPOdnBI6TaRLYacVPVAUgs2DOQaZ0iH+hsf2DpwxuvduAATLKq5kHtjWBtL822v5U81m3D5bP0ajO9N6/Q==; bm_mi=203F4513F63976EE4AF6F7906744416F~RUC9qSYsKFnvUiI/GL6wWjS4DTrxICREmTzZeODIeWp61KBnnPzs23rFOIk+qgK9782MFgVTDFVOdQeKtlrkCZDw4grvc88ntxEWLUvxH+zieBlb4K/IGOHA0XiPPsZmsjEhteoYcrFoq66Xx/z5Ae0Izn4ghazif8UvVPPMBbsOjJLquY32SEWEW9RKcI80aiAguiDoygkRATWm+qdx6NTLMDQUv7dAWBEtE0vdWqU8i6/Qk3T3ha/icMQ9YM9ZxOlykjoLUydqyilwciQwxw==; bm_sv=CDF5E378A7A8F3F5EF76467014AF8B4C~OGAoZFXZInX2Bd8ExMXnLaCBBM9Oa8AZvPu2QL8G+YfSgObKFtLXHGJ84SpowxTnebasRD2lCkBn1WI41LK5+Yk3DnNQ9haeFhT72oZVXS6U3ogD3cM37mk3dWoWe5yXYJpExsfKPZ5s3/8yQ/T9uA==; bm_sz=1214F8B9EDF8F3FA72CD2C9EB64F5B1F~YAAQHPk90lb92T6AAQAAkGpTRA8/USqoYQLECNUUt/AcUBtTEluVdaWTFYSA4ARk9iL9HifqfQoGqmdqT1Jx+1HGeuvde+Uotj1n2tPN3YIxuRs31mjnVC0hrLMwZQo0LzyuDo+LhLBwYuzaHnOpFBS4ppKkYpJlNnECMPdvfCYxovkPbSdvu76pUUsIp3fezZ46qHO/ela2eq7o9UiJw5xvTZhLwPuN02tlsvdAbEYbT32rl2tAJ2BHECduJzv/zulEEGHYWG+y/azrNRDuSClOhtb6vCsHEEYU1Ty4wzVGmWfXQGsJxDen7D7K+x2DKNdUnkFN4h5nL4Cs9wZlETvpQzCx97Z7TsGrYQs77Zz/q0NnDvjykM1tb3wYh+f5006DoN07VhKiNh5g8w==~4604468~3355192; ti_bm=Unknown%20Bot%20(B0B1CB20BEBCAE0F191F2D67CC6B7C5E)%3aslow%3a%3aRequest%20Anomaly%3a%3a; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=111.83.31.79; ti_rid=4eb0f52; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
//     }
// };

// axios(config)
//     .then(function (response) {
//         const $ = cheerio.load(response.data);
//         var partnumber = $('body > main > div:nth-child(10) > div.body-wrap > div.product-details.product-details-b2c.row > div.col-pdp-main > section > div.header-top.u-margin-bottom-l > div.product-header-info > h1 > span').text().trim()
//         var Inventory = $('#inventoryDiv > span').text().trim().replace(/\s+/g, ' ').replace(/Limit: 999,999,999/g, '').replace('Inventory: Inventory: In stock Inventory:', '')
//         var price = $('#priceTable').text().trim().replace(/\s+/g, ' ').replace('Qty Price (USD) ', '').split('Q',)
//         console.log('partnumber : ' + partnumber)
//         console.log('Inventory :' + Inventory)
//         console.log('price : ' + price[0])
//         console.log('-----------------------------------------------------------------------------------------------')
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// var config = {
//     method: 'get',
//     url: 'https://www.ti.com/store/ti/en/p/product/?p=TPS62160DGKR&keyMatch=TPS62160DGKR&tisearch=search-everything&usecase=OPN',
//     headers: {
//         'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
//         'sec-ch-ua-mobile': '?0',
//         'sec-ch-ua-platform': '"Windows"',
//         'Upgrade-Insecure-Requests': '1',
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
//         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//         'host': 'www.ti.com',
//         'Cookie': '_abck=14BCB50DBBAF63AC1BEC9BA7994EFB0E~-1~YAAQHPk90ksI2j6AAQAAz6RYRAeTDkfRgT3OqU+necKq4K4RQE4uv8LoFt9aAf7ULGkUxLotcnb9KjBdtEjs8+AHUTjnPPLOXIHgQGPE/aV+5yFjbvFdX2Kn7Y8KG9ueta083hgesvXHZvpImy68gnq69y8asw4h3P7A9CmUf0U9vDHKKTRplyTM/3G7QxL0tg3dvPUCiJRMUR4KOlQg57t5+O2yghdw68XumxyNKuQK9IHWycTLfzQo/apCv80rP0tDUepH7Y/brl8L5J6+sdBPTEMEasMKPEUsTaCAYdK9zEfr43qsrlIO/guHGt8XCN/0p3UZ0Th0cqogTU5pgi1siJikk4hIT/nvVwxYMUOiJDFnEWOhwNO1y+diGZvuEPdYtL0ag21wxhSPV34AQ/DrzH1jiBe79krYzUycpEtfsfipS2PdCNJIx5STLcRcHDSCElYwpRL195ZyOBMt~-1~-1~-1; ak_bmsc=8ACE4FBD44B5AB50149A1D6FBFAC2D88~000000000000000000000000000000~YAAQNPk90sp01T6AAQAAvQphRA+Fw1E8naXxbMig5DyzEhEGoUTyu+8/Yji9uWOM9c8SkHr4eNFO756s8+oC9cAs4/VsrzGZOR1yIQJ4yNVDeQDaJdn+X6Fqg018a5Li+495fppx5ON0Lm7iC4bwD2HcwYBzubpUEdrApv24FWqFK1WCEJCTzMiZDU2epHy+NvQMypgH7b3hFMV9foP1D543goNAO2f+rJiexh+l6H3GbAYUmG3pFoyYyoHXBXa+p5WD4iNo3RYyndNbpTyHzr8RZSRtyF5sUroTxtwpuPU7Y0pVnL5M97xkrT95THytYucMB9gohocAsStA24XEJ1dEilNEBdvTWPOdnBI6TaRLYacVPVAUgs2DOQaZ0iH+hsf2DpwxuvduAATLKq5kHtjWBtL822v5U81m3D5bP0ajO9N6/Q==; bm_mi=203F4513F63976EE4AF6F7906744416F~RUC9qSYsKFnvUiI/GL6wWjS4DTrxICREmTzZeODIeWp61KBnnPzs23rFOIk+qgK9782MFgVTDFVOdQeKtlrkCZDw4grvc88ntxEWLUvxH+zieBlb4K/IGOHA0XiPPsZmsjEhteoYcrFoq66Xx/z5Ae0Izn4ghazif8UvVPPMBbsOjJLquY32SEWEW9RKcI80aiAguiDoygkRATWm+qdx6NTLMDQUv7dAWBEtE0vdWqU8i6/Qk3T3ha/icMQ9YM9ZxOlykjoLUydqyilwciQwxw==; bm_sv=CDF5E378A7A8F3F5EF76467014AF8B4C~OGAoZFXZInX2Bd8ExMXnLaCBBM9Oa8AZvPu2QL8G+YfSgObKFtLXHGJ84SpowxTnebasRD2lCkBn1WI41LK5+Yk3DnNQ9haeFhT72oZVXS6U3ogD3cM37mk3dWoWe5yXYJpExsfKPZ5s3/8yQ/T9uA==; bm_sz=1214F8B9EDF8F3FA72CD2C9EB64F5B1F~YAAQHPk90lb92T6AAQAAkGpTRA8/USqoYQLECNUUt/AcUBtTEluVdaWTFYSA4ARk9iL9HifqfQoGqmdqT1Jx+1HGeuvde+Uotj1n2tPN3YIxuRs31mjnVC0hrLMwZQo0LzyuDo+LhLBwYuzaHnOpFBS4ppKkYpJlNnECMPdvfCYxovkPbSdvu76pUUsIp3fezZ46qHO/ela2eq7o9UiJw5xvTZhLwPuN02tlsvdAbEYbT32rl2tAJ2BHECduJzv/zulEEGHYWG+y/azrNRDuSClOhtb6vCsHEEYU1Ty4wzVGmWfXQGsJxDen7D7K+x2DKNdUnkFN4h5nL4Cs9wZlETvpQzCx97Z7TsGrYQs77Zz/q0NnDvjykM1tb3wYh+f5006DoN07VhKiNh5g8w==~4604468~3355192; ti_bm=Unknown%20Bot%20(B0B1CB20BEBCAE0F191F2D67CC6B7C5E)%3aslow%3a%3aRequest%20Anomaly%3a%3a; ti_geo=country=TW|city=TAIPEI|continent=AS|tc_ip=111.83.31.79; ti_rid=4eb0f52; ti_ua=Mozilla%2f5.0%20(Windows%20NT%2010.0%3b%20Win64%3b%20x64)%20AppleWebKit%2f537.36%20(KHTML,%20like%20Gecko)%20Chrome%2f100.0.4896.127%20Safari%2f537.36'
//     }
// };

// axios(config)
//     .then(function (response) {
//         const $ = cheerio.load(response.data);
//         var partnumber = $('body > main > div:nth-child(10) > div.body-wrap > div.product-details.product-details-b2c.row > div.col-pdp-main > section > div.header-top.u-margin-bottom-l > div.product-header-info > h1 > span').text().trim()
//         var Inventory = $('#inventoryDiv > span').text().trim().replace(/\s+/g, ' ').replace(/Limit: 999,999,999/g, '').replace('Inventory: Inventory: In stock Inventory:', '')
//         var price = $('#priceTable').text().trim().replace(/\s+/g, ' ').replace('Qty Price (USD) ', '').split('Q',)
//         console.log('partnumber : ' + partnumber)
//         console.log('Inventory :' + Inventory)
//         console.log('price : ' + price[0])
//         console.log('-----------------------------------------------------------------------------------------------')
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
var axios = require('axios');

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://www.digikey.com/en/products/detail/MSP430FR2633IRHBR/5819971',
  headers: { 
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"', 
    'Upgrade-Insecure-Requests': '1', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36', 
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 
    'host': 'www.digikey.com', 
    'Cookie': 'TS0138bc45=01460246b67413c47e411c7006b76a8863812ab400753fb1e90dccbe4eb5d47061363e321adab51935ac3e1fdf4680b4dff5134ac6; TS01737bf0=01460246b691fd756c56516884c6487cdba64df35e9a0d66b027e5126da4d7b2c83ddf96379ba2429a1cd3f9af38f580d4f5db0616; TS0178f15d=01460246b675f5d78fb9b93964e7ca1713ee0c4c4b9795bd3589367524f7a519c7d34a5f1343410f985c8a4b53bf822e6c9a61f18f; _abck=4B8A18867E695BBC522AE9DD4F89DB62~-1~YAAQFPk90s98jFCAAQAAj4rJage92IY/mXE6IHDgPZk5B/RVJ/lPn+q3/GN7v8iJhFkw1ScE2pwNywvXunQs7Yvd+X0/cszucSKJG+VIT35rvZNSpyEzH3riQefSV6fH3P/XJonu7HMtXHteIR4l3s1gAjEo/VMh3g3N3MqH/fW27OoHDmfyZW0xRYmDMkQz+ZoIAHD1TQoMV8fMusZ/ooj2O3gNhCBzTcC5XzRp21usHGE+EAggpYf3GzLoZbfQaUNsbXFbok9xjKzc753M1L5tamLEvKN/x/d1i4gzSUT7bgsMeOobmsn+lk+4DF4qrHyTQDNH3RRO79/8xpqTRVf1Qyxz6kLUf02In3vBiwn1ASiFvJmSaM1G00FeedAFpU6+03NymzMWFBA=~-1~-1~-1; ak_bmsc=83BAFA6AE582791345EAF2159972E7A6~000000000000000000000000000000~YAAQFPk90tB8jFCAAQAAj4rJag+RvLlo+YyRVSB3KImw6DnVP9O1rCRvIm8q9GZRwbgO4jdMhUD2d7EPbXN27KTeTInAapn2WV+IDSRfK5hTncwkiWJOQh0U1YGZgu2f9tOzsjRx86cSr0LRc/W7FnCS+owzFjPskEFtlMew/JLnpYMseCS9L88/J3VEquNwWzl0jJ0QynvkGoIDu0/3zhUJkfxwD5Vpjha7OVIgYZhOIeUFgvHs0hHvUX7K6vJ8a0rspN33r5rz1l5TmS73bMWLGZHVSQOYyeFlsjhMI/aVUjtdAxWg1COG6vNITtQIuLF8tRtrq4W6IGyfKYTai4f/pRHZTWk2exDHg8zwFTWT57QCNM1NwBaCPyw=; bm_sz=87991F198341BD8D506987859F641345~YAAQFPk90tF8jFCAAQAAj4rJag9q4iclW2I9KE10RJ29c6uJbs0HOIHc3SMHiPz36EMylBwSFxC3AZZUD/pW+Gyn1GcFN31Y8/pGaxpvH6dRvmSdIdG4bxrURJTDHM6heAGIpWNzsuANoHs7jNfX2OjRrrSQyk5zIYiGamAvFsZxU5TExqRZekxh8GmAQZ5KA+0WSnjua5cdlJrWQyL18rkVfm28eqfg6qmHgbrX76ktDFIOyZ4ZYh2X0ArIvLWAVmkk2ClwfI4ItygiHYvbndkTQFS/usVW2k+ph5Ja2ExNiL//~4272948~3228726; dkuhint=false; ps-eudo-sid=%7b%22CustomerId%22%3a0%2c%22LoginId%22%3a0%2c%22CustomerClass%22%3a0%2c%22Currency%22%3a%22USD%22%2c%22OrderModel%22%3a0%2c%22UserIdentity%22%3a0%7d; TS01173021=01f9ef228dafff46ab238cb98a92e89ea134facaa78ee89181a617a69870a7c98e5747a4d3f1a646e8f856b55343cccd46610a89b8; TS012fc96f=01460246b66c88f24a3ec882531ad6dee819780a57aa56b59d4caaa3152a78d10292b2616db5aa109ddcecc14833d3ee5985d1cdac; TS018060f7=01460246b6e94a2f41b22dd2d4928f3fe939771399e2903dcc97eb46ea0f0bd304b50d2daae54cb60d19cccaff9f02c9e8d66c1e2d; TS019f5e6c=01460246b607bbf7ee11e9770af07a4602df69f1c4d4b0ed7571d8a889ea1e7395f5c758f8d03ccc69653c34bd42c6a9ba95041595; TS01c02def=01460246b675f5d78fb9b93964e7ca1713ee0c4c4b9795bd3589367524f7a519c7d34a5f1343410f985c8a4b53bf822e6c9a61f18f; TS01cba742=01460246b691fd756c56516884c6487cdba64df35e9a0d66b027e5126da4d7b2c83ddf96379ba2429a1cd3f9af38f580d4f5db0616; TS301b3218027=08374f23c1ab2000df356f0c39cec290b05ba97182eae2bd56903acee6b37485f62f56f811fcf515089cdfa9c1113000ed6aa302b0377e59ff3d0e67cfaf1f8f6af17dc646a3ff2cc080b79fedae6b140963c2c99c84cfb46bc496716a31e00b; TS605a4192027=08374f23c1ab2000879602a0ee0ad853109e2955aee936cf36066566865a23ed2e1990884a736d9908d83fb17811300080c3eac031732a17f3578c475b90d09eb8dfd8812ae491fc972248a7f90386f4e017fbb27bf9f5bb1624cf29142cb8ec; TS809e22c5027=08374f23c1ab200040113f9f345e15536edad599475845e6576273f8db4a90dab71ba4765709e6e108b72caa5e1130005189139067d1d1bef3578c475b90d09efdaaba35b221f2ca3d06f9b1e78bcd59f8f0647e6c76d317c9b6cd8ce49cba54; TSbafe380b027=08374f23c1ab2000ca8b4dbbc9baf4c55f39a777c087d1773091ecd7c26c0faef9e50708d3c842c508adf03002113000ff6dacc631a3ec678b57cc1497f668c1eab4090c94bc70e88c1e13281a6b26caaaab884a7baa4dbd425291b47a1a1933; TSc580adf4027=08374f23c1ab200045fa5c20b7ccf00b475589f1a38178436154a15dbc4ea5686ebaced976b7e99b088291e3d71130006e6ec5a9ff303505ff3d0e67cfaf1f8f10b2361342adcfe631a4868905b5907708d9d0c8fd68b2ce585baacc19f662d2; TScaafd3c3027=08205709cbab20002d1df8a3ff513af9ee8871a83f8ba39dfc43e062000e2ecaa371f75755e1fe0c08dc7d7564113000af3515b34e91ddd7b357354459a3b5c0c01bce770dd949da77cd99cec542243ad9dbc58e79a3d851dcfa03e5024257df; ai_session=5T7Y+miRK13afyWRKoYqj6|1651059033110|1651059033110; ai_user=BZ12ashsMM3X557Rp1Nf6Q|2022-04-22T03:45:36.437Z; search=%7B%22usage%22%3A%7B%22dailyCount%22%3A3%2C%22lastRequest%22%3A%222022-04-27T11%3A30%3A33.106Z%22%7D%2C%22version%22%3A1%7D'
  }
};

axios(config)
    .then(function (response) {
        const $ = cheerio.load(response.data);
        var partnumber = $('#__next > main > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-align-content-xs-flex-start.MuiGrid-grid-xs-12.MuiGrid-grid-md-8 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-true > div > table > thead > tr > th > h1').text().trim()
        // var Inventory = $('#pdpPricingAvailability > div.panel-body > div.row.pdp-product-availability > dl > dd:nth-child(2) > div.col-xs-3.onOrderQuantity').text().trim().replace(/\s+/g, ' ')
        // var price = $('#priceTable').text().trim().replace(/\s+/g, ' ').replace('Qty Price (USD) ', '').split('Q',);
        console.log(partnumber)
        console.log('-----------------------------------------------------------------')
    })
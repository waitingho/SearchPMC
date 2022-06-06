const axios = require('axios')
const https = require('https')
const domain = 'https://www.arrow.com/zh-cn'
let instance

// module.exports = function (context)
const arrow2 = () => {
{
    if (!instance)
    {
        //create axios instance
        instance = axios.create({
            baseURL: domain,
            timeout: 60000, //optional
            httpsAgent: new https.Agent({ keepAlive: true }),
            headers: {'Content-Type':'application/xml'}
        })
    }

    return instance;
}
module.exports = arrow2;

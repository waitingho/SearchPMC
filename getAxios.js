const axios = require('axios')
const https = require('https')
const domain = 'http://ec2-35-87-214-114.us-west-2.compute.amazonaws.com:3001/'
let instance

module.exports = async function (context)
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

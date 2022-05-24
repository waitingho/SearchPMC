const startTask = require('C:\\Users\\Tester\\test-project\\searchlcsc3.js');
// const searchme4 = require('C:\\Users\\Tester\\test-project\\searchme4.js');
// const searchti4 = require('C:\\Users\\Tester\\test-project\\searchti4.js');
var CronJob = require('cron').CronJob;
new CronJob('*/10 * * * * *', function () {
  // const searchlcsc3 = require('C:\\Users\\Tester\\test-project\\searchti4.js');
  //console.log(searchlcsc3);
  startTask();
  // searchme4();
  // searchti4();
  console.log(new Date())
}, null, true);


const searchme4 = require('C:\\Users\\Tester\\test-project\\searchme4.js');
var CronJob = require('cron').CronJob;
new CronJob('*/10 * * * * *', function () {
  searchme4();
  console.log(new Date())
}, null, true);
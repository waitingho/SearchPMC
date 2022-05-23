const request = require('request');
request('http://localhost:3001', function (error, response, body) {
  console.log('原始格式，JSON 格式的字串 — — — — — ');
  console.log(body);
  console.log('轉成 JS 物件 — — — — — — — — — — ');
  console.log(JSON.parse(body));
});

// var request = require("request");
var slackurl = 'https://hooks.slack.com/services/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';
var channel = '#fukc';
var username = 'bot';
var text = 'https://reqres.in/api/users';
var emoji = ':bug:';

var options = {
  url: slackurl,
  form: 'payload=' + JSON.stringify({
    "channel": channel,
    "username": username,
    "text": text,
    "icon_emoji": emoji
  })
};
request.post(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('ok');
  } else {
    console.log('error: ' + response.statusCode + body);
  }
});
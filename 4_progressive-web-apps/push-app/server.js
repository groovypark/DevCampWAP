var request = require('request');

var serverKey =
  "key=" + "AAAAcbhUjuA:APA91bFZA2uAFWzzGY_uTIaP4kdmS6ZviFTLQx5Xp_-OA4mpQo8fDygDk_fts5sbmUX7nwg8ufIVBL4C0cF5a1ZRBjMpkQyXwWuOaSijTjetsg-CkxEJbXJ4NnDL7RCoLCSbv2JDKotzYoHsYtkXv-wZ-WK9JUdTpA";
var deviceKey =
  "cwTKbbw4mz8:APA91bHFA5oL0-s3FNNYp_CNJcHgU1ur5IF6OdjWpgZbXjg4pKxUKrHa3EfujpjbYbZowI9SBMGFTjw7Q3bqVp6D8BaJ-WKR4eh_7yyAbqka5ubtWa5H3_aO-WYybLQNVSJxttVQ410bjWeqs3GHVKe_9AWsVgUTQA";
sendMessageToUser(serverKey, deviceKey);

function sendMessageToUser(serverKey, deviceKey, message) {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': serverKey,
    },
    body: JSON.stringify(
      {
        "registration_ids": [
          deviceKey
        ]
      }
    )
  }, function(error, response, body) {
    console.log("Result Log - ", body);
    if (error) {
      console.error(error, response, body);
    } else if (response.statusCode >= 400) {
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body);
    } else {
      console.log('Done!');
    }
  });
};

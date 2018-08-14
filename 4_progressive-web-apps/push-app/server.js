var request = require('request');

var serverKey =
  "key=" + "AAAAcbhUjuA:APA91bFZA2uAFWzzGY_uTIaP4kdmS6ZviFTLQx5Xp_-OA4mpQo8fDygDk_fts5sbmUX7nwg8ufIVBL4C0cF5a1ZRBjMpkQyXwWuOaSijTjetsg-CkxEJbXJ4NnDL7RCoLCSbv2JDKotzYoHsYtkXv-wZ-WK9JUdTpA";
var deviceKey =
  "cfuBAR5VhV4:APA91bEYeNsRFf4RH3B27zfe4ZGGYW1v2ofE_NhrLI_6jDIpTGFwiGfbNjjwYvfDVv-GnmAJtevsljOJz9XMvnQKSApP4Dkc7VxPydTbxpodVBglN-UOeEtaCl7BBAv0BR6Nrz4_gyz592onew3GyXgdJCw3IH6fqg";
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

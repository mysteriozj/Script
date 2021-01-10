/*
Tanhua
^https:\/\/1008610010\.laikanshu\.top\/Member\/getUserInfo
hostname = 1008610010.laikanshu.top 
*/

var body = $response.body; 
var obj = JSON.parse(body);

obj.data.is_vip = 1;
obj.data.user_viptime = 2033-10-10;

body = JSON.stringify(obj);
$done({body});
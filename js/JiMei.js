/*
集美
^https:\/\/026965671aa6704b8cfc\.myminapp\.com\/hserve\/v\2\.0\/user\/info\/492072433804665\/
^https:\/\/026965671aa6704b8cfc\.myminapp\.com\/hserve\/v\2.0\/user\/info\/*
[MITM]
hostname = 026965671aa6704b8cfc.myminapp.com
*/

var body = $response.body; 
var obj = JSON.parse(body);

obj.is_vip = true;
obj.clarity_boost_max = 1000;
obj.is_authorized = true;
obj.is_admin = true;
obj.download_count = 0;

body = JSON.stringify(obj);
$done({body});
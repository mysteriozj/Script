/*
简影
^http:\/\/api\.jianmovie\.com\/(cardinfo|expense)
[MITM]
hostname = api.jianmovie.com
*/


var body = $response.body; 
var obj = JSON.parse(body);


obj.success = 1;
obj.is_vip = 1;
obj.vip_type = 1;
obj.vip_expire_time = 4071743248;


body = JSON.stringify(obj);
$done({body});
/*
氧气
^https:\/\/api.o2ting.com\/api\/V2\/user\/GetUserInfo\.json

hostname = api.o2ting.com
*/

var body = $response.body;
var obj = JSON.parse(body);

obj.userInfo.isMember = true;
obj.userInfo.startDate = 2020-09-17 12:30:45;
obj.userInfo.endDate = 2099-09-17 12:19:19;

body = JSON.stringify(obj);
$done({body});
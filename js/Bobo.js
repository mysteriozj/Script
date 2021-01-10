/*
Bobo

^http:\/\/api\.wscdn\.vip\/index\/(User\/ucenter|Get\/videoInfo)

hostname = api.wscdn.vip 
*/
var body = $response.body; 
var obj = JSON.parse(body);

obj.data.isVip = 1;
obj.data.isVip_forever = 1;
obj.data.buyStatus = 1;

body = JSON.stringify(obj);
$done({body});
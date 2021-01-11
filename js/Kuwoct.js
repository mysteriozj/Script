/*
酷我听书
^http:\/\/tingshu\.kuwo\.cn\/v2\/api\/user\/info
^https:\/\/audiobookpay\.kuwo\.cn\/a\.p*

hostname = tingshu.kuwo.cn,audiobookpay.kuwo.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const info = '/api/user/info';

const vip = '/a.p*';

if (url.indexOf(info) != -1) {
	obj["vipExpires"] = "4070952349";
	obj["vipType"] = "1";
	body = JSON.stringify(obj);
 }
 if (url.indexOf(vip) != -1) {
	obj["limitfree"] = "1";
	obj["downright"] = "1";
	obj["playright"] = "1";
	obj["policytype"] = "1";
	obj["pay"] = "0";
	body = JSON.stringify(obj);
 }
$done({body});

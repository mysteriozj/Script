/*
酷我听书
^http:\/\/tingshu\.kuwo\.cn\/v2\/api\/user\/info*
^https:\/\/audiobookpay\.kuwo\.cn\/a\.p

hostname = tingshu.kuwo.cn,audiobookpay.kuwo.cn
*/
/*
body = $response.body.replace(/vipExpires":\d/g, 'vipExpires":4071731352').replace(/vipType":0/g, 'vipType":1').replace(/limitfree":\d/g, 'limitfree":1').replace(/policytype":\d/g, 'policytype":1').replace(/downright":\d/g, 'downright":1').replace(/playright":\d/g, 'playright":1');
$done({body});
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const info = '/user/info*';
const vip = '/a.p';

if (url.indexOf(info) != -1) {
	obj["vipExpires"] = "4071731352";
	obj["vipType"] = "1";
	body = JSON.stringify(obj);
 }
if (url.indexOf(vip) != -1) {
	obj["limitfree"] = "1";
	obj["policytype"] = "1";
	obj["downright"] = "1";
	obj["playright"] = "1";
	body = JSON.stringify(obj);
 }
$done({body});
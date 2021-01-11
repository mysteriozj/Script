/*
酷我听书
^http:\/\/tingshu\.kuwo\.cn\/v2\/api\/user\/info*
^https:\/\/audiobookpay\.kuwo\.cn\/a\.p
^https:\/\/audiobookpay\.kuwo\.cn\/a\.p\?*

hostname = tingshu.kuwo.cn,audiobookpay.kuwo.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const info = '/a.p*';
const vip = '/a.p';

if (url.indexOf(info) != -1) {
	obj["bought_vip_end"] = "4071731352";
	obj["type"] = "2";
	obj["bought_vip"] = "1";
	obj["end"] = "4071731352";
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
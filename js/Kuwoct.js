/*
酷我听书
^https:\/\/audiobookpay\.kuwo\.cn\/a\.p
^http:\/\/tingshu\.kuwo\.cn\/v2\/api\/user\/info

hostname = audiobookpay.kuwo.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/a.p';
const vip1 = '/v2/api/user/info';

if (url.indexOf(vip) != -1) {
    obj.packs.end = 4071731352;
	obj.packs.bought_vip = 1;
	obj.packs.type = 2;
	obj.packs.period = 111;
	obj.packs.bought_vip_end = 4071731352;
	body = JSON.stringify(obj);
 }
if (url.indexOf(vip) != -1) {
    obj.data.vipExpires = 4071731352;
	obj.data.vipType = 1;
	body = JSON.stringify(obj);
 }
 
$done({body});
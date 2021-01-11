/*
氧气
^https:\/\/api\.o2ting\.com\/api\/V2\/(userc\/GetUserInfo|audio\/GetAudioListByIndex)\.json.*

hostname = api.o2ting.com
*/
/*
var body = $response.body;
var obj = JSON.parse(body);

obj.userInfo.isMember = true;
obj.userInfo.startDate = "2020-09-17 12:30:45";
obj.userInfo.endDate = "2099-09-17 12:19:19";

body = JSON.stringify(obj);
$done({body});
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/V2/user/GetUserInfo.json';
const check = '/api/V2/audio/GetAudioListByIndex.json';

if (url.indexOf(vip) != -1) {
	obj["isMember"] = "true";
    obj["startDate"] = "2020-09-17 12:30:45";
	obj["endDate"] = "2099-09-17 12:19:19";
	body = JSON.stringify(obj);
 }
if (url.indexOf(check) != -1) {
    obj["isFree"] = "true";
	body = JSON.stringify(obj);
 }

$done({body});
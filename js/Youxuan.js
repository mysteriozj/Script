/*
Youxuan
^https:\/\/vip07\.tr102\.com\/api\/(notice\/notice|advertise\/getStartUp|user)

hostname = vip07.tr102.com
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const p1 = '/api/notice/notice';
const p2 = '/api/advertise/getStartUp';
const p3 = '/api/user/';



if (url.indexOf(p1) != -1) {
    obj.code = 0;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p2) != -1) {
    obj.obj = {};
    body = JSON.stringify(obj);
} 
if (url.indexOf(p3) != -1) {
    obj.obj.uid = 888888;
    body = JSON.stringify(obj);
} 
$done({body});

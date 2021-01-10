/*
Kumi
^https:\/\/myiconisme\.com\/\/api\/(movie\/addPlay|member|video_clip\/play|app\/message_list)

hostname = myiconisme.com
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const p2 = '//api/movie/addPlay';
const p3 = '//api/member';
const p4 = '/api/video_clip/play';
const p5 = '/api/app/message_list';

if (url.indexOf(p2) != -1) {
    obj.data.re_today_view_times = 999;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p3) != -1) {
    obj.data.is_vip = 1;
    obj.data.expire_time = 2033-10-10;
    obj.data.expire_time1 = 2012546368;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p4) != -1) {
    obj.data.is_login = 0;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p5) != -1) {
    obj.code = 1;
    body = JSON.stringify(obj);
} 
$done({body});

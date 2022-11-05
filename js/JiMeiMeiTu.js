/*
集美美图  
^https://026965671aa6704b8cfc.myminapp.com/hserve/v2.0/user/info/492072433804665/
^https://026965671aa6704b8cfc.myminapp.com/hserve/v2.4/table/user_wallpaper/record/
^https:\/\/026965671aa6704b8cfc\.myminapp\.com\/hserve\/v\d\.\d\/(user\/info|table\/user_wallpaper\/record) url script-response-body 

hostname = 026965671aa6704b8cfc.myminapp.com
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const p1 = '/hserve/v2.0/user/info';
const p2 = '/hserve/v2.4/table/user_wallpaper/record';
if (url.indexOf(p1) != -1) {
    obj.is_vip = true;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p2) != -1) {
    obj.meta.limit = 10;
    body = JSON.stringify(obj);
}
$done({body});
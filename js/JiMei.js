/*
集美
^https:\/\/026965671aa6704b8cfc\.myminapp\.com\/hserve\/v\2\.0\/user\/info\/492072433804665\/
https://026965671aa6704b8cfc.myminapp.com/hserve/v2.4/table/user_wallpaper/record/
^https:\/\/026965671aa6704b8cfc\.myminapp\.com\/hserve\/v\d.\d\/(user\/info|table\/user_wallpaper\/record)\/*
[MITM]
hostname = 026965671aa6704b8cfc.myminapp.com


var body = $response.body; 
var obj = JSON.parse(body);

obj.is_vip = true;
obj.clarity_boost_max = 1000;
obj.is_authorized = true;
obj.is_admin = true;
obj.download_count = 0;

body = JSON.stringify(obj);
$done({body});
*/

var obj = JSON.parse($response.body);
if ($request.url.indexOf("/user/info/") != -1){
obj = {
"id" : 492072433804665,
"_anonymous" : true,
"is_vip" : true,
"clarity_boost_max" : 1000,
"created_at" : 1666435671,
"created_by" : 492072433804665,
"_email_verified" : false,
"avatar" : "https://media.ifanrusercontent.com/hydrogen/default_avatar.png",
"is_authorized" : true,
"updated_at" : 1666436353,
"_provider" : {

},
"is_admin" : true,
"_phone_verified" : false,
"_username" : "Piggy",
"download_count" : 0
}
}
if ($request.url.indexOf("/table/user_wallpaper/record/") != -1){
obj = {
"meta" : {
"previous" : null,
"next" : null,
"offset" : 0,
"total_count" : 0,
"limit" : 0
},
"objects" : [

]
}
}

$done({body: JSON.stringify(obj)});
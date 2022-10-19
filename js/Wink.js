/*
Wink
^https?:\/\/api-sub\.meitu\.com\/v\d\/user\/vip_info_by_group\.json url script-response-body 
[MITM]
hostname = api-sub.meitu.com

*/
var obj=JSON['parse']($response['body']);

obj.data.is_vip = true;

$done({body:JSON['stringify'](obj)});

/*
Wink
^https?:\/\/api-sub\.meitu\.com\/v\d\/user\/vip_info_by_group\.json url script-response-body 
[MITM]
hostname = api-sub.meitu.com

*/
var obj = JSON.parse($response.body);
if ($request.url.indexOf("user/vip_info_by_group.json") != -1){
obj = {"code":0,"error_code":"00000","message":"success","data":{"account_type":1,"account_id":1456266428,"is_vip":true,"valid_time":1988963877000,"invalid_time":1988963877000,"derive_type":1,"derive_type_name":"超级会员","membership":{"id":4,"display_name":"wink会员","level":1,"level_name":"普通"}}
}
$done({body: JSON.stringify(obj)});

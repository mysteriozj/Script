/*
脚本功能：搜图神器
软件版本：1.3.3
下载地址：https://apps.apple.com/cn/app/id1576499990
更新时间：2022.11.08
[rewrite_local]
# > TOK CAM解锁永久订阅
^http:\/\/wallpaper\.soutushenqi\.com\/api\/v\d\/account\/token url script-response-body  

[mitm] 
hostname = wallpaper.soutushenqi.com
*/
var body = $response.body; 
var obj = JSON.parse(body);

obj.data.vipType = 1;
obj.data.vipLabelLevel = 1;
obj.data.vipLabel = "永久会员";
obj.data.isVirtual = 1;
obj.data.vitalityVipPastDueTime = 1988983132000;

body = JSON.stringify(obj);
$done({body});
/*
脚本功能：小组件盒子
软件版本：0.17.1
下载地址：https://apps.apple.com/cn/app/id1574611121
更新时间：2022.11.10
[rewrite_local]
^https:\/\/widget-box-api\.codefuture\.top\/v1\/users\/me url script-response-body 

[mitm] 
hostname = widget-box-api.codefuture.top
*/
var body = $response.body; 
var obj = JSON.parse(body);

obj.isVip = true;

body = JSON.stringify(obj);
$done({body});
/*
脚本功能：2496
软件版本：2.0.7
下载地址：https://apps.apple.com/cn/app/id1210665923
更新时间：2022.11.08
[rewrite_local]
^\
^https:\/\/apipro_2496\.kuwo\.cn\/v\d/front\/user\/detail url script-response-body 

[mitm] 
hostname = apipro_2496.kuwo.cn
*/
var body = $response.body; 
var obj = JSON.parse(body);

obj.data.vip = 1;
obj.data.expirationTime = 1988983132000;

body = JSON.stringify(obj);
$done({body});
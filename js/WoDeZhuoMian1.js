/*
脚本功能：我的桌面
软件版本：3.4.3
下载地址：https://apps.apple.com/cn/app/id1534704608
更新时间：2022.11.10
[rewrite_local]
^https:\/\/cs\.kuso\.xyz\/ url script-response-body 
^https:\/\/cs\.kuso\.xyz\/configs url script-response-body 

[mitm] 
hostname = cs.kuso.xyz
*/
var body = $response.body; 
var obj = JSON.parse(body);

obj.lockscreen_noVip = 1,1;

body = JSON.stringify(obj);
$done({body});
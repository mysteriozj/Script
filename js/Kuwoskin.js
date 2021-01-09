/*
酷我皮肤 转自nzw9314
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/theme) url script-response-body https://raw.githubusercontent.com/mysteriozj/Script/master/js/Kuwoskin.js
*/

var obj = JSON.parse($response.body);
 obj.data.vipTheme.type="free";
 obj.data.needBieds=null;
$done({body: JSON.stringify(obj)});
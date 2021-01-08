/*
^https:\/\/pay\.wecut\.com\/apple\/iosVerifyReceipt\.php
[MITM]
hostname = pay.wecut.com
*/
var body = $response.body; 
var obj = JSON.parse(body);


obj.data.isValid = 1;
obj.data.expiresTs = 4072147200;


body = JSON.stringify(obj);
$done({body});
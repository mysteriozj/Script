/*
Fomz
^https:\/\/fz68resapi\.imendon\.com\/v2\/purchase\/vip\/verification
[MITM]
hostname = fz68resapi.imendon.com
*/

var body = $response.body; 
var obj = JSON.parse(body);

obj.data.isValid = 1;

body = JSON.stringify(obj);
$done({body});



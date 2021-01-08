/*
^http:\/\/sb16qhm9gyey\.leanapp\.cn\/user\/my
[MITM]
hostname = *.leanapp.cn
*/
var body = $response.body; 
var obj = JSON.parse(body);


obj.data.vip_end_time = 2868125774;
obj.data.reg_pay = 1;
obj.data.is_vip = 1;


body = JSON.stringify(obj);
$done({body});

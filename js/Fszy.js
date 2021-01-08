/*
凡视知音
^http:\/\/www\.fanshizhiyin\.com:80\/fszy\/api\/customer\/checkSerialNum
[MITM]
hostname = *fanshizhiyin.com
*/
var obj = JSON.parse($response.body);
if ($request.url.indexOf("/fszy/api/customer/checkSerialNum") != -1){
  obj.code = 3;
  obj.message = "用户已绑定授权码";
  obj.success = true;
  obj.results = "1000";
  obj.totalResultsSize = 2;
}
$done({body: JSON.stringify(obj)});
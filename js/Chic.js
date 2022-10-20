/*
Chic 2022.02.26
^https:\/\/api-sub\.meitu\.com\/v2\/user\/(vip_info|rights_list)\.json
[MITM]
hostname = api-sub.meitu.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const info = '/v2/user/vip_info.json';
const list = '/v2/user/rights_list.json';

if (url.indexOf(info) != -1) {
    obj.data.account_type = 1;
    obj.data.is_vip = true;
    body = JSON.stringify(obj);
} 
if (url.indexOf(list) != -1) {
    obj.data.type = 1;
    body = JSON.stringify(obj);
}
$done({body});


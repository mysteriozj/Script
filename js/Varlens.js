/*
Varlens 版本：4.13.1  2022.10.20
^https:\/\/mid\.zineapi\.com\/@varlens\/api\/user\/info\/ url script-response-body 
hostname = mid.zineapi.com
*/

let obj = JSON.parse($response.body);
obj = {
  "success": true,
  "data": {
    "username": "Mysteriozj",
    "app_name": "varlens",
    "nick": null,
    "email": "",
    "status": 0,
    "preferences": null,
    "membership": {
      "role_name": "pro",
      "begin_time": "2021-03-13T09:59:11.485Z",
      "end_time": "2045-12-31T00:00:00.481Z",
      "begin_time_ms": 1615629551485,
      "end_time_ms": 1894205803000
    },
    "social_apple_id": null
  }
}

$done({body: JSON.stringify(obj)});

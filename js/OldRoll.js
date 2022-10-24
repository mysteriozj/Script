/*
OldRoll  版本：4.4  2022.10.24
^https:\/\/oldrollservice\.careyourhrtsoftware\.com\/user\/queryBindState url script-response-body 
hostname = oldrollservice.careyourhrtsoftware.com
*/

let obj = JSON.parse($response.body);
    obj = {
"resultCode" : 0,
"data" : "KedzeHkgAB8/oUAJgzo5er6mT7R7twDT"
}

$done({body: JSON.stringify(obj)});
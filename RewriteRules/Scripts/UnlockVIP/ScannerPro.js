/*
扫描全能王解锁部分高级特权
*/
let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"1643731200"}}};
$done({body: JSON.stringify(obj)});

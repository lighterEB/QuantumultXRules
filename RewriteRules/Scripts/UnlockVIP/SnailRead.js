/*
网易蜗牛读书 解锁特权
*/
var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 4102329600000;
body = JSON.stringify(obj);
$done({body});

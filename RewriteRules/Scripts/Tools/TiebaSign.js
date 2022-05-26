var body = $response.body;
var obj = JSON.parse(body);

body = JSON.stringify(obj);

console.log(body);
$notify("贴吧：","","发现贴吧！")
$done(body);

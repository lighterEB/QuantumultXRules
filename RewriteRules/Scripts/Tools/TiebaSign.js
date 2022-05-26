var body = $response.body;
var obj = JSON.parse(body);

body = JSON.stringify(obj);

console.log(body);

$done(body);

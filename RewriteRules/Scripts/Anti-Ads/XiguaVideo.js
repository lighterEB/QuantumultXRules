var body = $response.body;
var obj = JSON.parse(body);
for(var key in obj['data']['settings'){
    console.log(key);
}

$done();

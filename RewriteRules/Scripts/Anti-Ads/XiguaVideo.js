var body = $response.body;
var obj = JSON.parse(body);
for(var key in obj['data']){
    console.log(key);
}

$done();

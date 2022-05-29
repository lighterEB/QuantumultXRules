var body = $response.body;
var obj = JSON.parse(body);
for(var key in obj['data']){
	if(key.toString().match('_ad_')){
		console.log(key);
	}
}

$done();

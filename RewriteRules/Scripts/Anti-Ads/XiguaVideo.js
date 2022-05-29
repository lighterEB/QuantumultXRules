var body = $response.body;
var obj = JSON.parse(body);
console.log(JSON.stringify(obj.data.video_ad_config));

$done();

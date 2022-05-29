var body = $response.body;
var obj = JSON.parse(body);
obj['data']['settings']['video_ad_config'] = ' ';
if(obj['data']['settings']['video_ad_config'] == ' '){
    console.log("成功！");
}

$done(JSON.stringify(obj));

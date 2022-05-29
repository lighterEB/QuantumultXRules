var body = $response.body;
var obj = JSON.parse(body);
obj['data']['settings']['xg_comment']['write_comment_placeholder'] = '请勿做键盘侠，如果要喷就使劲喷';
$done(JSON.stringify(obj));

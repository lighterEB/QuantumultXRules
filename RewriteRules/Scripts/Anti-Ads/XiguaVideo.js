var body = $response.body;
var obj = JSON.parse(body);
for (var i=0; i<obj['data'].length; i++){
    content = JSON.parse(JSON.parse(JSON.stringify(obj['data'][i]['content'])));
    if(('insert_ads' in content) && !('ad_label' in content)){
        delete content['insert_ads']['roll_time_list'];
        content['insert_ads']['has_insert_ads'] = false;
        content['insert_ads']['has_roll_ads'] = false;
        console.log('干掉视频中广告！');
        obj['data'][i]['content']=content;
    }else{
        obj['data'][i]['content']='';
        console.log('干掉广告视频！);
        console.log(JSON.stringify(content));
    }
//     for (var key in obj['data'][i]['content']){
//         console.log(key);
//         if (key == 'insert_ads'){
//               obj['data'][i]['content'][key]['has_insert_ads'] = 'false';
//               obj['data'][i]['content'][key]['has_roll_ads'] = 'false';
//         }
//     }
}
$done(JSON.stringify(obj));

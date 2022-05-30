var body = $response.body;
var obj = JSON.parse(body);
for (var i=0; i<obj['data'].length; i++){
    content = JSON.parse(JSON.parse(JSON.stringify(obj['data'][i]['content'])));
    if('insert_ads' in content){
        delete content['insert_ads']['roll_time_list'];
        content['insert_ads']['has_insert_ads'] = false;
        content['insert_ads']['has_roll_ads'] = false;
        console.log('干掉视频中广告！');
        obj['data'][i]['content']=content;
    }
    if('ad_label' in content || 'bury_count' in content || 'ad_id' in content){
        obj['data'][i]['content']='';
        console.log('干掉广告视频！');
    }else{
        console.log(JSON.stingify(content['filter_words']));
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

var body = $response.body;
var obj = JSON.parse(body);
for (var i=0; i<obj['data'].length; i++){
    var content = JSON.parse(JSON.parse(JSON.stringify(obj['data'][i]['content'])));
    for(var key in content){
        if(key=='insert_ads'){
            delete content[key]['roll_time_list'];
            content[key]['has_insert_ads'] = false;
            content[key]['has_roll_ads'] = false;
            console.log('干掉视频中广告！');
        }
        if(key=='ad_label'){
            content = '';
            console.log('干掉广告是视频！');
        }
    
    }
    obj['data'][i]['content']=content;
//     for (var key in obj['data'][i]['content']){
//         console.log(key);
//         if (key == 'insert_ads'){
//               obj['data'][i]['content'][key]['has_insert_ads'] = 'false';
//               obj['data'][i]['content'][key]['has_roll_ads'] = 'false';
//         }
//     }
}
$done(JSON.stringify(obj));

var body = $response.body;
var obj = JSON.parse(body);
for (var i=0; i<obj['data'].length; i++){
    console.log(JSON.stringify(obj['data'][i]['content']));
//     for (var key in obj['data'][i]['content']){
//         console.log(key);
//         if (key == 'insert_ads'){
//               obj['data'][i]['content'][key]['has_insert_ads'] = 'false';
//               obj['data'][i]['content'][key]['has_roll_ads'] = 'false';
//         }
//     }
}
$done(JSON.stringify(obj));

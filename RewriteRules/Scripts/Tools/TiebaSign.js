var hexcase=0;var b64pad="";var chrsz=8;function hex_md5(s){return binl2hex(core_md5(str2binl(s),s.length*chrsz))}function b64_md5(s){return binl2b64(core_md5(str2binl(s),s.length*chrsz))}function str_md5(s){return binl2str(core_md5(str2binl(s),s.length*chrsz))}function hex_hmac_md5(a,b){return binl2hex(core_hmac_md5(a,b))}function b64_hmac_md5(a,b){return binl2b64(core_hmac_md5(a,b))}function str_hmac_md5(a,b){return binl2str(core_hmac_md5(a,b))}function md5_vm_test(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72"}function core_md5(x,e){x[e>>5]|=0x80<<((e)%32);x[(((e+64)>>>9)<<4)+14]=e;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16){var f=a;var g=b;var h=c;var j=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,f);b=safe_add(b,g);c=safe_add(c,h);d=safe_add(d,j)}return Array(a,b,c,d)}function md5_cmn(q,a,b,x,s,t){return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b)}function md5_ff(a,b,c,d,x,s,t){return md5_cmn((b&c)|((~b)&d),a,b,x,s,t)}function md5_gg(a,b,c,d,x,s,t){return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t)}function md5_hh(a,b,c,d,x,s,t){return md5_cmn(b^c^d,a,b,x,s,t)}function md5_ii(a,b,c,d,x,s,t){return md5_cmn(c^(b|(~d)),a,b,x,s,t)}function core_hmac_md5(a,b){var c=str2binl(a);if(c.length>16)c=core_md5(c,a.length*chrsz);var d=Array(16),opad=Array(16);for(var i=0;i<16;i++){d[i]=c[i]^0x36363636;opad[i]=c[i]^0x5C5C5C5C}var e=core_md5(d.concat(str2binl(b)),512+b.length*chrsz);return core_md5(opad.concat(e),512+128)}function safe_add(x,y){var a=(x&0xFFFF)+(y&0xFFFF);var b=(x>>16)+(y>>16)+(a>>16);return(b<<16)|(a&0xFFFF)}function bit_rol(a,b){return(a<<b)|(a>>>(32-b))}function str2binl(a){var b=Array();var c=(1<<chrsz)-1;for(var i=0;i<a.length*chrsz;i+=chrsz)b[i>>5]|=(a.charCodeAt(i/chrsz)&c)<<(i%32);return b}function binl2str(a){var b="";var c=(1<<chrsz)-1;for(var i=0;i<a.length*32;i+=chrsz)b+=String.fromCharCode((a[i>>5]>>>(i%32))&c);return b}function binl2hex(a){var b=hexcase?"0123456789ABCDEF":"0123456789abcdef";var c="";for(var i=0;i<a.length*4;i++){c+=b.charAt((a[i>>2]>>((i%4)*8+4))&0xF)+b.charAt((a[i>>2]>>((i%4)*8))&0xF)}return c}function binl2b64(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var c="";for(var i=0;i<a.length*4;i+=3){var d=(((a[i>>2]>>8*(i%4))&0xFF)<<16)|(((a[i+1>>2]>>8*((i+1)%4))&0xFF)<<8)|((a[i+2>>2]>>8*((i+2)%4))&0xFF);for(var j=0;j<4;j++){if(i*8+j*6>a.length*32)c+=b64pad;else c+=b.charAt((d>>6*(3-j))&0x3F)}}return c}



function getCookies() {
    try {
      if ($request.headers && $request.url.match(/c\.tieba\.baidu\.com/)) {
        var CookieName = "百度贴吧";
        var CookieKey = "CookieTB";
        var tbs = $request.body[''] 
        var CookieValue = $request.headers['Cookie'];
        if ($prefs.valueForKey(CookieKey)) {
          if ($prefs.valueForKey(CookieKey) != CookieValue) {
            var cookie = $prefs.setValueForKey(CookieValue, CookieKey);
            if (!cookie) {
              $notify("", "", "更新" + CookieName + "Cookie失败 ‼️");
            } else {
              $notify("", "", "更新" + CookieName + "Cookie成功 🎉");
            }
          }
        } else {
          var cookie = $prefs.setValueForKey(CookieValue, CookieKey);
          if (!cookie) {
            $notify("", "", "首次写入" + CookieName + "Cookie失败 ‼️");
          } else {
            $notify("", "", "首次写入" + CookieName + "Cookie成功 🎉");
          }
        }
      } else {
        $notify("写入Cookie失败", "", "请检查匹配URL或配置内脚本类型 ‼️");
      }
    } catch (eor) {
      $notify("写入Cookie失败", "", "未知错误 ‼️")
      console.log(JSON.stringify(eor) + "\n" + eor + "\n" + JSON.stringify($request.headers))
    }
    $.done();
  }
  

function getLikeForum() {
    const cookie = $prefs.valueForKey('CookieTB')
    if(cookie) {
        const url = 'http://tieba.baidu.com/mo/q/newmoindex'
        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4621.0 Safari/537.36",
            "Cookie": cookie
        }
        const myRequest = {
            url: url,
            headers: headers,
        };
    
        $task.fetch(myRequest).then(response => {
            // response.statusCode, response.headers, response.body
            var resp = JSON.parse(response.body);
            $notify("Title", "Subtitle", JSON.stringify(resp)); // Success!
        }, reason => {
            // reason.error
            $notify("Title", "Subtitle", reason.error); // Error!
        });

    } else {
        $notify("","","尚未获取Cookie，正在尝试获取");
        getCookies();
    }
    $done();
}

function tiebaSign() {
    const url = "http://c.tieba.baidu.com/c/c/forum/sign";
    const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': 'c.tieba.baidu.com',
            "Accept-Language": "zh-cn",
    }
    var data = {'BDUSS':'o4Nno4V1N0NVZSZzBtRnphaWoyR09ERmYyWVRUeXd5QjlCTU1QflhFbWN5dDFoSUFBQUFBJCQAAAAAAAAAAAEAAACyQ0odaHVzMTk5MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJw9tmGcPbZhaF', 'kw': '李毅吧', 'tbs': '19ef3f4659ef56291639333786', 'timestamp': Date.now().toString()};
    var i = ''
    for(var key in data){
        i+=key+'='+ data[key]
    }
    i+='tiebaclient!!!'
    var v1 = hex_md5(unescape(encodeURIComponent(i)));
    data['sign']=v1.toUpperCase();
    url+="?"
    for(var key in data){
        url+=key+'='+data[key]+'&'
    }
    const myRequest = {
        url: url,
        method: method, // Optional, default GET.
        headers: headers,
    };

    $task.fetch(myRequest).then(response => {
        // response.statusCode, response.headers, response.body
        var resp = JSON.parse(response.body);
        $notify("Title", "Subtitle", JSON.stringify(resp)); // Success!
        $done();
    }, reason => {
        // reason.error
        $notify("Title", "Subtitle", reason.error); // Error!
        $done();
    });
}

getLikeForum();



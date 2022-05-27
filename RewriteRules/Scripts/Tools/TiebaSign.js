function getLikeForum() {
    const cookie = $prefs.valueForKey('CookieTB');
    const url = 'http://tieba.baidu.com/mo/q/newmoindex';
    var headers = {
        "User-Agent": "Mozilla/5.0(Windows NT 10.0; Win64; x64)AppleWebKit/537.36(KHTML, like Gecko)Chrome/95.0.4621.0 Safari/537.36",
        "Cookie": cookie
    }
    var forums = {
        url: url,
        headers: headers
    }
    if (cookie) {
        $task.fetch(forums).then(response => {
            var resp = JSON.parse(response.body);
            console.log(JSON.stringify(resp));
            $done();
        }, reson => {
            console.log(reson.error);
            $done();
        });
    } else {
        $notify("贴吧签到😎", "", "	😓尚未获取Cookie, 请打开百度贴吧");
    }

}

function tiebaSign() {
    const url = "http://c.tieba.baidu.com/c/c/forum/sign";
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': 'c.tieba.baidu.com',
        "Accept-Language": "zh-cn",
    }
    var data = { 'BDUSS': 'o4Nno4V1N0NVZSZzBtRnphaWoyR09ERmYyWVRUeXd5QjlCTU1QflhFbWN5dDFoSUFBQUFBJCQAAAAAAAAAAAEAAACyQ0odaHVzMTk5MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJw9tmGcPbZhaF', 'kw': '李毅吧', 'tbs': '19ef3f4659ef56291639333786', 'timestamp': Date.now().toString() };
    var i = ''
    for (var key in data) {
        i += key + '=' + data[key]
    }
    i += 'tiebaclient!!!'
    var v1 = hex_md5(unescape(encodeURIComponent(i)));
    data['sign'] = v1.toUpperCase();
    url += "?"
    for (var key in data) {
        url += key + '=' + data[key] + '&'
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

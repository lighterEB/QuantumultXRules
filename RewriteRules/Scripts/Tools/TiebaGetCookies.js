function getCookies() {
    try {
      if ($request.headers && $request.url.match(/c\.tieba\.baidu\.com/)) {
        var CookieName = "百度贴吧";
        var CookieKey = "CookieTB";
        var CookieValue = $request.headers['Cookie'];
        var BDUSS = CookieValue.split(';')[4].split('=')[1];
        if ($prefs.valueForKey(CookieKey)) {
          if ($prefs.valueForKey(CookieKey) != CookieValue) {
            var cookie = $prefs.setValueForKey(CookieValue, CookieKey);
            $prefs.setValueForKey(BDUSS, 'BDUSS');
            if (!cookie) {
              $notify("", "", "更新" + CookieName + "Cookie失败 ‼️");
            } else {
              $notify("", "", "更新" + CookieName + "Cookie成功 🎉");
            }
          }
        } else {
          var cookie = $prefs.setValueForKey(CookieValue, CookieKey);
          $prefs.setValueForKey(BDUSS, 'BDUSS');
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
    $done();
  }
function getTbs() {
  var tbs = $prefs.valueForKey('tbs');
  var body = JSON.parse($response.body)['anti']['tbs']; 
  try {
      if ($response.body && tbs != body ) {
          $prefs.setValueForKey(body, 'tbs');
          console.log('更新tbs成功！');
      }
    } catch(e) {
        console.log(e);
    }
    $done()
}

getCookies();
getTbs();

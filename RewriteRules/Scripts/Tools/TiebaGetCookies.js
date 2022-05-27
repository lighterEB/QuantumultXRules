function getCookies() {
    try {
      if ($request.headers && $request.url.match(/c\.tieba\.baidu\.com/)) {
        var CookieName = "百度贴吧";
        var CookieKey = "CookieTB";
        var CookieValue = $request.headers['Cookie'];
        var BDUSS = CookieValue.match('BDUSS=(.*?);').toString().split('=')[1];
        var tbs = JSON.parse($response.body)['anti']['tbs']; 
        if ($prefs.valueForKey(CookieKey)) {
          if ($prefs.valueForKey(CookieKey) != CookieValue || $prefs.valueForKey('BDUSS') != BDUSS || $prefs.valueForKey('tbs') != tbs) {
            var cookie = $prefs.setValueForKey(CookieValue, CookieKey);
            $prefs.setValueForKey(BDUSS, 'BDUSS');
            $prefs.setValueForKey(tbs, 'tbs');
            if (!cookie) {
              $notify("百度贴吧", "", "更新" + CookieName + "Cookie失败 ‼️");
            } else {
              $notify("百度贴吧", "", "更新" + CookieName + "Cookie成功 🎉");
            }
          }
        } else {
          var cookie = $prefs.setValueForKey(CookieValue, CookieKey);
          $prefs.setValueForKey(BDUSS, 'BDUSS');
          $prefs.setValueForKey(tbs, 'tbs');
          if (!cookie) {
            $notify("百度贴吧", "", "首次写入" + CookieName + "Cookie失败 ‼️");
          } else {
            $notify("百度贴吧", "", "首次写入" + CookieName + "Cookie成功 🎉");
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
getCookies();

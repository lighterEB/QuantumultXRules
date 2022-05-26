function getCookies() {
  try {
    if ($request.headers && $request.url.match(/c\.tieba\.baidu\.com/)) {
      var CookieName = "百度贴吧";
      var CookieKey = "CookieWA";
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

try {
  $prefs.removeValueForkey('CookieWA');
  if(!$prefs.valueForKey('CookieWA')) {
      $notify("","", "清除Cookie成功");
  }else {
      $notify("","", "清除Cookie失败");
  }
} catch (e) {
  console.log(e);
}

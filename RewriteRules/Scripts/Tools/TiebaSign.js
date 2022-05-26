const url='http://tieba.baidu.com/mo/q/newmoindex'
const headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4621.0 Safari/537.36",
        "Cookie": "BIDUPSID=F88D844C332EA0C4266DDF492B1AC67C; PSTM=1638111507; BAIDUID=F88D844C332EA0C4BF3A07BC65096DBC:FG=1; bdshare_firstime=1638701552958; __yjs_duid=1_2d73c14441760df05d7055b3723b71c61638702409530; Hm_lvt_7d6994d7e4201dd18472dd1ef27e6217=1638887493; BDUSS_BFESS=RSUn43VHdSS2F-MGZ3QmNSbkZRNFZlTFNPWkV5VGNEWkhkckpmSVdtRWF1OTFoSVFBQUFBJCQAAAAAAAAAAAEAAACyQ0odaHVzMTk5MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoutmEaLrZheW; BDORZ=FAE1F8CFA4E8841CC28A015FEAEE495D; STOKEN=fbffc0c0269826a0e4751ba3cccc36279e3ad2ce5befb43baea5fcb97588d898; USER_JUMP=-1; Hm_lvt_98b9d8c2fd6608d564bf2ac2ae642948=1639055816,1639056132,1639329442,1639329457; H_PS_PSSID=35105_31253_35239_34967_34584_34504_35245_34579_34872_35323_26350_35210; Hm_lpvt_98b9d8c2fd6608d564bf2ac2ae642948=1639330222; BAIDU_WISE_UID=wapp_1639330222505_791; mo_originid=2"
}
const myRequest = {
    url: url,
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

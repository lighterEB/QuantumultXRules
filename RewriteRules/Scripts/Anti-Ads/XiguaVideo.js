var body = $response.body;
var obj = JSON.parse(body);
obj['data']['settings']['video_ad_config']['byte_ad_tracker_config']['is_enable_monitor'] = false;
obj['data']['settings']['video_ad_config']['byte_ad_tracker_config']['is_enable'] = false;
obj['data']['settings']['video_ad_config']['byte_ad_tracker_config']['settings']['c2s']['store_when_offline'] = false;
obj['data']['settings']['video_ad_config']['byte_ad_tracker_config']['settings']['c2s']['is_enable'] = false;
obj['data']['settings']['video_ad_config']['video_ad_preload_appstore_skanasyn_enable'] = 0;
obj['data']['settings']['video_ad_config']['video_ad_deep_link_dialog_intercept_enable'] = 0;
obj['data']['settings']['video_ad_config']['ad_monitor_config']['ad_visibility_monitor_enable'] = 0;
obj['data']['settings']['video_ad_config']['ad_force_send_realtime_click_enable'] = 0;
obj['data']['settings']['video_ad_config']['is_enable_byte_ad_tracker'] = 0;
obj['data']['settings']['xg_comment']['write_comment_placeholder'] = '请勿做键盘侠，如果要喷就使劲喷';
$done(JSON.stringify(obj));

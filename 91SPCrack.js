/*
 *
 *
脚本功能：91视频解锁会员
软件版本：5.1.1
下载地址：https://shrtm.nu/bssp
脚本作者：Hausd0rff
更新时间：2021.11.18
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# 91视频解锁会员
^https?:\/\/ap\w{1}\.(weilaixushi|orientlion|qdjdswkj)\.com\/m_user\/info url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/91SPCrack.js
^https?:\/\/.*\/common\/splash_config url reject-200

[mitm] 

hostname = app.weilaixushi.com, api.orientlion.com, app.qdjdswkj.com
*
*
*/


var body = $response.body;
    
    body = "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";

$done({body});

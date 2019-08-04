


// 13870083309
const {getRandom} = require("./help");
const querystring = require("querystring");
const request = require("request");

// 发送验证码
module.exports = function (phoneId,cb) {
    // http://v.juhe.cn/sms/send?mobile=手机号码&tpl_id=短信模板ID&tpl_value=%23code%23%3D654654&key=
    const code = getRandom(100000,999999);
    const mobile = phoneId;
    const tpl_id = "164473";
    const tpl_value = "#code#="+code;
    const key = "b3549c453ee620a0ad521c035d2f2048"
    console.log(tpl_value);
    let url = "http://v.juhe.cn/sms/send";
    url += "?"+querystring.stringify({
        mobile,
        tpl_id,
        tpl_value,
        key
    })
    console.log(url);
    request(url,function (err,response,body) {
        console.log(body);
        if(!err && response.statusCode === 200){
            cb({
                ok:1,
                code
            })
        }else{
            cb({
                ok:-1,
                msg:"发送失败"
            })
        }
    })
}

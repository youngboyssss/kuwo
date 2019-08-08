//15510609739
const {getRandom} = require("./help");
const querystring = require("querystring"); //--把对象变成URL字符串
const request = require("request");

//发送验证码
module.exports = function (phoneId,cb) {
    // http://v.juhe.cn/sms/send?mobile=手机号码&tpl_id=短信模板ID&tpl_value=%23code%23%3D654654&key=
    const code = getRandom(100000,999999);
    const mobile=phoneId;
    const tpl_id=169596;
    const key="80c22305b27d93613fa63767bd2ff16c";
    const tpl_value="#code#="+code;
    let url = "http://v.juhe.cn/sms/send";
    url += "?"+querystring.stringify({
        mobile,
        tpl_id,
        key,
        tpl_value
    })
    console.log(url);
    request(url,function (err,response,body) {
        if(!err && response.statusCode === 200){
            cb({
                ok:1,
                code
            })
        }else {
            cb({
                ok:-1,
                msg:"发送失败"
            })
        }
    })
}

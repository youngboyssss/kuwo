const express = require("express");
const help = require("./help");
const db = require("./db");
const path = require("path")
const bodyParser = require("body-parser")
const fs = require("fs")
const sendCode = require("./sendCode");
const jwt = require("./jwt")
const app = express();
app.all("*",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type");
    res.header("Access-Control-Allow-Methods","DELETE,PUT");
    next();
})
app.use(bodyParser.json())

// 登陆
app.post("/login",function (req,res) {
    /*
    * 1、接收参数
    * 2、根据手机号去集合当中查找是否有该手机号的相关信息
    * 3、有
    *       1、判断验证码是否正确
    *           1、正确
    *               验证时间是否过期
    *                   1、过期，请重新获取验证码
    *                   2、未过期，登陆成功
    *                       去用户集合，查找是否有该用户，如果有该用户，更新一下最后登陆时间，
    *                       如果没有该用户，创建一个用户。
    *           2、不正确
    *               您输入的验证码错误
    * 4、无
    *      返回，请发送验证码*/
    const {phoneId,code} = req.body;
    console.log(phoneId,code,9999)
    db.findOne("codeList",{
        phoneId
    },function (err,codeInfo) {
        if(codeInfo){
            if(codeInfo.code === code/1){
                // 未过期
                if((codeInfo.sendTime+10*60*1000)>Date.now()){
                    db.findOne("userList",{
                        phoneId
                    },function (err,userInfo) {
                        if(userInfo){
                            db.updateOne("userList",{
                                phoneId
                            },{
                                $set:{
                                    lastTime:Date.now()    //设置最后登录时间
                                }
                            },function (err,results) {
                                res.json({
                                    ok:1,
                                    token:jwt.encode(phoneId),
                                    phoneId,
                                    msg:"登陆成功"
                                })
                            })
                        }else{
                            db.insertOne("userList",{
                                phoneId,
                                lastTime:Date.now(),
                                goldNum:999999999
                            },function (err,results) {
                                res.json({
                                    ok:1,
                                    phoneId,
                                    msg:"登陆成功"
                                })
                            })
                        }
                    })
                }else{
                    help.json(res,-1,"请重新获取验证码");
                }
            }else{
                help.json(res,-1,"您输入的验证码错误")
            }
        }else{
            help.json(res,-1,"请发送验证码")
        }
    })
});

/*app.all("*",function (req,res,next) {
    const token = req.headers.authorization;
    const info = jwt.decode(token);
    // console.log("token",info);
    if(info.ok < 1){
        res.json({
            ok:-2,// token验证失败。
            msg:info.msg
        })
    }else{
        next();
    }
});*/

app.get("/getClassify", function (req, res) {
    fs.readFile(path.resolve(__dirname,"../data/classify.json" ),function (err, data) {
        const infoList = JSON.parse(data);
        res.json({
            ok: 1,
            infoList
        })
    })

})

app.get("/token",function (req,res) {
    // console.log(1111111);
    res.json({
        ok:1,
        msg:"验证成功"
    })
})

// 发送验证码
app.get("/sendCode",function (req,res) {    //发送验证码
    // 发送验证码  phoneId
    /*思路：
    * 1、先去你的codeList集合当中查找是否给该手机号发送过短信
    *       1、发送过短信
    *           1、验证发送的时间
    *               1、时间超了60秒，继续发送
    *                   发送短信，并更新最后发送的时间。
    *               2、未到60秒，不允许发送，返回信息
    *       2、未发送过短信
    *           1、直接发送即可*/
    console.log("0")
    const phoneId = req.query.phoneId;
    console.log(phoneId,99999)
    // 先去你的codeList集合当中查找是否给该手机号发送过短信
    db.findOne("codeList",{
        phoneId
    },function (err,codeInfo) {
        console.log(11111);
        // 发送过短信
        if(codeInfo){
            let t = Date.now()-codeInfo.sendTime;
            if(t>60*10000000){                               //验证码过期时间
                sendCode(phoneId,function (obj) {
                    if(obj.ok === 1){
                        db.updateOne("codeList",{
                            phoneId
                        },{
                            $set:{
                                code:obj.code,
                                sendTime:Date.now()
                            }

                        },function (err,results) {
                            help.json(res,1,"发送成功");
                        })
                    }else help.json(res);
                })
            }else{
                res.json({
                    ok:-2,
                    msg:"时间未到",
                    timer:Math.ceil((60*10000000-t)/1000)// 距离下次发送还差多少时间
                })
            }
        }else{
            // 未发送过短信
            sendCode(phoneId,function (obj) {
                if(obj.ok === 1){
                    db.insertOne("codeList",{
                        phoneId,
                        code:obj.code,
                        sendTime:Date.now()
                    },function (err) {
                        help.json(res,1,"发送成功")
                    })
                }else help.json(res);
            })
        }
    })
 })


app.listen(90,function () {
    console.log("success")
})
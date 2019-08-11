const express = require("express");
const help = require("./module/help");
const db = require("./module/db");
const bodyParser = require("body-parser")
const fs = require("fs");
const jwt = require("./module/jwt")
const app = express();
const upPic = require("./module/upPic")
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.static(__dirname+"/upload"))
app.use(bodyParser.json())

app.get("/getClassify", function (req, res) {
    fs.readFile(__dirname + "/data/classify.json", function (err, data) {
        const infoList = JSON.parse(data);
        res.json({
            ok: 1,
            infoList
        })
    })

})

app.get("/getMvList",function(req,res){
    console.log(1111)
    fs.readFile(__dirname+"/data/mvList.json",function(err,data){
        const mvList = JSON.parse(data);
        console.log(222,data)
        res.json({
            ok:1,
            mvList
        })

    })
})


/*app.post("/login",function (req,res) {
    setTimeout(()=>{
        const {admin,pwd} = req.body;  //获取用户账号、密码
        db.findOne("adminList",{
            admin,
            pwd:help.md5(pwd)
        },function (err,adminInfo) {
            if(adminInfo){
                db.insertOne("adminLog",{
                    admin,
                    loginTime:Date.now()
                },function (err) {
                    res.json({
                        ok:1,
                        msg:"登录成功",
                        admin,
                        token:jwt.encode(admin)
                    })
                })
            }else{
                help.json(res)
            }
        })
    },2000)
})
app.all("*",function (req,res,next) {
    const token = req.headers.authorization;
    const info = jwt.decode(token);
    if(info.ok < 1){
        res.json({
            ok:-2,
            msg:info.msg
        })
    }else{
        next();
    }

})
app.get("/adminLog",function (req,res) {
        let indexPage = req.query.pageIndex;
        let admin = req.query.admin;
        let whereObj = {};
        if(admin){
            whereObj = {
                admin:new RegExp(admin)
            }
        }
        db.count("adminLog",whereObj,function (count) {
            const limit = 3;
            let sumPage = Math.ceil(count/limit);
            if(indexPage >= sumPage) indexPage = sumPage;
            if(indexPage <= 1) indexPage = 1;
            if(sumPage <= 1) sumPage = 1;
            db.find("adminLog",{
                limit,
                skip:(indexPage-1)*limit,
                whereObj,
                sortObj:{
                    loginTime:-1
                }
            },function (err,adminLogList) {
                res.json({
                    ok:1,
                    adminLogList,
                    params:{
                        indexPage,
                        sumPage,
                    }
                })
            })
        })
})
app.get("/token",function (req,res) {
    res.json({
        ok:1,
        msg:"验证成功"
    })
})
app.delete("/adminLog/:id",function (req,res) {
   const  id = req.params.id;
    db.deleteOneById("adminLog",id,function (err) {
        if(err){
            res.json({
                ok:-1,
                msg:"删除失败"
            })
        }else{
            res.json({
                ok:1,
                msg:"删除成功"
            })
        }
    })
})

app.post("/addShopType",function (req,res) {
    upPic(req,"shopTypePic",function (obj) {
        db.insertOne("shopTypeList",{
            shopTypeName:obj.params.shopTypeName,
            shopTypePic:obj.params.newPicName,
            addTime:Date.now()
        },function (err,results) {
            help.json(res,1,"成功")
        })
    })
})

app.get("/shopTypeList",function (req,res) {
    let indexPage = req.query.pageIndex/1 || 1;
    db.count("shopTypeList",{},function (count) {
        let pageNum = 2

        let sumPage = Math.ceil(count/pageNum);
        if(sumPage<1) sumPage=1;
        if(indexPage<1) indexPage=1;
        if(indexPage>sumPage) indexPage=sumPage;

        db.find("shopTypeList",{
            limit:pageNum,
            skip: (indexPage-1)*sumPage,
            sortObj: {
                addTime: -1
            }
        },function (err,shopTypeList) {
            res.json({
                ok:1,
                info:{
                    indexPage,
                    sumPage,
                },
                shopTypeList
            })
        })
    })
})

/!*
****************************************shop********************************************
 *!/
app.get("/allShopTypeList",function (req,res) {
    db.find("shopTypeList",{
        sortObj:{
            addTime:-1
        }
    },function (err,shopTypeList) {
        res.json({
            ok:1,
            shopTypeList
        })
    })
})

app.post("/addShop",function (req,res) {
    upPic(req,"shopPic",function (obj) {
        const id = obj.params.shopTypeId;
        db.findOneById("shopTypeList",id,function (err,shopTypeInfo) {
            db.insertOne("shopList",{
                shopName:obj.params.shopName, //
                shopPic:obj.params.newPicName,
                shopTypeId:obj.params.shopTypeId,// ObjectId  mongodb.ObjectId()
                shopTypeName:shopTypeInfo.shopTypeName,
                addTime:Date.now()
            },function (err) {
                    help.json(res,1,"添加成功")
            })
        })
    })
})

app.get("/shopList",function (req,res) {
    let indexPage = req.query.pageIndex/1;
    db.count("shopList",{},function (count) {
        let pageNum = 2
        let sumPage = Math.ceil(count/pageNum);
        if(sumPage<1) sumPage=1;
        if(indexPage<1) indexPage=1;
        if(indexPage>sumPage) indexPage = sumPage;

        db.find("shopList",{
            limit:pageNum,
            skip:(indexPage-1)*pageNum,
            sortObj:{
                addTime:-1
            }
        },function (err,shopList) {
            res.json({
                ok:1,
                shopList,
                pageInfo:{
                    indexPage,
                    sumPage,
                }
            })
        })
    })
})

//根据店铺的类别ID，获取店铺列表
app.get("/shopList/:shopTypeId",function (req,res) {
    db.find("shopList",{
        sortObj:{
            addTime:-1
        },
        whereObj: {
            shopTypeId: req.params.shopTypeId
        }
    },function (err,shopList) {
        res.json({
            ok:1,
            shopList
        })
    })
})

app.post("/addGoodsType",function (req,res) {
    db.findOneById("shopList",req.body.shopId,function (err,info) {
        const shopName = info.shopName
        db.findOneById("shopTypeList",req.body.shopTypeId,function (err,type) {
            const shopTypeName = type.shopTypeName
                db.insertOne("goodTypeList",{
                    ...req.body,
                    ...{
                            shopName,
                            shopTypeName,
                            addTime:Date.now()
                        }
                },function (err,info) {
                    res.json({
                        ok:1,
                        info
                    })
                })
        })
    })
})

app.get("/getGoodsTypeList",function (req,res) {
    let indexPage = req.query.pageIndex/1;
    db.count("goodTypeList",{},function (count) {
        let pageNum = 2
        let sumPage = Math.ceil(count/pageNum);
        if(sumPage<1) sumPage=1;
        if(indexPage<1) indexPage=1;
        if(indexPage>sumPage) indexPage = sumPage;

        db.find("goodTypeList",{
            limit:pageNum,
            skip:(indexPage-1)*pageNum,
            sortObj:{
                addTime:-1
            }
        },function (err,goodTypeList) {
            res.json({
                ok:1,
                goodTypeList,
                pageInfo:{
                    indexPage,
                    sumPage,
                }
            })
        })
    })
})

app.get("/getAllGoodsTypeList",function (req,res) {
    db.find("goodTypeList",{},function (err,getAllGoodsTypeList) {
        res.json({
            ok:1,
            getAllGoodsTypeList
        })
    })
})

app.get("/getGoodsList",function (req,res) {
    db.find("goodsList",{},function (err,goodsList) {
        res.json({
            ok:1,
            goodsList
        })
    })
})*/



// 获取歌手类别
app.get("/singer",function(req,res){
    fs.readFile(__dirname+"/data/singerType.json",function(err,result){
        const singerType = JSON.parse(result);
        res.json({
            ok: 1,
            singerType
        })
    })
});

// // 获取歌手列表
// app.get("/kugou/mb.slist",function(req,res){
//     console.log(2323);
//     res.json({
//         ok:1,
//         artistList
//     })
// });















app.listen(90,function () {
    console.log("success")
});
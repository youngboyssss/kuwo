const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/kugou",proxy({
        target:"http://qukudata.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kugou":""
        }
    }))

    app.use("/kuwo",proxy({
        target:"http://kbangserver.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kuwo":""
        }
    }))

    app.use("/kuwos",proxy({
        target:"http://nplserver.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kuwos":""
        }
    }))


    // app.get("/xixi",function (req,res) {
    //     console.log(2222222222);
    //     res.json({
    //         ok:1
    //     })
    // })
}
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    console.log(1111111);
    app.use("/kugou",proxy({
        target:"http://qukudata.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kugou":""
        }
    }))
    // app.get("/xixi",function (req,res) {
    //     console.log(2222222222);
    //     res.json({
    //         ok:1
    //     })
    // })
}
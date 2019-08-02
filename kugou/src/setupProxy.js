const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    console.log(1111111);
    app.use("/lagou",proxy({
        target:"https://m.lagou.com",
        changeOrigin:true,
        pathRewrite:{
            "^/lagou":""
        }
    }))
    // app.get("/xixi",function (req,res) {
    //     console.log(2222222222);
    //     res.json({
    //         ok:1
    //     })
    // })
}
const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/kugou",proxy({
        target:"http://artistlistinfo.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kugou":""
        }
    }));
    app.use("/songlist",proxy({
        target:"http://search.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/songlist":""
        }
    }));

};

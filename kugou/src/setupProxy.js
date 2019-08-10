const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/kugouu",proxy({
        target:"http://search.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kugouu":""
        }
    }))
    app.use("/kugou",proxy({
        target:"http://qukudata.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kugou":""
        }
    }))

    app.use("/kuwo",proxy({
        target:"http://artistlistinfo.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kuwo":""
        }
    }))

    app.use("/songlist",proxy({
        target:"http://search.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/songlist":""
        }
    }));

    app.use("/kuwoo",proxy({
        target:"http://kbangserver.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kuwoo":""
        }
    }))

    app.use("/kuwos",proxy({
        target:"http://nplserver.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kuwos":""
        }
    }))

    //请求每首歌的图片
    app.use("/kuwoc",proxy({
        target:"http://mobile.kuwo.cn",
        changeOrigin:true,
        pathRewrite:{
            "^/kuwoc":""
        }
    }))

}
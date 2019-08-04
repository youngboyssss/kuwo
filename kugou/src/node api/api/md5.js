const md5 = require("md5")
let passWord = "123456";
let str = "#@%#%$^@#"
//颜料 盐料
console.log(md5(passWord+str));
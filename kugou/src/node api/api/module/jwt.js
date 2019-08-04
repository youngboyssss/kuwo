const jwt = require("jwt-simple");
const key = "(&&)(*&^&^%&^)(*(_)(*_)"
module.exports = {
    encode(){
        return jwt.encode({
            adminName:"admin",
            exp:Date.now()+10*60*1000
        },key)
    },
    decode(token){
        try {
            const info = jwt.decode(token,key)
            if(info.exp > Date.now()){
                return{
                    ok:1,
                    msg:"成功"
                }
            }else{
                return {
                    ok:-1,
                    msg:"过期"
                }
            }
        }catch(err){
            return {
                ok:-2,
                msg:"解析错误"
            }
        }
    }
}
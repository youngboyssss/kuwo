import axios from "axios";
import positionType from "../../actionType/position"
const upPosition = function (payload) {
    return {
        type:positionType.UP_POSITION,
        payload
    }
}
export default {
    searchPositionList(){
        return async (dispatch)=>{
            const data = await axios.get("/search.json?city=全国&positionName=千锋&pageNo=1&pageSize=15");
            console.log(11111,data);
        }
    },
    getListmore(pageIndex=1){
        return async (dispatch)=>{
           const data = await  axios.get("listmore.json?pageNo="+pageIndex+"&pageSize=15");
           console.log(2222,data);
           dispatch(upPosition(data.content.data.page.result))
                // .then(data=>{
                //     this.setState({
                //         result:[...this.state.result,...data.content.data.page.result]
                //     })
                // })
        }
    }
}
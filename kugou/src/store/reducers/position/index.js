import initState from "../../state/postion"
import postionType from "../../actionType/position"
export default function (state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === postionType.UP_POSITION){
        state.positionList = [...state.positionList,...payload]
    }
    return state;
}
import React from "react";

export default class GetMore extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pn:0
        }
        console.log(5555555555,this.props);
    }
    render(){
        return(
            <span className={"pullUpLabel"} >
                <p style={{cursor:"pointer"}} onClick={()=>this.props.zyh_getArtistList(++this.state.pn)}>加载更多...</p>
            </span>
        )
    }
}
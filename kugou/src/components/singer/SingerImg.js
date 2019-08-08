import React,{Component} from "react";
export default class SingerImg extends Component{
    constructor(props){
        super(props);
        console.log(66666666,this.props);
    }

    render(){

        return (
            <div className="singerImg">
                <img id="filter" style={{width: "375px", height: "130px"}}
                     src={"http://img4.kwcdn.kuwo.cn/star/starheads/"+this.props.location.state.pic} alt=""/>
                <span className="singerMinImg">
                        <img style={{width: "90px", height: "90px", borderRadius: "2px"}}
                             src={"http://img4.kwcdn.kuwo.cn/star/starheads/"+this.props.location.state.pic} alt=""/>
                    </span>
            </div>
        )
    }



}
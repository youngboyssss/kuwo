import React from "react";

export default class PlayTit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            context:""
        }
    }
    componentWillMount() {
        // console.log(55555555,this.props);
        if(this.props.match.params.name){
            this.setState({
                context:this.props.match.params.name
            })
        }else{
            this.setState({
                context:this.props.location.state.name
            })
        }

    }

    render() {
        return (
            <div className={"playTit"}>
                <a href="javascript:;" className={"back"} onClick={()=>{
                    this.props.history.go(-1)
                }}><img
                    src="http://image.kuwo.cn/mpage/html5/2015/tuijian/back.png" width="100%"/></a>
                <span className={"backTex"} id={"phbtextid"}>{this.state.context}</span>
                <a href="javascript:;" className={"seachBtn"} onClick={()=>{
                    this.props.push("/search");
                }}><img
                    src="http://image.kuwo.cn/mpage/html5/2015/tuijian/seach.png" width="100%"/></a>
            </div>
        )
    }
}



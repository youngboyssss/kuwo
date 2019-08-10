import React from "react";
import axios from "axios";

export default class PlayTit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            context:"",
            artistinfo:{}
        };
        console.log(999,this.state)
    }

    render() {
        return (
            <div className={"zyh_playTit"}>
                <a href="javascript:;" className={"back"} onClick={()=>{
                        this.props.history.go(-1)
                }}><img
                    src="http://image.kuwo.cn/mpage/html5/2015/tuijian/back.png" width="100%"/></a>
                <span className={"backTex"} id={"phbtextid"}>{(this.props.match.params.name)?this.props.match.params.name:this.state.artistinfo.name}</span>
                <a href="javascript:;" className={"seachBtn"} onClick={()=>{
                    this.props.history.push("/search");
                }}><img
                    src="http://image.kuwo.cn/mpage/html5/2015/tuijian/seach.png" width="100%"/></a>
            </div>
        )
    }

    async zyh_getArtistInfo(pn=0) {
        const data = await axios.get("/songlist/r.s?stype=artistinfo&artistid="+this.props.match.params.id);
        // 将字符串转换成对象（不能用JSON.parse）
        const list = eval("("+data.data+")");
        this.setState({
            // 数组拼接
            artistinfo:{...this.state.artistinfo,...list},
        });
    }

    componentDidMount() {
        this.zyh_getArtistInfo();
    }
}



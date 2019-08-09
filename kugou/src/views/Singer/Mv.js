import React,{Component} from "react";
import SingerImg from "../../components/singer/SingerImg";
import axios from "axios";
import {
    withRouter
} from "react-router-dom";
import PlayTit from "../../components/singer/PlayTit";


class Mv extends Component{
    constructor(props){
        super(props);
        this.state={
            mvlist:[]
        }
    }
    render(){
        return (
            <div>
                <PlayTit {...this.props}></PlayTit>
                <SingerImg {...this.props}></SingerImg>
                <div className={"SingerMvList"}>
                {
                    this.state.mvlist.map((v,i)=>{
                        return(
                            <div className={"SingerMv"} key={i}>
                                <p className={"SingerMvImg"}>
                                    <img src={"http://img4.kwcdn.kuwo.cn:81/wmvpic/"+v.pic} alt=""/>
                                </p>
                                <p className={"SingerMvContext"}>
                                    <span id={"zyh_mvname"} dangerouslySetInnerHTML={{__html:v.name}}></span>
                                    <span id={"zyh_mvcontext"} dangerouslySetInnerHTML={{__html:v.artist}}></span>
                                </p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }

    async zyh_getMv() {
        const data = await axios.get("/songlist/r.s?pn=0&rn=30&stype=mvlist",
            {
                params: {
                    "artistid": this.props.location.state.id
                }
            });
        const list = eval("(" + data.data + ")");
        this.setState({
            mvlist: this.state.mvlist.concat(list.mvlist)
        });
        console.log(this.state.mvlist)
    }

    componentDidMount() {
        this.zyh_getMv();
    }
}

export default withRouter(Mv);
import React,{Component} from "react";
import SingerImg from "../../components/singer/SingerImg";
import axios from "axios";
import {
    withRouter
} from "react-router-dom";
import PlayTit from "../../components/singer/PlayTit";
import SongListNav from "./SongList";


class Mv extends Component{
    constructor(props){
        super(props);
        this.state={
            mvlist:[]
        }
        console.log(1,this.state.mvlist);
    }
    // componentWillMount() {
    //     this.zyh_getMv();
    //     console.log(2,this.state.mvlist);
    //
    // }

    render(){
        console.log(3,this.state.mvlist);

        return (
            <div>
                <PlayTit {...this.props}></PlayTit>
                <SingerImg {...this.props}></SingerImg>
                <SongListNav {...this.props}></SongListNav>

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
        const data = await axios.get("/songlist/r.s?pn=0&rn=30&stype=mvlist&artistid="+this.props.match.params.id);
        const list = eval("(" + data.data + ")");
        this.setState({
            mvlist: this.state.mvlist.concat(list.mvlist)
        });
        // console.log(this.props.location.state.id,this.props.match.params.id)
        console.log(4,this.state.mvlist);

    }

    componentDidMount() {
        console.log(5,this.state.mvlist);

        this.zyh_getMv();
    }
}

export default withRouter(Mv);
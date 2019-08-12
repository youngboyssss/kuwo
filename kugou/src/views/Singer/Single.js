import React, {Component} from "react";
import axios from "axios";
import {BrowserRouter as Router, withRouter} from "react-router-dom";
import SingerImg from "../../components/singer/SingerImg";
import PlayTit from "../../components/singer/PlayTit";
import SongListNav from "./SongList";
import pubsub from "pubsub-js";

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoList: [], //gongge
            isShow_Audio: true,
            zyh_songList: []
        }
        this.songList = [];
        this.html = <a className={"zyh_mv"} href="javascript:;" onClick={this.zyh_playMv.bind(this)} >
            <img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singMv.png" alt=""/>
        </a>

    }

    playMv(id) {
        this.props.history.push("/mvplay/" + id);
    }

    return() {
        this.props.history.go(-1);
    }

    //定义一个事件 接收this
    onRef = (ref) => {
        this.Child = ref;
    }

    play(i) {       //调用子组件方法
        pubsub.publish("player", {a: this.state, b: this.onRef, c: this.songList})
        localStorage.infoList = JSON.stringify(this.state)
        localStorage.songList = JSON.stringify(this.songList)

        setTimeout(() => {
            this.Child.play(i)
        }, 500)
    }

    isShow() {
        pubsub.publish("player", {a: this.state, b: this.onRef, c: this.songList})
        localStorage.infoList = this.state
        localStorage.songList = this.songList

        setTimeout(() => {
            this.Child.isShow();
        }, 500)
    }

    async componentDidMount() {
        let that = this
        let musiclist = null;
        let data = await this.axios.get("/kuwoo/ksong.s?from=pc&fmt=json&type=bang&pn=0&rn=50&data=content&id=" + this.props.match.params.id + "&r=20190807.js")
        musiclist = data.data.musiclist ? data.data.musiclist : []
        if (!musiclist.length) {
            data = await this.axios.get("/kuwos/pl.svc?op=getlistinfo&pid=" + this.props.match.params.id + "&pn=0&rn=30&vipver=1&keyset=pl2012&identity=kuwo&r=1565231235511")
            musiclist = data.data.musiclist ? data.data.musiclist : []
            //this.props.history.go(-1)
        }
        for (let i = 0; i < musiclist.length; i++) {
            this.songList.push(musiclist[i].id)
        }
        this.setState({
            infoList: data.data
        })

    }


    render() {
        // function Mv(){ //定义元素变量
        //     return(
        //         <a className={"zyh_mv"} href="javascript:;">
        //             <img data-mid="232323" src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singMv.png" alt=""/>
        //         </a>
        //     )
        // }

        return (
            <div>
                <PlayTit {...this.props}></PlayTit>
                <SingerImg {...this.props}></SingerImg>
                <SongListNav {...this.props}></SongListNav>

                <div className={"zyh_singList"}>
                    {
                        this.state.infoList.map((v, i) => {
                            return (
                                <div className={"singBox"} key={i} onClick={this.play.bind(this, i)}>
                                    <div className={"singTex"}>
                                        <div className={"singTexUp"}>
                                            <p className={"singTexUp2"}>
                                                {v.name.replace(/&nbsp;/g, " ")}
                                                {/*<img src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/singDt.png"} style={{width:"30px",height:"30px;"}}/>*/}
                                                <span className={"spanSing"}>
                                        {/*<img src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/singWs.png"} style={{width:"30px",height:"30px;"}} alt=""/>*/}
                                    </span>
                                            </p>
                                        </div>
                                        <p className={"singName"}>
                                            {v.artist.replace(/&nbsp;/g, " ")}
                                            {v.album ? "-" + v.album.replace(/&nbsp;/g, " ") : ""}
                                        </p>
                                    </div>
                                    <a href="javascript:;" style={{textAlign: "right", lineHeight: "40px",}}>
                                        <img style={{width: "18px"}}
                                             src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singDom.png" alt=""/>
                                    </a>
                                    {/*{*/}
                                        {/*v.mp4sig1 === "0" || v.mp4sig2 === "0"?"":this.html*/}
                                    {/*}*/}

                                    {/*判断当前单曲是否有mv，如果有显示mv图标*/}
                                    {
                                        v.mp4sig1 === "0"|| v.mp4sig2 === "0" ? "":<a className={"zyh_mv"} href="javascript:;" onClick={this.zyh_playMv.bind(this)}>
                                            <img data-mid={v.musicrid} src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singMv.png" alt=""/>
                                        </a>
                                    }

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    // 点击mv图标，播放mv（阻止冒泡）
    zyh_playMv(e){
        e.stopPropagation();
        let mid = e.target.dataset.mid;
        this.props.history.push("/mvdetailplay/"+mid);
                // console.log(666666666,this);
    }

    async zyh_getSongList() {
        const data = await axios.get("/songlist/r.s?stype=artist2music&pn=0&rn=30&artistid=" + this.props.match.params.id);
        const musiclist = eval("(" + data.data + ")");
        this.setState({
            zyh_songList: this.state.zyh_songList.concat(musiclist.musiclist),
            infoList: this.state.infoList.concat(musiclist.musiclist)
        })
        console.log(99887766,this.state);
    }

    componentDidMount() {
        this.zyh_getSongList();
    }
}

export default withRouter(Single);
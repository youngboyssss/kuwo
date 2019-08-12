import React from "react";
import pubsub from 'pubsub-js'
import {
    Link,
    withRouter
} from "react-router-dom"

class MvPlay extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            songInfo:[],
            mvMusicList:[],
            isShow:true,
            src:"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtnstop.png",
            isShow_Audio: false
        }
    }

    //定义一个事件 接收this
    onRef = (ref)=>{
        this.Child = ref;
    }

    render(){
        return (
            <div className={"mvPlayBox"}>
                <div>
                    <div className={"MvPlayTit"}>
                        <img onClick={this.goBack.bind(this)} className={"backArrow2"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/back.png"}/>
                        <span className={'playTit2'}>{this.state.songInfo.name}-{this.state.songInfo.artist}</span>
                        <Link to={"/searchList"}><img className={'mvPlaySearch'} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/seach.png"}/></Link>
                    </div>

                </div>
                <div className={"contentWrap"}>
                    <div className={"mvkongdiv"}></div>
                    <div className={"videoPlay"}>
                        <video className={"videoId"} id={"videoId"} controls={"controls"} autoPlay={"autoPlay"} src={"http://antiserver.kuwo.cn/anti.s?rid=MUSIC_"+this.props.match.params.id+"&response=res&format=mp4&type=convert_url"}></video>
                    </div>
                    <div className={"playBtn"}>
                        <p id={"ctrlBtn"} onClick={this.changeBtn.bind(this)}>
                            <img className={"playStopBtn"} id={"playStopBtn"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtnstop.png"}/>
                            <img className={"playStartBtn"} id={"playStartBtn"} style={{display:"none"}} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtn.png"}/>
                        </p>

                        <img className={"playDownloadBtn"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/mvdownbtn.png"}/>
                    </div>
                    <p className={"playtex"}>相关推荐</p>
                    <div className={"listWrap"}>
                        {
                            this.state.mvMusicList.map((item,index)=>{
                                return (
                                    <Link to={"/mvdetailplay/"+item.id} key={index} className={"defaultList"}>
                                        <div>
                                            <img className={'bkimg'} src={"http://img3.kwcdn.kuwo.cn/wmvpic/"+item.mvpic}/>
                                            <img className={'playBtn2'} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/playHover.png"}/>
                                            <p className={"titName"}><span>{item.name}</span></p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className={"mvDownloadApp"}>
                        安装APP观看更多高清
                        <img className={'mvDownloadArrow'} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/downLoadRi.png"}/>
                    </div>
                </div>
            </div>
        )
    }
    // 返回键
    goBack(){
        this.props.history.go(-1)
    }
    // 播放按钮
    changeBtn(){
        let videL = document.getElementById("videoId");
        let playStopBtn = document.getElementById("playStopBtn");
        let playStartBtn = document.getElementById("playStartBtn");
        let ctrlBtn = document.getElementById("ctrlBtn");
        ctrlBtn.onclick = function () {
            if (videL.paused) {
                videL.play();
                playStopBtn.style.display = "block";
                playStartBtn.style.display = "none";
            } else {
                videL.pause();
                playStartBtn.style.display = "block";
                playStopBtn.style.display = "none";
            }
        }
    }
    componentDidMount(){
        this.axios.get("http://mobile.kuwo.cn/mpage/html5/getmvinfo?mid="+this.props.match.params.id+"")
            .then(({data})=>{
                this.setState({
                    songInfo:data.songinfo,
                    mvMusicList:data.musiclist,
                    isShow:data.musiclist.isshow,
                })
            })
        //pubsub.publish("player",{a:this.state,b:this.onRef,c:this.songList})
        pubsub.publish("player",{a:{
                infoList: localStorage.infoList,
                isShow_Audio: false
            },b:this.onRef,c:localStorage.songList})

        setTimeout(()=>{
            this.Child.playStopOrHide()
        },500)
    }

    componentWillUnmount() {
        //pubsub.publish("player",{a:{isShow_Audio: true}})
        pubsub.publish("player",{a:{
                infoList: JSON.parse(localStorage.infoList),
                isShow_Audio: true
            },b:this.onRef,c:JSON.parse(localStorage.songList)})

    }


}
export default withRouter(MvPlay)
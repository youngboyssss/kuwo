import React from "react";
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
            isShow:0
        }
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
                    <div className={"kongdiv"}></div>
                    <div className={"videoPlay"}>
                        <video className={"videoId"} controls={"controls"} autoPlay={"autoPlay"} src={"http://antiserver.kuwo.cn/anti.s?rid=MUSIC_"+this.props.match.params.id+"&response=res&format=mp4&type=convert_url"}></video>
                    </div>
                    <div className={"playBtn"}>
                        {/*<p className={'mvBtn1'} onClick={()=>this.state.isShow?<img className={"playStopBtn"} id={'playStopBtn'} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtnstop.png"}/>:<img className={"playStartBtn"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtn.png"}/>}></p>*/}
                        <img className={"playStopBtn"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtnstop.png"} onClick={this.ctrlmvbtn.call(this,this.state.isShow)}/>
                        <img className={"playStartBtn"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtn.png"}/>
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
                                            <p><span>{item.name}</span></p>
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
    ctrlmvbtn(isShow){
        console.log(123456)
        isShow=1
    }
    componentDidMount(){
        this.axios.get("http://mobile.kuwo.cn/mpage/html5/getmvinfo?mid="+this.props.match.params.id+"")
            .then(({data})=>{
                // console.log(888,data)
                this.setState({
                    songInfo:data.songinfo,
                    mvMusicList:data.musiclist,
                    isShow:data.musiclist.isshow,
                })
            })
    }
}
export default withRouter(MvPlay)
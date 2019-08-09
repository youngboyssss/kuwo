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
            isShow:true,
            src:"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtnstop.png",
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
                    <div className={"mvkongdiv"}></div>
                    <div className={"videoPlay"}>
                        <video className={"videoId"} controls={"controls"} autoPlay={"autoPlay"} src={"http://antiserver.kuwo.cn/anti.s?rid=MUSIC_"+this.props.match.params.id+"&response=res&format=mp4&type=convert_url"}></video>
                    </div>
                    <div className={"playBtn"}>
                        <img className={"playStopBtn"} style={{display:this.state.display}} onClick={this.ctrlmvbtn.bind(this,this.state.isShow)} src={this.state.src}/>
                        {/*<img className={"playStartBtn"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtn.png"}/>*/}
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
    ctrlmvbtn(isShow,src){
       console.log(111111)
        this.setState({
            isShow:!this.state.isShow,
            src:'http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtn.png'
        })
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
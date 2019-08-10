import React from "react";
import {
    Link,
    withRouter
} from "react-router-dom"

class MvDetailPlay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            detailMusicList:[]
        }
    }
    render(){
        return (
            <div>
                <div className={"detailTit"}>
                    <img onClick={this.comeBack.bind(this)} className={"backArrow3"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/back.png"}/>
                    <span className={'playTit3'}>{this.state.title}</span>
                    <Link to={"/searchList"}><img className={'mvSearch3'} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/seach.png"}/></Link>
                </div>
                <div className={"contentWrap"}>
                    <div className={"mvkongdiv"}></div>
                    <div className={"videoPlay"}>
                        <video className={"videoId"} controls={"controls"} autoPlay={"autoPlay"} src={"http://antiserver.kuwo.cn/anti.s?rid=MUSIC_"+this.props.match.params.id+"&response=res&format=mp4&type=convert_url"}></video>
                    </div>
                    <div className={"playBtn"}>
                        <img className={"playStopBtn"} id={'playStopBtn'}  src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtnstop.png"}/>
                        {/*<img className={"playStartBtn"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtn.png"}/>*/}
                        <img className={"playDownloadBtn"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/mvdownbtn.png"}/>
                    </div>
                    <p className={"playtex"}>相关推荐</p>
                    <div className={"listWrap"}>
                        {
                            this.state.detailMusicList.map((item,index)=>{
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
    comeBack(){
        this.props.history.go(-1)
    }
    componentDidMount(){
        this.axios.get("http://mobile.kuwo.cn/mpage/html5/getmvinfo?mid="+this.props.match.params.id+"")
            .then(({data})=>{
                // console.log(999,data)
                this.setState({
                    title:data.title,
                    detailMusicList:data.musiclist
                })
            })
    }
}
export default withRouter(MvDetailPlay);
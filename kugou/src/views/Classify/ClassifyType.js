import React from "react";
import pubsub from 'pubsub-js'
import {
    withRouter,
    Link
} from "react-router-dom"

class ClassifyType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            infoList: [], //gongge
            isShow_Audio: true
        }
        this.songList=[]
    }

    // <Link to={"/mvplay/"+item.id} key={index}>
    playMv(id,e){
        this.props.history.push("/mvplay/"+id);
        e.nativeEvent.stopImmediatePropagation()
        // 阻止合成事件间的冒泡
        e.stopPropagation()
    }

    return(){
        this.props.history.go(-1);
    }

    //定义一个事件 接收this
    onRef = (ref)=>{
        this.Child = ref;
    }

    play(i,e) {       //调用子组件方法
        e.nativeEvent.stopImmediatePropagation()
        // 阻止合成事件间的冒泡，不会往最外层的div的test方法冒了，如果不加这句代码，就会冒泡至外层div，执行test方法。
        e.stopPropagation()
        pubsub.publish("player",{a:this.state,b:this.onRef,c:this.songList})
        localStorage.infoList = JSON.stringify(this.state.infoList)
        localStorage.songList = JSON.stringify(this.songList)

        setTimeout(()=>{
            this.Child.play(i)
        },500)
    }

    isShow(){
        pubsub.publish("player",{a:this.state,b:this.onRef,c:this.songList})
        localStorage.infoList = JSON.stringify(this.state.infoList)
        localStorage.songList = JSON.stringify(this.songList)

        setTimeout(()=>{
            this.Child.isShow();
        },500)
    }

    async componentDidMount() {
        let that = this
        let musiclist = null;
        let data = await this.axios.get("/kuwoo/ksong.s?from=pc&fmt=json&type=bang&pn=0&rn=50&data=content&id=" + this.props.match.params.id + "&r=20190807.js")
        musiclist = data.data.musiclist?data.data.musiclist:[]
        if(!musiclist.length){
            data = await this.axios.get("/kuwos/pl.svc?op=getlistinfo&pid="+this.props.match.params.id+"&pn=0&rn=30&vipver=1&keyset=pl2012&identity=kuwo&r=1565231235511")
            musiclist = data.data.musiclist?data.data.musiclist:[]
            //this.props.history.go(-1)
        }
        for(let i = 0 ; i < musiclist.length ; i++ ){
            this.songList.push(musiclist[i].id)
        }
        this.setState({
            infoList: data.data
        })
    }

    render() {
        if (!this.state.infoList.musiclist) return <div className={"wait"}>{<this.component.Wait/>}</div>
        return (<>
            <div className={"classifyTypeBoy"}>
                <div className={"listHeader"}>
                    <div className={"listHeader_cen"}>
                        <div className={"listHeader_left"}>
                            <span className="iconfont" onClick={this.return.bind(this)}>&#xe738;</span>
                            <div>{this.state.infoList.leader}</div>
                            <div></div>
                        </div>
                        <span className="iconfont on">&#xe615;</span>
                    </div>
                </div>
                <div className={"playInfo"}>
                    <div className={"playInfo_1"}>
                        <span><img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/defpic_240.png" alt=""/></span>
                        <p>{this.state.infoList.info}</p>
                    </div>
                    <span className={"play"}><img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singPlay.png"
                                                  alt="" onClick={this.isShow.bind(this)}/></span>
                </div>
                <div className={"totalSongList"}>
                    {
                        this.state.infoList.musiclist.map((v, i) => {
                            const arr = v.params?v.params.split(";"):v.param.split(";")
                            return (
                                <div className={"songList"} key={i} onClick={this.play.bind(this,i)}>
                                    <div className={"songList_1"}>
                                       {/*<span><img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singDt.png" alt=""/></span>*/} <p>{arr[0]}<img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singWs.png"
                                                        alt=""/></p>
                                        <p>{v.artist + "-" + v.album}</p>
                                    </div>
                                    <div className={"songList_2"}>
                                        <p style={{display:v.mp4sig1?"block":"none"}} onClick={this.playMv.bind(this,v.id)}><img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singMv.png" alt=""/></p>
                                        <p ><img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singDom.png"/></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className={"audio_div"}></div>
                </div>
            </div>

        </>)
    }
}

export default withRouter(ClassifyType)
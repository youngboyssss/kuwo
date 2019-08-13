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

    playMv(id){
        this.props.history.push("/mvplay/"+id);
    }

    return(){
        this.props.history.go(-1);
    }

    //定义一个事件 接收this
    onRef = (ref)=>{
        this.Child = ref;
    }

    play(i) {       //调用子组件方法
        pubsub.publish("player",{a:this.state,b:this.onRef,c:this.songList})

        setTimeout(()=>{
            this.Child.play(i)
        },500)
    }

    isShow(){
        pubsub.publish("player",{a:this.state,b:this.onRef,c:this.songList})
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
jumpSearch(){
		this.props.history.push("/searchList")
	}
    render() {
        if (!this.state.infoList.musiclist) return <div className={"wait"}>{<this.component.Wait/>}</div>
        return (<>
            <div className={"classifyTypeBoy"}>
                <div className={"listHeader"}>
                    <div className={"listHeader_left"}>
                        <span className="iconfont" onClick={this.return.bind(this)}>&#xe738;</span>
                        <div>抖音2019年7月</div>
                        <div></div>
                    </div>
                    <span className="iconfont on" onClick={this.jumpSearch.bind(this)}>&#xe615;</span>
                </div>
				<div className="xixi"></div>
                <div className={"playInfo"}>
                    <div className={"playInfo_1"}>
                        <span><img src="http://img1.kwcdn.kuwo.cn/star/userpl2015/81/23/1564994688854_182253281_150.jpg" alt=""/></span>
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
                                        <p><img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singMv.png" alt=""/></p>
                                        <p style={{display:v.mp4sig1?"block":"none"}} onClick={this.playMv.bind(this,v.id)}><img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singDom.png"/></p>
                                    </div>
                                </div>
                            )
                        })
                    }
					<div className="xixi"></div>
                </div>
            </div>
        </>)
    }
}

export default withRouter(ClassifyType)
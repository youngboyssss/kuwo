import React from 'react';
import axios from 'axios'
import pubsub from 'pubsub-js'
export default class SearchSong extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            abslist:[],
            all:"",
            start:0,
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
        localStorage.infoList = JSON.stringify(this.state)
        localStorage.songList = JSON.stringify(this.songList)

        setTimeout(()=>{
            this.Child.play(i)
        },500)
    }

    isShow(){
        pubsub.publish("player",{a:this.state,b:this.onRef,c:this.songList})
        localStorage.infoList = this.state
        localStorage.songList = this.songList

        setTimeout(()=>{
            this.Child.isShow();
        },500)
    }

    async componentDidMount() {
        let that = this;
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
        return(
            <div>
                <div>
                    {
                        this.state.abslist.map((v,i)=>{
                            return(
                                <div style={{textAlign:"left"}} key={i} className={"sl_searchsong"} onClick={this.play.bind(this,i)}>
                                    <div dangerouslySetInnerHTML={{__html:v.NAME}}></div>
                                    <div dangerouslySetInnerHTML={{__html:v.ARTIST}}></div>
                                    <img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singDom.png" alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    async searchsing(value){
        this.props.history.push("/searchdetails");
        const data = await axios.get("/kugouu/r.s?all="+value+"&ft=music&client=kt&pn=0&rn=1000&rformat=json&encoding=utf8")
            .then(data=>{
                let list = eval("("+data.data+")");
                this.setState({
                    abslist:list.abslist,
                    infoList:[...list.abslist,...this.state.abslist],
                });
            })
    }
    // this.props.histroy.push("/mv"+"this.value")
    // this.props.match.pramas
    componentWillMount() {
        pubsub.subscribe("one",(name,a)=>{
            this.searchsing(a.value);
        })
    }
}
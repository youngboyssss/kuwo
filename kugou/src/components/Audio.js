import React,{
    Component
} from "react";

import {
    withRouter
} from "react-router-dom"

class Audiog extends Component{
    constructor(props) {                        //构造器：创建父元素传来的数据是通过继承得到的
        super(props)
        this.songList=[]
        this.audio = ""
        this.songInfo = ""
        this.timer = ""
        this.play_Control=false
        this.songIndex = 0
        console.log("constructor",props)
    }

    playMv(id){
        this.props.history.push("/mvplay/"+id);
    }

    isShow(){
        let that = this

        that.refs.songTime.innerHTML = cu_minute + ":" + cu_second + "-" + du_minute + ":" + du_second
        var cu_minute="00", cu_second="00", du_minute="00", du_second="00"
				const n = that.props.infoList.musiclist?that.props.infoList.musiclist:that.props.infoList
        that.refs.songName.innerHTML = n[that.songIndex].name

        that.refs.songTime.innerHTML = cu_minute + ":" + cu_second + "-" + du_minute + ":" + du_second
        du_minute = parseInt(that.audio.duration / 60).toString().padStart(2, "0")
        that.refs.songTime.innerHTML = cu_minute + ":" + cu_second + "-" + du_minute + ":" + du_second
        du_second = parseInt(that.audio.duration - du_minute * 60).toString().padStart(2, "0")
        cu_minute = parseInt(that.audio.currentTime / 60).toString().padStart(2, "0")
        cu_second = parseInt(that.audio.currentTime - cu_minute * 60).toString().padStart(2, "0")
        that.refs.songTime.innerHTML = cu_minute + ":" + cu_second + "-" + du_minute + ":" + du_second
        that.refs.songTime.innerHTML = cu_minute + ":" + cu_second + "-" + du_minute + ":" + du_second
        this.play_Control = true;
        this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png"
        that.refs.songTime.innerHTML = cu_minute + ":" + cu_second + "-" + du_minute + ":" + du_second
        setTimeout( async ()=>{
            this.computingTime.call(this);
            this.play_Control = false;
            this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png"
            that.songIndex = 0
            that.audio.src = "http://antiserver.kuwo.cn/anti.s?format=aac|mp3&rid=MUSIC_" + that.props.songList[that.songIndex] + "&type=convert_url&response=res";
            that.audio.load()
            that.audio.play()
            const data = await that.axios.get("/kuwoc/mpage/html5/songinfoandlrc?mid="+that.props.songList[that.songIndex])
        },1000)
    }

    playControl(){                            //控制样式  播放状态
        this.play_Control = !this.play_Control
        this.play_Control?this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png":this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png"
        this.play_Control?this.audio.pause():this.audio.play()
        //this.computingTime.call(this);
        if(this.play_Control){
            clearInterval(this.timer)
        }
    }

    computingTime(){
        let that = this;
        var cu_minute, cu_second, du_minute, du_second
        //that.play_Control?that.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png":that.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png"
        clearInterval(that.timer);
				const n = that.props.infoList.musiclist?that.props.infoList.musiclist:that.props.infoList
        that.refs.songName.innerHTML = n[that.songIndex].name    //--------

        that.timer = setInterval(() => {
            du_minute = parseInt(that.audio.duration / 60).toString().padStart(2, "0")
            du_second = parseInt(that.audio.duration - du_minute * 60).toString().padStart(2, "0")
            cu_minute = parseInt(that.audio.currentTime / 60).toString().padStart(2, "0")
            cu_second = parseInt(that.audio.currentTime - cu_minute * 60).toString().padStart(2, "0")
            that.refs.songTime.innerHTML = cu_minute + ":" + cu_second + "-" + du_minute + ":" + du_second
            if(that.audio.duration == that.audio.currentTime){
                clearInterval(that.timer)
            }
        }, 50)
    }

    async play(i) {
        let that = this;                 //复制this
        this.play_Control = true;       //控制播放按钮样式
        this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png"
        that.songIndex = i;
        console.log("that.play",that.props)
		console.log(that.props.infoList,"uuuuuuuuuuuuuuuuuuuuuuuuuu")
		const n = that.props.infoList.musiclist?that.props.infoList.musiclist:that.props.infoList
        that.audio.src = "http://antiserver.kuwo.cn/anti.s?format=aac|mp3&rid=MUSIC_" + n[that.songIndex].id + "&type=convert_url&response=res";

        that.audio.load()
        that.computingTime.call(this)
        that.audio.play()
        setTimeout(()=>{
            that.play_Control = false;
            that.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png"
        },1000)
        //请求每首歌的图片
        const {data} = await that.axios.get("/kuwoc/mpage/html5/songinfoandlrc?mid="+n[that.songIndex].id)
        that.refs.songPic.src = "http://img1.kwcdn.kuwo.cn/star/albumcover/"+(eval("("+data+")").songinfo.artpic)
    }

    switchSong(){                        //切换歌曲
        let that = this
        this.play_Control = true;
        this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png"
        this.songIndex = ++this.songIndex;
        if(this.songIndex >= this.props.songList.length) this.songIndex = 0
        that.computingTime.call(this);
        setTimeout(async ()=>{
            this.play_Control = false;
            this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png"
            that.audio.src = "http://antiserver.kuwo.cn/anti.s?format=aac|mp3&rid=MUSIC_" + that.props.songList[that.songIndex] + "&type=convert_url&response=res";
            that.audio.load()
            that.computingTime.call(this);
            that.audio.play()
            const {data} = await that.axios.get("/kuwoc/mpage/html5/songinfoandlrc?mid="+that.props.songList[that.songIndex])
            that.refs.songPic.src = "http://img1.kwcdn.kuwo.cn/star/albumcover/"+eval("("+data+")").songinfo.artpic
        },1000)

    }

    componentWillReceiveProps(nextProps, nextContext) {
        //组件创建时传递 不允许此钩子
        console.log("componentWillReceiveProps",this)
        if(!nextProps.infoList){
            this.playControl.call(this)
            nextProps = this.props
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(!nextProps.infoList){
            nextProps = this.props
        }
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("componentWillUpdate",this)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate",prevProps,this)
    }

    componentWillUnmount() {       //组件销毁   停止播放音乐   清空定时器
        this.audio.pause()
        clearInterval(this.timer)
        console.log("componentWillUnmount")
    }

    async componentDidMount() {
        console.log("componentDidMount")
        let that = this    //复制this
        this.audio  = document.createElement("audio");  //创建audio
        this.audio.autoplay = "ture";    //自动播放
        this.audio.preload = "auto"
        document.body.appendChild(this.audio);    //把audio放入body中
        this.audio.onended=function () {          //播放完毕钩子---自动播放下一首
            this.play_Control = true;
            this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png";
            clearInterval(that.timer);
            that.switchSong.call(that)
        }
        if(!this.props.isShow_Audio){
            this.playControl.call(this)
            return null;
        }
        this.props.onRef(this)   //给父元素提供this   供子元素调用this
    }

    render(){
        console.log("render")
        this.props.onRef?this.props.onRef(this):console.log()
        return (
            <div className={"audio"} style={{display:this.props.isShow_Audio? "block":"none"}}>
                <div className={"audio_body"}>
                    <div className={"audio_body_1"}>
                        <p><img src="http://img1.kwcdn.kuwo.cn/star/albumcover/240/65/11/3291181677.jpg" alt="" ref={"songPic"}/>
                        </p>
                        <div>
                            <p ref={"songName"}></p>
                            <p ref={"songTime"}></p>
                        </div>
                    </div>
                    <div className={"audio_body_2"} >
                        <p><img ref={"playControl"} src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png" alt="" onClick={this.playControl.bind(this)}/></p>
                        <p><img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/next1.png" alt="" onClick={this.switchSong.bind(this)}/></p>
                        <p><img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/playlist.png" alt=""/></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Audiog)
import React,{Component} from "react";
export default class Audio extends Component{

    constructor(props) {
        super(props)
        this.state = {
            infoList: [],
            isShow_Audio: false
        }
        this.songList=[]
        this.audio = ""
        this.songInfo = ""
        this.timer = ""
        this.play_Control=false
        this.songIndex = 0
    }

    playMv(id){
        this.props.history.push("/mvplay/"+id);
    }

    isShow(){
        let that = this
        that.refs.songTime.innerHTML = cu_minute + ":" + cu_second + "-" + du_minute + ":" + du_second
        this.setState({
            isShow_Audio:true
        })
        var cu_minute="00", cu_second="00", du_minute="00", du_second="00"
        that.refs.songName.innerHTML = that.state.infoList.musiclist[that.songIndex].name
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
        setTimeout(()=>{
            this.computingTime.call(this);
            this.play_Control = false;
            this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png"
            that.songIndex = 0
            that.audio.src = "http://antiserver.kuwo.cn/anti.s?format=aac|mp3&rid=MUSIC_" + that.songList[that.songIndex] + "&type=convert_url&response=res";
            that.audio.load()
            that.audio.play()
        },1000)
    }

    playControl(){
        this.play_Control = !this.play_Control
        this.play_Control?this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png":this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png"
        this.play_Control?this.audio.pause():this.audio.play()
        this.computingTime.call(this);
        if(this.play_Control){
            clearInterval(this.timer)
        }
    }

    computingTime(){
        let that = this;
        var cu_minute, cu_second, du_minute, du_second
        //that.play_Control?that.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png":that.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png"
        clearInterval(that.timer);
        that.timer = setInterval(() => {
            that.refs.songName.innerHTML = that.props.infoList.musiclist[that.songIndex].name
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

    play(i) {
        let that = this;
        this.play_Control = true;
        this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png"
        this.setState({
            isShow_Audio:true
        })
        that.songIndex = i;
        that.audio.src = "http://antiserver.kuwo.cn/anti.s?format=aac|mp3&rid=MUSIC_" + that.props.infoList.musiclist[that.songIndex].id + "&type=convert_url&response=res";
        that.audio.load()
        that.computingTime.call(this)
        that.audio.play()
        setTimeout(()=>{
            that.play_Control = false;
            that.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png"
        },1000)
    }

    switchSong(){
        let that = this
        this.play_Control = true;
        this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png"
        this.songIndex = ++this.songIndex;
        if(this.songIndex >= this.songList.length) this.songIndex = 0
        that.computingTime.call(this);
        setTimeout(()=>{
            this.play_Control = false;
            this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/stop1.png"
            that.audio.src = "http://antiserver.kuwo.cn/anti.s?format=aac|mp3&rid=MUSIC_" + that.songList[that.songIndex] + "&type=convert_url&response=res";
            that.audio.load()
            that.computingTime.call(this);
            that.audio.play()
        },1000)
    }

    componentWillUnmount() {
        this.audio.pause()
        clearInterval(this.timer)
    }

    async componentDidMount() {
        let that = this
        this.props.onRef(this)
        const data = await this.axios.get("/kuwoo/ksong.s?from=pc&fmt=json&type=bang&pn=0&rn=50&data=content&id=" + this.props.match.params.id + "&r=20190807.js")
        data.data.musiclist = data.data.musiclist?data.data.musiclist:[]

        if(!data.data.musiclist.length){
            console.log("第二次请求")
            const data = await this.axios.get("/kuwos/pl.svc?op=getlistinfo&pid="+this.props.match.params.id+"&pn=0&rn=30&vipver=1&keyset=pl2012&identity=kuwo&r=1565231235511")
            console.log(data,"ppppppppppppppppppppp")
            data.data.musiclist = data.data.musiclist?data.data.musiclist:[]
            console.log(data.data.musiclist)
            //this.props.history.go(-1)
        }

        for(let i = 0 ; i < data.data.musiclist.length ; i++ ){
            this.songList.push(data.data.musiclist[i].id)
        }
        this.setState({
            infoList: data.data
        })

        //this.audio = new Audio('source.mp3');
        this.audio  = document.createElement("audio");
        this.audio.autoplay = "ture";
        this.audio.preload = "auto"
        document.body.appendChild(this.audio);
        this.audio.onended=function () {
            this.play_Control = true;
            this.refs.playControl.src="http://image.kuwo.cn/mpage/html5/2015/tuijian/newplay.png"
            clearInterval(that.timer)
            that.switchSong.call(that)
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps,nextContext,this.props,"ppppppppppp")
    }





    render(){
        return (
            <div className={"audio"} style={{display:this.state.isShow_Audio? "block":"none"}}>
                <div className={"audio_body"}>
                    <div className={"audio_body_1"}>
                        <p><img src="http://img1.kwcdn.kuwo.cn/star/albumcover/240/65/11/3291181677.jpg" alt=""/>
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
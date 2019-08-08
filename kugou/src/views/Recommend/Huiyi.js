
import React from "react";
import "../../assets/css/recommendDetail.css"
export default class Huiyi extends React.Component{
	constructor(props) {
	   super(props);
	 }
	goBack(){
		window.history.go(-1)
	}
	
    render(){
	
        return (
            <div>
			<div className="heard-h"></div>
					<div className="heder-1">
						<a><img className="back" onClick={this.goBack.bind(this)} src="http://image.kuwo.cn/mpage/html5/2015/tuijian/back.png"/></a>
						<span className="context-1">回忆的沙漏(10周年版-GEM...)</span>
						<a><img  className="search-1" src="http://image.kuwo.cn/mpage/html5/2015/tuijian/seach.png"/></a>
					</div>
					<div className="Huiyi">
						<video className="Hvedio" autoPlay controls  src="http://antiserver.kuwo.cn/anti.s?rid=MUSIC_57569623&response=res&format=mp4&type=convert_url"></video>
					</div>
					<div className="PlayOfnone">
						<p> <img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtn.png"/></p>
						<p> <img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/hsmvbtnstop.png"/></p>
						<p> <img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/mvdownbtn.png"/></p>
					</div>	
					<div className="singerPics">
						
					</div>
					<div style={{height:"50px"}}></div>
             </div>
        )	
    }
	
	componentDidMount(){
	
	}
	
}

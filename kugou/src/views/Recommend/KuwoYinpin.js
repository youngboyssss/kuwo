import axios from "axios"
import React from "react";
import "../../assets/css/recommendDetail.css"
import {
    Route,
    Link,
    BrowserRouter as Router,
	withRouter
} from "react-router-dom"
class Xiangqing extends React.Component{
	constructor(props) {
	   super(props);
	   console.log(this.props.match.params.id,3333333)
	   this.state={
		   id:"",
		 data:{
				 info:"",
				musiclist:[], 
			 }
		 }
	   }
	
	goBack(){
		window.history.go(-1)
	}
	jumpSearch(){
		this.props.history.push("/searchList")
	}
    render(){
	
        return (
            <div>
			
				<div style={{height:"50px"}}></div>
				
				<div className="singerPic">
					<span><img src="http://img4.kwcdn.kuwo.cn/star/userpl2015/95/40/1561351924618_254780995_700.jpg"/></span>
					<div className="box-1">
						<p className="quan">{this.state.data.info}</p>
						<p className="bofang"><img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singPlay.png"/></p>
					</div>
				</div>
				<div className="heder-1">
					<a><img className="back" onClick={this.goBack.bind(this)} src="http://image.kuwo.cn/mpage/html5/2015/tuijian/back.png"/></a>
					<span className="context-1">酷我音乐调频</span>
					<a><img  className="search-1" src="http://image.kuwo.cn/mpage/html5/2015/tuijian/seach.png" onClick={this.jumpSearch.bind(this)}/></a>
				</div>
                {
					this.state.data.musiclist.map((v,i)=>{
						return(
						<div key={i} className="chagese">
						
							<div className="chagese-1">
								<div onClick={this.changpage.bind(this,v.id)}>
									<p className="Name-1"><img className="yinfu"src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singDt.png"/>{v.name} <img style={{width:"30px",height:"18px"}} src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singWs.png"/></p>
									<p className="artist-album">{v.artist}--{v.album}</p>
								</div>
								<div>
									<img  style={{width:"20px",height:"20px"}} src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singDom.png"/>
								</div>
							</div>
				
						</div>
							
						)
					})
					
				}
				<div className="singerPics">
					<audio controls autoPlay src={"http://antiserver.kuwo.cn/anti.s?format=aac|mp3&rid=MUSIC_"+this.state.id+"&type=convert_url&response=res"}></audio>
				</div>
 				<div style={{height:"50px"}}></div>
             </div>
        )	
    }
	changpage(id){
		console.log(id)
		this.setState({
			id:id
		})
	
	}
	jiazai(){
		axios.get("http://nplserver.kuwo.cn/pl.svc?op=getlistinfo&pid=1013437783&pn=0&rn=30&vipver=1&encode=utf-8&keyset=pl2012&identity=kuwo")
				  
		  .then(data=>{
			  console.log(data)
			 this.setState({
				 data:data.data,
				 
			 },()=>{
				 console.log(this.state.data.musiclist,9999)
			 })
		  })
	}
	componentDidMount(){
		this.jiazai()
		
	}
}
export default withRouter (Xiangqing)
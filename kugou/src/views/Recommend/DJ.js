import axios from "axios"
import React from "react";
import "../../assets/css/recommendDetail.css"
import Xdj from "../../views/Recommend/Xdj"
import {
    Route,
    Link,
    BrowserRouter as Router,
	withRouter
} from "react-router-dom"
 
 class DJ extends React.Component{
	constructor(props) {
	   super(props);
	   this.state={
		 child:[],
		 fn:0
		 }
	   }
	
	goBack(){
		window.history.go(-1)
	}
	jumpSearch(){
		this.props.history.push("/searchList")
	}
    render(){
		console.log(this.state.child)

        return (
            <div>
				<div style={{height:"50px"}}></div>
				<div className="heder-1">
					<a><img className="back" onClick={this.goBack.bind(this)} src="http://image.kuwo.cn/mpage/html5/2015/tuijian/back.png"/></a>
					<span className="context-1">DJ</span>
					<a><img  className="search-1" src="http://image.kuwo.cn/mpage/html5/2015/tuijian/seach.png" onClick={this.jumpSearch.bind(this)}/></a>
				</div>
					<div>
						{
							this.state.child.map((v,i)=>{
								return(
								<Link  key={i} to={"/XdJ/"+v.sourceid}>
									<div key={i} className="tList">
										<p className="timg"><img  src={v.pic}/></p>
										<li className="ttext">
											<p className="ttext-1">{v.disname}</p>
											<p className="ttext-2">{v.info}</p>
											<p className="ttext-2">{v.params}</p>
										</li>
									</div>
								</Link>
								)
							})
						}
					</div>
				<div className="jiazai" onClick={this.jiazai.bind(this,this.state.fn++)}>拼命加载中</div>
 				<div style={{height:"50px"}}></div>
             </div>
        )	
    }
	jiazai(fn){
		 this.axios.get("/kugou/q.k?op=query&cont=ninfo&node=28&pn="+fn+"&rn=15&fmt=json&src=mobile")
				.then(data=>{
					this.setState({
						child:[...this.state.child,...data.data.child],
						
						
					},function(){
						console.log(this.state.child)
					})
				})
	}
	componentDidMount(){
		this.jiazai()
	}
	
}
export default withRouter(DJ)
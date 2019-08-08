
import React from "react";
import "../../assets/css/recommendDetail.css"
export default class Wu extends React.Component{
	constructor(props) {
	   super(props);
	 }
	goBack(){
		window.history.go(-1)
	}
	
    render(){
	
        return (
            <div>
				<div className="heder-1">
					<a><img className="back" onClick={this.goBack.bind(this)} src="http://image.kuwo.cn/mpage/html5/2015/tuijian/back.png"/></a>
					<span className="context-1">悟-吴亦凡</span>
					<a><img  className="search-1" src="http://image.kuwo.cn/mpage/html5/2015/tuijian/seach.png"/></a>
				</div>
               
				<div className="singerPics">
					
				</div>
 				<div style={{height:"50px"}}></div>
             </div>
        )	
    }
	
}

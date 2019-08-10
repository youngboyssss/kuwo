import React from "react";
import {
    Route,
    Link,
    NavLink,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";
class SearchTitle extends React.Component{
    constructor(props){
        super(props);
        this.backClick = this.backClick.bind(this);
        }
    render() {
        return(
            <div className={"searchLogo"}>
                <img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/back.png" onClick={this.backClick}/>
                <span>搜索</span>
            </div>
        )
    }
    backClick(){
        this.props.history.go(-1);
    }
}
export default withRouter(SearchTitle);
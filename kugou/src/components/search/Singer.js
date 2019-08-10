import React from "react";
import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom"


export default class SearchList extends React.Component{
    render(){
        return (
            <div>
                <NavLink style={{color:"gray"}} exact={false} activeStyle={{color:"red"}} to={"/"} >首页</NavLink>|
                <NavLink style={{color:"gray"}} activeStyle={{color:"red"}} to={"/search"}>搜索</NavLink>|
                <NavLink style={{color:"gray"}} activeStyle={{color:"red"}} to={"/my"}>我的</NavLink>|
                <NavLink style={{color:"gray"}} activeStyle={{color:"red"}} to={"/my"}>我的</NavLink>
            </div>
        )
    }
}
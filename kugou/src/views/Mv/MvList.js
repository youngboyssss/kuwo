import React from "react";
import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom"


export default class MvList extends React.Component{
    render(){
        return (
            <div>
                MvList
                <Link to={"/mvplay"}>跳转Mv播放</Link>
            </div>
        )
    }
}
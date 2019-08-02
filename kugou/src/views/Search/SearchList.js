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
                SearchList
                <Link to={"/mvplay"}>跳转Mv播放</Link>
            </div>
        )
    }
}
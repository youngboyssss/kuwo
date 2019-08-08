import React from "react";
import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom"


export default class ClassifyList extends React.Component{
    render(){
        return (
            <div>
                ClassifyList
                <Link to={"/mvplay"}>跳转Mv播放</Link>
            </div>
        )
    }
}
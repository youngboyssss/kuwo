import React from "react";
import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom"


export default class ArtistList extends React.Component{
    render(){
        return (
            <div>
                ArtistList
                <Link to={"/mvplay"}>跳转Mv播放</Link>
            </div>
        )
    }
}
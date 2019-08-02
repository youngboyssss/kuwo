import React from "react";
import {
    Route
} from "react-router-dom"
import MyNav from "../../router/MyNav";

export default class Singer extends React.Component{
    render(){
        return (
            <div>
                歌手二级路由
                {this.props.children?<MyNav navList={this.props.children}></MyNav>:null}
            </div>
        )

    }
}
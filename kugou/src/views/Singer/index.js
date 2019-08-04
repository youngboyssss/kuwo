import React from "react";
import {
    Route
} from "react-router-dom"
import MyNav from "../../router/MyNav";

export default class Singer extends React.Component{
    render(){
        return (
            <div className={"singer"}>
                歌手二级路由
              {/*<MyNav navList={this.props.children} sbNav={"sbNav"}></MyNav>*/}
            </div>
        )

    }
}
import React from "react";
import {
    Route
} from "react-router-dom"
import MyNav from "../../router/MyNav";

export default class Mv extends React.Component{
    render(){
        return (
            <div>
                MV二级路由
                {this.props.children?<MyNav navList={this.props.children}></MyNav>:null}
            </div>
        )

    }
}
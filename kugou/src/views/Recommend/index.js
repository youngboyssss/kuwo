import React from "react";
import {
    Route,
    BrowserRouter as Router
} from "react-router-dom"
import MyNav from '../../router/MyNav'

export default class Recommend extends React.Component{
    render(){
        return (
            <div>
                推荐二级路由
                {this.props.children?<MyNav navList={this.props.children}></MyNav>:null}
            </div>
        )

    }
}
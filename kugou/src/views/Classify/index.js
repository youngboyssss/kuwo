import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import MyNav from '../../router/MyNav'
export default class Classify extends React.Component{
    render(){
        return (
            <div>
                分类二级路由
                {this.props.children?<MyNav navList={this.props.children}></MyNav>:null}
            </div>
        )
    }
}
import React from "react";
import {
    Route,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom"
import MyNav from '../../router/MyNav'

export default class Search extends React.Component{
    render(){
        console.log(this.props.children,999998888)
        return (
            <div>
                推荐二级路由
                {this.props.children?<MyNav navList={this.props.children}></MyNav>:null}
            </div>
        )

    }
}

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
                {this.props.children?<MyNav navList={this.props.children}></MyNav>:null}
            </div>
        )
    }
}
import React from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router
} from "react-router-dom"
import MyNav from '../../router/MyNav'

export default class Ranking extends React.Component{
    render(){

        return (
            <div>
                <div className={"ranking"}></div>
            </div>
        )

    }
}
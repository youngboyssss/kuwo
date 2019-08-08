import React from "react";
import {
    withRouter,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import MyNav from '../../router/MyNav'

class Recommend extends React.Component{
    constructor(props){
        super(props)
    }
    a(a){
        console.log(  this.props.history)
        this.props.history.push('/mvlist/'+a)
    }
    render(){

        return (
            <div>
                <div className={"recommend"}></div>
                <div className={"a"}></div>
            </div>

        )
    }
}

export default withRouter(Recommend)
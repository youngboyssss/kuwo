import React from "react";
import {withRouter} from 'react-router-dom' ;
import {

    Route,
    BrowserRouter as Router
} from "react-router-dom"
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
            <div className={"recommend"}>
                <div></div>
                <div >
                    77777ppppppp
                    <div style={{width:"100px",height:"100px",background:"red"}} onClick={this.a.bind(this,1)}>

                    </div>

                    <div style={{width:"100px",height:"100px",background:"red",marginTop:"20px"}} onClick={this.a.bind(this,2)}>

                    </div>

                    <div style={{width:"100px",height:"100px",background:"red",marginTop:"20px"}} onClick={this.a.bind(this,5)}>

                    </div>

                    {/*<MyNav navList={this.props.children} sbNav={"true"} sbNav={"sbNav"}></MyNav>*/}
                </div>
            </div>
        )
    }
}

export default withRouter(Recommend)
import React from 'react';
import './App.css';
import pubsub from 'pubsub-js'
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    withRouter
} from "react-router-dom"
import GuardRouter from "./router/GuardRouter"
import router from "./router"
class App extends  React.Component{
    constructor(){
        super();
        this.state={
            a:null,
            b:null
        }
    }

    componentWillMount(){
        pubsub.subscribe("player",(msgName,{a,b,c})=>{
            console.log("触发订阅")
            this.setState({
                a,
                b,
                c
            })
        })
    }

    render(){
        return (
            <div>
                <Router basename={router.basename} forceRefresh={router.forceRefresh}>
                    {
                        router.routers.map((v,i)=>{        //配置所有的一级路由
                            return (
                                <div key={i}>
                                    <Route key={i} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}/>}></Route>
                                </div>

                            )
                        })
                    }
                    {this.state.a?<this.component.Audio {...this.state.a} onRef={this.state.b} songList={this.state.c}/>:(<div></div>)}
                </Router>
            </div>
        )
    }
}

export default App;

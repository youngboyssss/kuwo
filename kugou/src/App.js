import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom";
import GuardRouter from "./router/GuardRouter";
import router from "./router";


class App extends  React.Component{
    render(){
        return (
                <Router basename={router.basename} forceRefresh={router.forceRefresh}>
                    {
                        router.routers.map((v,i)=>{        //配置所有的一级路由
                            return (
                                <Route key={i} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}/>}></Route>
                            )
                        })
                    }
                </Router>
        )


    }

}

export default App;

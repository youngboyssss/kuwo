import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom"
import GuardRouter from "./router/GuardRouter"
import router from "./router"




class App extends  React.Component{

     componentDidMount() {

    }



    render(){
        function jsonp1(data) {
            console.log(data,99999)
        }
        return (
            <div className="App">
                <Router basename={router.basename} forceRefresh={router.forceRefresh}>
                    {
                        router.routers.map((v,i)=>{        //配置所有的一级路由
                            return (
                                <Route key={i} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}/>}></Route>
                            )
                        })
                    }
                </Router>


                {
                    <script src="http://nplserver.kuwo.cn/pl.svc?op=getlistinfo&encode=utf-8&keyset=pl2012&identity=kuwo&vipver=1&pid=2832229718&pn=0&rn=9&_=1564710366471&callback=jsonp1"></script>
                }
            </div>
        )


    }

}

export default App;

import React from 'react';
import pubsub from 'pubsub-js'
import router from "./";
import {
    NavLink,
    withRouter
} from "react-router-dom"
import MyNav from "./MyNav"    //引入导航栏
class GuardRouter extends React.Component{           //配置所有NavLink

    componentWillMount(){
        document.title=this.props.meta.title || "酷我音乐";   //修改标题
    }

    render(){
        let children = [...(this.props.children || [])]   //一级路由的children是否存在
        let meta = {...(this.props.meta || {})};  //一级路由的meta标签是否为空
        return (
           <div className={"App"}>
               {meta.isFooter?<MyNav navList={router.routers}></MyNav>:null}   {/*一级路由判断是否加导航栏*/}
               <this.props.component/>           {/*写入该组件，并传入孩子内容*/}
           </div>
        )
    }
}
export  default withRouter(GuardRouter);
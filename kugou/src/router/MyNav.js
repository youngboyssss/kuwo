import React from 'react';
import router from "./";
import {
    NavLink
} from "react-router-dom"
class MyNav extends React.Component{
    render(){
        let meta = {...(this.props.navList.meta || {})};
        if(!this.props.navList){
            this.props.navList = []
        }
        return (
            <nav>
                {
                    this.props.navList.map((v,i)=>{     //遍历navLis
                        if(!v.meta.isFooter) return null;
                        return (
                            <NavLink key={i} exact={v.exact} to={v.to} style={{color:"gray"}} activeStyle={{color:"red"}}>{v.context}</NavLink>
                        )
                    })
                }
            </nav>
        )
    }
}
export  default MyNav;
import React from 'react';
import {NavLink} from "react-router-dom"

class MyNav extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let meta = {...(this.props.navList.meta || {})};
        if (!this.props.navList) {
            this.props.navList = []
        }
        return (
            <div className={this.props.sbNav?"sbNav":"yxl"}>
                    {
                        this.props.navList.map((v, i) => {    //遍历navList
                            if (!v.meta.isFooter) return null;
                            if (v.context === "搜索") {
                                return (<div className={"search"} key={i}>
                                    <NavLink key={i} exact={v.exact} to={v.to} style={{color: "#333"}}
                                             activeStyle={{color: "#2095dd",borderBottom: "2px solid #2095dd"}}><v.font />
                                    </NavLink><span className={"logo"}></span>
                                    <NavLink to={"/login"} className={"login"}>登录</NavLink>
                                    </div>)
                            }
                        })
                    }
                    <div className={this.props.sbNav?"sbLink":"link"}>
                        {this.props.navList.map((v, i) => {
                            if (!v.meta.isFooter) return null;
                            if (v.context !== "搜索") {
                                return (<NavLink key={i} exact={v.exact} to={v.to} style={{color: "#333"} }
                                                 activeStyle={{color: "#2095dd",borderBottom: "2px solid #2095dd"}}>
                                    {v.compontent1?<v.compontent1/>:v.context}
                                </NavLink>)
                            }
                        })
                        }
                    </div>
            </div>
        )
    }
}

export default MyNav;
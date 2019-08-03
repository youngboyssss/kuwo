import React from 'react';
import {NavLink} from "react-router-dom"

class MyNav extends React.Component {
    render() {
        let meta = {...(this.props.navList.meta || {})};
        if (!this.props.navList) {
            this.props.navList = []
        }
        return (
            <div className={"yxl"}>
                    {
                        this.props.navList.map((v, i) => {
                            if (!v.meta.isFooter) return null;
                            if (v.context === "搜索") {
                                console.log(v.context,9999999)
                                return (<NavLink key={i} exact={v.exact} to={v.to} style={{color: "#333"}}
                                                 activeStyle={{color: "#2095dd",borderBottom: "2px solid #2095dd"}}><v.font />
                                </NavLink>)
                            }
                        })
                    }
                    <div className={"link"}>
                        {this.props.navList.map((v, i) => {
                            if (!v.meta.isFooter) return null;
                            if (v.context !== "搜索") {
                                return (<NavLink key={i} exact={v.exact} to={v.to} style={{color: "#333"}}
                                                 activeStyle={{color: "#2095dd",borderBottom: "2px solid #2095dd"}}>
                                    {v.context}
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
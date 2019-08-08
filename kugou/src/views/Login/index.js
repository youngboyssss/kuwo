import React from "react";
import {
    Link,
    Route,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom"
import MyNav from '../../router/MyNav'

export default class Login extends React.Component{
    render(){
        return (
            <div className={"yxl_login"}>
                <div>
                    <h3>登录拉钩</h3>
                    <span className={"register"}><Link to={"/register"}>注册</Link></span>
                </div>
                <form action="" className={"login_form"}>
                    <input type="text" placeholder={"请输入已验证的手机号或邮箱"}/>
                    <input type="text" placeholder={"请输入密码"}/><br/>
                    <button className={"but"}>登录</button>
                </form>

               {/* <span className={"iphoneLogin"}>手机号登录</span>*/}
            </div>
        )

    }
}

import React from "react";
import Filters from "../../common/filters"
import {
    Link,
    Route,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom"
import MyNav from '../../router/MyNav'

class Register extends React.Component{
    constructor(){
        super()
        this.timer = null;
        this.state={
            id:"0086"
        }
    }
    sendCode(e){
        console.log(this.refs.phoneId.value,1111)
        this.axios.get("http://127.0.0.1/sendCode",{   //发送http请求
            params:{phoneId:this.refs.phoneId.value}
        }).then(({data})=>{
            console.log(data);    // 获取验证码信息
            if(data.ok === 1){
                let num = 5;
                this.timer = window.setInterval(()=>{
                    --num;
                    this.refs.vercode.value = num;
                    if(num <= 0 ){
                        clearInterval(this.timer)
                        this.refs.vercode.value = "获取验证码"
                    }

                },1000)
            }
            if(data.ok === -2){
                let num = data.timer;
                this.timer = window.setInterval(()=>{
                    --num;
                    this.refs.vercode.value = num;
                    if(num <= 0 ){
                        clearInterval(this.timer)
                        this.refs.vercode.value = "获取验证码"
                    }
                },1000)
            }
        })
        e.preventDefault();
    }

    login(e){
        console.log(this.refs.phoneId.value,this.refs.code.value,2222)
        this.axios.post("http://127.0.0.1/login",{    //发送手机号
            phoneId:this.refs.phoneId.value,         //发送验证码
            code:this.refs.code.value
        }).then(({data})=>{
            console.log(11111,data);
            if(data.ok === 1){
                localStorage.phoneId = data.phoneId;  //发送请求成功

                //this.$emit("update:index",0)          //成功跳转页面
            }else{
                alert(data.msg);
            }
        })
        e.preventDefault();
    }

    componentDidMount() {
        if(this.props.location.query){
            this.setState({
                id:this.props.location.query.id
            })
        }
    }

    render(){
        return (
            <div className={"yxl_register"}>
                <div>
                    <h3>注册拉钩</h3>
                    <span className={"register"}><Link to={"/login"}>登录</Link> </span>
                </div>
                <form action="" className={"login_form"}>
                    <p><Link to={"/areacode"}><div className={"a_code"}><span ref={"codeId"}>{this.state.id}</span> <div></div></div></Link><input type="text" ref={"phoneId"} placeholder={"请输入常用手机号"}/></p>
                    <p><input type="text" ref={"code"} placeholder={"请输入收到的验证码"}/><input type="button" ref={"vercode"} value={"获取验证码"} onClick={this.sendCode.bind(this)} className={"vcode_link"}/><br/></p>
                    <button className={"but"} onClick={this.login.bind(this)}>登录</button>
                </form>

            </div>
        )

    }
}

export default withRouter(Register)

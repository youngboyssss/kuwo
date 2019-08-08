import React from 'react';
import ReactDOM from 'react-dom';
import './assets/js/rem'
import './index.css';
import './assets/css/fonts.css'
import "./assets/css/Nav.css"
import "./assets/css/classify.css"
import "./assets/css/downloadAPP.css"
import "./assets/css/mv.css"
import "./assets/css/ranking.css"
import "./assets/css/recommend.css"
import "./assets/css/search.css"
import "./assets/css/singer.css"
import "./assets/css/classifylist.css"
import "./assets/css/classifyType.css"
import "./assets/css/login.css"
import "./assets/css/register.css"
import "./assets/css/areacode.css"
import App from './App';
import axios from "axios";
import * as serviceWorker from './serviceWorker';
import 'lib-flexible'
import config from './common/config'
import filters from './common/filters'
import store from "./store"
import component from "./components";
import {
    Provider
} from "react-redux";

component();     //组件

React.Component.prototype.config = config;
React.Component.prototype.filters = filters;  //过滤器
Object.assign(
        React.Component.prototype,
    {axios:axios}
    )

axios.interceptors.request.use(config=>{
     //config.url = "/kugou"+config.url;
     //console.log(config.url,999)
     return config;
})
axios.interceptors.response.use((data)=>{
    return data;
})
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

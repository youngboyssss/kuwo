import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/Nav.css"
import App from './App';
import axios from "axios";
import * as serviceWorker from './serviceWorker';
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
     //config.url = "/lagou/"+config.url;
     return config;
})
axios.interceptors.response.use(({data})=>{
    return data;
})
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

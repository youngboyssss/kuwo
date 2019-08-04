import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import MyNav from '../../router/MyNav'
export default class Classify extends React.Component{
    async componentDidMount() {
        const {data} =  await this.axios.get("http://127.0.0.1/getClassify")
        console.log(data,66666)
        if(data.ok == 1)
            this.data = data.infoList
    }

    render(){
        return (
            <div className={"classify"}>

            </div>
        )
    }
}
import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import MyNav from '../../router/DownloadAPP'
export default class DownloadAPP extends React.Component{
    render(){
        return (
            <div className={"downloadAPP"}>
                下载APP
                {/*{this.props.children?<MyNav navList={this.props.children } sbNav={"sbNav"}></MyNav>:null}*/}
            </div>
        )
    }
}
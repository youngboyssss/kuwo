import React from "react";
import {
    Route,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom"
import MyNav from '../../router/MyNav'

export default class Search extends React.Component{
    render(){
        return (
            <div>
                {/*<Route path={"/search"} exact component={}></Route>*/}
                {/*<Route path={"/search/"} component={Search}></Route>*/}
                {/*<Route path={"/search"} component={My}></Route>*/}
                {/*<Route path={"/search"} component={My}></Route>*/}
            </div>
        )

    }
}

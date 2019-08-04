import React from "react";
import {
    withRouter,
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom"


class MvList extends React.Component{
    a(a){
        console.log(  this.props.history)
        this.props.history.push('/ClassifyList/'+a)
    }

    render(){
        return (
            <div>
                MvList
                <div onClick={this.a.bind(this,)}>
                    666666666666666666
                </div>

                <div>
                    8888888
                </div>
                <Link to={"/mvplay"}>跳转Mv播放</Link>
            </div>
        )
    }
}
export default withRouter(MvList)
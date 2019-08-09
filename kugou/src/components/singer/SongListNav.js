import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom";
import Single from "../../views/Singer/Single";
import Mv from "../../views/Singer/Mv";
import Album from "../../views/Singer/Album";



class SongListNav extends React.Component{
    constructor(props){
        super(props);
        console.log(777777,this.props);
    }
    render(){
        return(
            <Router basename={"newh5"}>
                <div className={"singDom4"} id={"artopbtnallid"}>
                    <div className={"singLe5"}>

                        <NavLink exact={true} to={{
                            pathname:"/songlist",
                            state:{
                                id:this.props.location.state.id,
                                name:this.props.location.state.name,
                                pic:this.props.location.state.pic
                            }
                        }} activeStyle={{borderBottom: "2px solid #fff",cursor:"pointer"}} className={"singLea"}>单曲</NavLink>

                        <NavLink to={{
                            pathname:"/songlist/album",
                            state:{
                                id:this.props.location.state.id,
                                name:this.props.location.state.name,
                                pic:this.props.location.state.pic
                            }
                        }} activeStyle={{borderBottom: "2px solid #fff",cursor:"pointer"}} className={"singLea"}>专辑</NavLink>

                        <NavLink to={{
                            pathname:"/songlist/mv",
                            state:{
                                id:this.props.location.state.id,
                                name:this.props.location.state.name,
                                pic:this.props.location.state.pic
                            }
                        }} activeStyle={{borderBottom: "2px solid #fff",cursor:"pointer"}} className={"singLea"}>MV</NavLink>
                    </div>
                    <a href="javascript:;" className={"singPlay"} id={"artdqplayid"}>
                        <img style={{width:"33px"}} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/singPlay.png"} alt=""/>
                    </a>
                </div>

                <Route exact={true} path={"/songlist"} component={Single}></Route>
                <Route path={"/songlist/mv"} component={Mv}></Route>
                <Route path={"/songlist/album"} component={Album}></Route>
            </Router>

        )
    }
}

export default SongListNav;
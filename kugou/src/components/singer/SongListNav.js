import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom";
import Single from "../../views/Singer/Single";
import Mv from "../../views/Singer/Mv";
import Album from "../../views/Singer/Album";
import AlbumInfo from "../../views/Singer/AlbumInfo";
import PlayTit from "./PlayTit";



class SongListNav extends React.Component{
    constructor(props){
        super(props);
        console.log(777777,this.props);
    }
    render(){
        return(
            <>

                <div className={"singDom4"} id={"artopbtnallid"}>

                    <div className={"singLe5"}>
                        <NavLink exact={true} to={"/single/"+this.props.match.params.id} activeStyle={{borderBottom: "2px solid #fff",cursor:"pointer"}} className={"singLea"}>单曲</NavLink>

                        <NavLink to={"/album/"+this.props.match.params.id} activeStyle={{borderBottom: "2px solid #fff",cursor:"pointer"}} className={"singLea"}>专辑</NavLink>

                        <NavLink to={"/mv/"+this.props.match.params.id} activeStyle={{borderBottom: "2px solid #fff",cursor:"pointer"}} className={"singLea"}>MV</NavLink>
                    </div>
                    <a href="javascript:;" className={"singPlay"} id={"artdqplayid"}>
                        <img style={{width:"33px"}} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/singPlay.png"} alt=""/>
                    </a>
                </div>

                {/*<Route exact={true} path={"/single/:id"} component={Single}></Route>*/}
                {/*<Route exact={true} path={"/songlist/mv/:id"} component={Mv}></Route>*/}
                {/*<Route exact={true} path={"/songlist/album/:id"} component={Album}></Route>*/}
            </>

        )
    }
}

export default SongListNav;
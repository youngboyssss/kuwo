import React from 'react'
import SearchSong from './SearchSong'
import SearchMV from './SearchMV'
import SearchSinger from './SearchSinger'
import SearchAlbum from './SearchAlbum'
import pubsub from 'pubsub-js'
import {
    NavLink,
    Route,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";
import axios from 'axios';
import Title from './searchTitle'
class screachDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            abslist:{},
            all:""
        }
    }
    render() {
        return(
            <div>
                <Title></Title>
                <div className={"searchInput"}>
                    <input ref={"all"} type="text" placeholder={"歌手/歌名/歌词"}/>
                    <input type="button" onClick={this.search.bind(this)} value={"搜索"}/>
                </div>
                <div className={"searchSum"}>
                    {
                        <p>
                            找到{this.state.abslist.HIT}个结果，更多结果可下载APP查看
                        </p>
                    }
                </div>
                <Router>
                    <div className={"searchName"}>
                        <div className={"searchsong"}><NavLink exact style={{color:"#46b4e6",padding:"5px"}} to={"/searchdetails"}>歌曲</NavLink></div>
                        <div className={"searchmv"}><NavLink style={{color:"#46b4e6",padding:"5px"}} activeStyle={{borderBottom:"10px solid #46b4e6"}}  to={"/searchdetails/mv"}>MV</NavLink></div>
                        <div className={"searchsinger"}><NavLink style={{color:"#46b4e6",padding:"5px"}} activeStyle={{borderBottom:"3px solid #46b4e6"}}  to={"/searchdetails/singer"}>歌手</NavLink></div>
                        <div className={"searchalbum"}><NavLink style={{color:"#46b4e6",padding:"5px"}} activeStyle={{borderBottom:"3px solid #46b4e6"}}  to={"/searchdetails/album"}>专辑</NavLink></div>
                    </div>
                    <Route exact path={"/searchdetails"} component={SearchSong}></Route>
                    <Route path={"/searchdetails/mv"} component={SearchMV}></Route>
                    <Route path={"/searchdetails/singer"} component={SearchSinger}></Route>
                    <Route path={"/searchdetails/album"} component={SearchAlbum}></Route>
                </Router>
            </div>
        )
    }
    async search(){
        pubsub.publish("one",{value:this.refs.all.value})
        this.props.history.push("/searchdetails");
        const {data} = await axios.get("/kugouu/r.s?all="+this.refs.all.value+"&ft=music&client=kt&pn=0&rn=50&rformat=json&encoding=utf8")
                const list = eval("("+data+")");
                this.setState({
                    abslist:list
                })

    }
}

export default withRouter(screachDetails)
import React from 'react'
import SearchSong from './SearchSong'
import SearchMV from './SearchMV'
import SearchSinger from './SearchSinger'
import SearchAlbum from './SearchAlbum'
import {
    NavLink,
    Route,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom"
class screachDetails extends React.Component{
    constructor(){
        super()
    }

    go(){
        this.props.history.go(-1)
    }

    render() {
        return(
            <div>
                <div onClick={this.go.bind(this)}>我是搜索</div>
                <Router>
                    <NavLink exact style={{color:"gray",padding:"5px"}} activeStyle={{color:"red"}}  to={"/searchdetails"}>歌曲</NavLink>
                    <NavLink style={{color:"gray",padding:"5px"}} activeStyle={{color:"red"}}  to={"/searchdetails/mv"}>MV</NavLink>
                    <NavLink style={{color:"gray",padding:"5px"}} activeStyle={{color:"red"}}  to={"/searchdetails/singer"}>歌手</NavLink>
                    <NavLink style={{color:"gray",padding:"5px"}} activeStyle={{color:"red"}}  to={"/searchdetails/album"}>专辑</NavLink>

                    <Route exact path={"/searchdetails"} component={SearchSong}></Route>
                    <Route path={"/searchdetails/mv"} component={SearchMV}></Route>
                    <Route path={"/searchdetails/singer"} component={SearchSinger}></Route>
                    <Route path={"/searchdetails/album"} component={SearchAlbum}></Route>
                </Router>
            </div>
        )
    }
}

export default withRouter(screachDetails)
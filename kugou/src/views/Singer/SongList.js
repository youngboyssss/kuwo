import React from "react";
import axios from "axios";
import PlayTit from "../../components/singer/PlayTit";
import SingerImg from "../../components/singer/SingerImg";
import SongListNav from "../../components/singer/SongListNav";
import Single from "./Single";
import Mv from "./Mv";
import Album from "./Album";
import {
    withRouter
} from "react-router-dom";




class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            songList:[]
        }

    }

    render() {
        return (
            <div className={"songList"}>
                {/*<PlayTit {...this.props}></PlayTit>*/}
                <SongListNav {...this.props}></SongListNav>
                {/*<Single></Single>*/}
                {/*<Album></Album>*/}
                {/*<Mv></Mv>*/}
            </div>

        )
    }

    // async zyh_getSongList() {
    //     const data = await axios.get("/songlist/r.s?stype=artist2music&pn=0&rn=30", {
    //         params: {
    //             "artistid": this.props.location.state.id
    //
    //         }
    //     });
    //     const musiclist = eval("("+data.data+")");
    //     // console.log(123456,musiclist.musiclist);
    //     this.setState({
    //         songList:this.state.songList.concat(musiclist.musiclist)
    //     })
    // }
    //
    // componentDidMount() {
    //     this.zyh_getSongList();
    // }
}

export default withRouter(SongList);
import React, {Component} from "react";
import SingerImg from "../../components/singer/SingerImg";
import axios from "axios";
import PlayTit from "../../components/singer/PlayTit";
import {Link, withRouter} from "react-router-dom";
import SongListNav from "./SongList";

class Album extends Component {
    constructor(props) {
        super(props);
        this.state={
            albumlist:[]
        }
    }

    render() {
        return (
            <div>专辑
                <PlayTit {...this.props}></PlayTit>
                <SingerImg {...this.props}></SingerImg>
                <SongListNav {...this.props}></SongListNav>
                <div className={"SingerAlbumList"}>
                {
                    this.state.albumlist.map((v,i)=>{

                        return(
                            <Link key={i} to={"/albuminfo/"+v.id}>
                            <div className={"SingerAlbum"} key={i}>
                                <p className={"SingerAlbumImg"}>
                                    <img src={"http://img1.kwcdn.kuwo.cn/star/albumcover/"+v.pic} alt=""/>
                                </p>
                                <p className={"SingerAlbumInfo"}>
                                    <span id={"zyh_html"} dangerouslySetInnerHTML={{__html:v.name}}></span>
                                    <span id={"zyh_pub"}>{v.pub}</span>
                                </p>

                            </div>
                            </Link>
                        )
                        }
                    )
                }
                </div>
            </div>
        )
    }

    async zyh_getAlubmList() {
        const data = await axios.get("/songlist/r.s?pn=0&rn=30&stype=albumlist",
            {
            params: {
                "artistid":this.props.match.params.id

            }
        });
        const list = eval("(" + data.data + ")");
        this.setState({
            albumlist: this.state.albumlist.concat(list.albumlist)
        });
        localStorage.albumlist = JSON.stringify(this.state.albumlist);
    }

    componentDidMount() {
        //         console.log(55555555);
        // if(localStorage.albumlist){
        //     this.setState({
        //         albumlist:JSON.parse(localStorage.albumlist)
        //     })
        // }else{
            this.zyh_getAlubmList();
        // }
    }
}

export default withRouter(Album);
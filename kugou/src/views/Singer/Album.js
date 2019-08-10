import React, {Component} from "react";
import SingerImg from "../../components/singer/SingerImg";
import axios from "axios";
import PlayTit from "../../components/singer/PlayTit";
import {Link, withRouter} from "react-router-dom";

class Album extends Component {
    constructor(props) {
        super(props);
        // console.log(45678900,this.props);
        this.state={
            albumlist:[]
        }
    }

    render() {
        return (
            <div>专辑
                <PlayTit {...this.props}></PlayTit>
                <SingerImg {...this.props}></SingerImg>
                <div className={"SingerAlbumList"}>
                {
                    this.state.albumlist.map((v,i)=>{

                        return(
                            <Link key={i} to={
                                {
                                    pathname:"/albuminfo",
                                    state:{
                                        id:v.id,
                                        pic:v.pic,
                                        name:v.name
                                    }
                                }
                            }>
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
                "artistid": this.props.location.state.id
            }
        });
        const list = eval("(" + data.data + ")");
        this.setState({
            albumlist: this.state.albumlist.concat(list.albumlist)
        });
    }

    componentDidMount() {
        this.zyh_getAlubmList();
    }
}

export default withRouter(Album);
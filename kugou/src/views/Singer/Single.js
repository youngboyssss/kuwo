import React, {Component} from "react";
import axios from "axios";
import {BrowserRouter as Router} from "react-router-dom";
import SingerImg from "../../components/singer/SingerImg";

export default class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songList: []
        };
        console.log(898989, this.props)
    }

    render() {
        return (
            <div>
                <SingerImg {...this.props}></SingerImg>
                <div className={"zyh_singList"}>
                    {
                        this.state.songList.map((v, i) => {
                            return (
                                <div className={"singBox"} key={i}>
                                    <div className={"singTex"}>
                                        <div className={"singTexUp"}>
                                            <p className={"singTexUp2"}>
                                                {v.name.replace(/&nbsp;/g, " ")}
                                                {/*<img src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/singDt.png"} style={{width:"30px",height:"30px;"}}/>*/}
                                                <span className={"spanSing"}>
                                        {/*<img src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/singWs.png"} style={{width:"30px",height:"30px;"}} alt=""/>*/}
                                    </span>
                                            </p>
                                        </div>
                                        <p className={"singName"}>
                                            {v.artist.replace(/&nbsp;/g, " ")}
                                            {v.album ? "-" + v.album.replace(/&nbsp;/g, " ") : ""}
                                        </p>
                                    </div>
                                    <a href="javascript:;" style={{textAlign: "right", lineHeight: "40px",}}>
                                        <img style={{width: "18px"}}
                                             src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singDom.png" alt=""/>
                                    </a>
                                    <a className={"zyh_mv"} href="javascript:;">
                                        <img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singMv.png" alt=""/>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    async zyh_getSongList() {
        const data = await axios.get("/songlist/r.s?stype=artist2music&pn=0&rn=30", {
            params: {
                "artistid": this.props.location.state.id
            }
        });
        const musiclist = eval("(" + data.data + ")");
        this.setState({
            songList: this.state.songList.concat(musiclist.musiclist)
        })
    }

    componentDidMount() {
        this.zyh_getSongList();
    }

}
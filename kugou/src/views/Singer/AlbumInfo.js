import React, {Component} from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";
import AlbumImg from "../../components/singer/AlbumImg";
import PlayTit from "../../components/singer/PlayTit";

class AlbumInfo extends Component {
    constructor(props) {
        super(props);
        // console.log(45678900,this.props);
        this.state = {
            albumInfo: [],
            musicList:[]
        }
        console.log(123, this.state.albuminfo);
    }


    render() {
        console.log(54321);
        return (
            <div>
                <PlayTit {...this.props}></PlayTit>
                <AlbumImg {...this.props}></AlbumImg>
                <div className={"albumInfo_context"}>
                    <p dangerouslySetInnerHTML={{__html: this.state.albumInfo.info}}></p>
                    <span className={"album_play"}>
                        <img src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/singPlay.png"} alt=""/>
                    </span>
                </div>

                <div className={"AlbumInfo"}>
                    {
                        this.state.musicList.map((v, i) => {
                            return (
                                <div className={"AlbumBox"} key={i} style={{paddingLeft: "15px", paddingRight: "15px"}}>
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
                                        <img style={{width: "10px"}}
                                             src="https://image.kuwo.cn/mpage/html5/2017/h5SharePage/playlist2017/playIcon.png" alt=""/>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    async zyh_getAlubmInfo() {
        const data = await axios.get("/songlist/r.s?show_copyright_off=1&vipver=1&stype=albuminfo",
            {
                params: {
                    "albumid": this.props.match.params.id
                }
            });
        const list = eval("(" + data.data + ")");


        this.setState({
            musicList: this.state.musicList.concat(list.musiclist),
            albumInfo:{...this.state.albumInfo,...list}
        });
        console.log(444444,this.state.albumInfo);
    }



    // r.s?albumid=552654&show_copyright_off=1&vipver=1&stype=albuminfo
    //
    //
    // r.s?stype=albuminfo&rn=30&pn=0&albumid=552654


    componentDidMount() {
        console.log(666666);
        this.zyh_getAlubmInfo();
        // console.log(888,this.state.albumlist)
    }
}

export default withRouter(AlbumInfo);



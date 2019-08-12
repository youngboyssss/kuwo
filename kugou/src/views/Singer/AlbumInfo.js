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
            albumInfo:[]
        };
        console.log(123, this.state.albuminfo);
    }

    render() {
        console.log(54321);
        return (
            <div>
                <PlayTit {...this.props}></PlayTit>
                <AlbumImg {...this.props}></AlbumImg>

                <div className={"AlbumInfo"}>
                    {
                        this.state.albumInfo.map((v, i) => {
                            return (
                                <div className={"AlbumBox"} key={i} style={{paddingLeft:"15px",paddingRight:"15px"}}>
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
                                    <a className={"album_mv"} href="javascript:;">
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

async zyh_getAlubmInfo()
{
    console.log(5555555);
    const data = await axios.get("/songlist/r.s?stype=albuminfo&rn=30&pn=0",
        {
            params: {
                "albumid": this.props.match.params.id
            }
        });
    const list = eval("(" + data.data + ")");
    console.log(444444,list);

    this.setState({
        albumInfo: this.state.albumInfo.concat(list)
    });
}

componentDidMount()
{
    console.log(666666);
    this.zyh_getAlubmInfo();
    // console.log(888,this.state.albumlist)
}
}

export default withRouter(AlbumInfo);



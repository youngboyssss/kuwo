import React from "react";
import {
    Route,
    Link,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";
import axios from "axios";
import PlayTit from "../../components/singer/PlayTit";
import GetMore from "../../components/singer/GetMore";


class ArtistList extends React.Component {
    constructor() {
        super();
        this.state = {
            sourceId: "",
            artistlist:[],
            pn:0
        }
    }

    render() {
        return (
            <div>
                <PlayTit {...this.props}></PlayTit>
                <div className={"singList"}>
                    {
                        this.state.artistlist.map((v,i)=>{
                            return(
                                <Link key={i} to={
                                    {
                                        pathname:"/songlist",
                                        state:{
                                            id:v.id,
                                            pic:v.pic,
                                            name:v.name
                                        }
                                    }
                                }>
                                    <div className={"singerMv"} >
                                        <p className={"singerZjImg"}>
                                            <img src={"http://img4.kwcdn.kuwo.cn/star/starheads/"+v.pic} alt=""/>
                                        </p>
                                        <p className={"singerRiTex2"}>
                                            <span className={"singerRiName"}>{v.name}</span>
                                            <span className={"singerRiName2"}>共首{v.music_num}歌曲</span>
                                        </p>
                                    </div>
                                </Link>
                            )

                        })
                    }
                </div>
                <GetMore zyh_getArtistList={this.zyh_getArtistList.bind(this)}/>
                {/*<span className={"pullUpLabel"}><p onClick={()=>this.zyh_getArtistList(++this.state.pn)}>加载更多...</p></span>*/}
            </div>

        )
    }

    async zyh_getArtistList(pn=0) {
        const data = await axios.get("/kugou/mb.slist?stype=artistlist&pn="+pn+"&order=hot&rn=30", {params: {category: this.props.match.params.id}});

        // 将字符串转换成对象（不能用JSON.parse）
        const list = eval("("+data.data+")");
        this.setState({
            // 数组拼接
            artistlist:this.state.artistlist.concat(list.artistlist)
        });
    }

    componentDidMount() {
        this.zyh_getArtistList();
        // console.log(999,this.props);
    }
}

export default withRouter(ArtistList);
import React, {Component} from "react";
import axios from "axios";
import PlayTit from "../../components/singer/PlayTit";
import {withRouter} from "react-router-dom";

class AlbumInfo extends Component {
    constructor(props) {
        super(props);
        // console.log(45678900,this.props);
        this.state={
            albumlist:[]
        }
        console.log(123,this.props);
    }

    render() {
        return (
            <div>
                {/*<PlayTit {...this.props}></PlayTit>*/}
                <div className={"AlbumInfo"}>
                    {
                        this.state.albumlist.map((v,i)=>{
                                return(
                                    <div>
                                        <div className={"AlbumInfoTop"}>
                                            <div>
                                                <img src="" alt=""/>
                                                <span><img src="" alt=""/>图标</span>
                                            </div>
                                            <div>
                                                <p>name</p>
                                                <p>artistlist</p>
                                                <p>time</p>
                                            </div>
                                            <input type="button" value={"全部播放"}/>
                                        </div>
                                        <div className={"AlbumSongs"}>
                                            <div>
                                                <p><span></span></p>
                                            </div>
                                            {
                                                <div>
                                                    <p>songname</p>
                                                    <p>artist</p>
                                                    <span>播放图标</span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
    }

    async zyh_getAlubmList() {
        const data = await axios.get("/songlist/r.s?stype=albuminfo&rn=30&pn=0",
            {
                params: {
                    "albumid": this.props.match.params.id
                }
            });
        const list = eval("(" + data.data + ")");
        this.setState({
            albumlist: this.state.albumlist.concat(list.albumlist)
        });
        console.log(456,data);
    }

    componentDidMount() {
        this.zyh_getAlubmList();
        console.log(888,this.state.albumlist)
    }
}

export default withRouter(AlbumInfo);





// http://localhost:3000/songlist/r.s?stype=albumlist&rn=30&pn=0&albumid=10412080
// http://search.kuwo.cn         /r.s?stype=albuminfo&albumid=10412080
import React from "react";
import {
    Link,
    Route,
    withRouter
} from "react-router-dom"
import MyNav from "../../router/MyNav";
import axios from "axios";
import "../../assets/css/singer.css";


export default class Singer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            singerType:[]
        }
    }

    render(){
        return (
            <div className="newMc">
                <div className="newList">
                {
                    this.state.singerType.map((v,i)=>{
                        return(
                                    <Link key={i} to={"/artistlist/"+v.sourceId+"/"+v.name}>
                                    <div className="newBs2" >
                                        <img src={v.pic}/>
                                        <span className="newTopline2"></span>
                                        <p className="h5"></p>
                                        <p className="newBtex">{v.name}</p>
                                    </div>
                                    </Link>
                            )
                    })

                }
                <div className="newBs2"></div>
                <div className={"gediv"}></div>

                </div>
            </div>
        )
    }

    // 获取歌手类别
    async zyh_getSingerType(){
        const data = await axios.get("http://127.0.0.1:90/singer");
        // console.log(11111111,data.data.artistList);
        this.setState({
            singerType:data.data.singerType
        })
    }


    componentDidMount() {
        this.zyh_getSingerType();
    }


}

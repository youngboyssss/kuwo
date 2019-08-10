import React,{Component} from "react";
import axios from "axios";
export default class SingerImg extends Component{
    constructor(props){
        super(props);
        this.state={
            artistinfo:[],
            pic:""
        }
    }

    render(){
        return (
            <div className={"singerImg"}>
                <img id="filter"
                     src={"http://img4.kwcdn.kuwo.cn/star/starheads/"+this.state.pic} alt=""/>
                <span className="singerMinImg">
                        <img style={{width: "90px", height: "90px", borderRadius: "2px"}}
                             src={"http://img4.kwcdn.kuwo.cn/star/starheads/"+this.state.pic} alt=""/>
                    </span>
            </div>
        )
    }
        async zyh_getArtistInfo(pn=0) {
        const data = await axios.get("/songlist/r.s?stype=artistinfo&artistid="+this.props.match.params.id)
        // 将字符串转换成对象（不能用JSON.parse）
        const list = eval("("+data.data+")");
        this.setState({
            // 数组拼接
            artistinfo:this.state.artistinfo.concat(list),
            pic:list.pic
        });
    }

    componentDidMount() {
        this.zyh_getArtistInfo();
    }
}
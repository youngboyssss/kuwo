import React,{Component} from "react";
import axios from "axios";
export default class AlbumImg extends Component{
    constructor(props){
        super(props);
        this.state={
            albuminfo:[],
            pic:""
        }
        // console.log(33334,this.props)
    }

    render(){
        return (
            <div className={"albumImg"}>
                <img id={"album_filter"}
                     src={"http://img1.kwcdn.kuwo.cn/star/albumcover/"+this.state.pic} alt=""/>
                <span className="albumMinImg">
                        <img style={{width:"90px",height:"90px",position:"fixed",left:"40px",top:"65px",borderRadius:"2px"}}
                             src={"http://img1.kwcdn.kuwo.cn/star/albumcover/"+this.state.pic} alt=""/>
                    </span>
            </div>
        )
    }

    async zyh_getAlbumInfo(pn=0) {
        const data = await axios.get("/songlist/r.s?stype=albuminfo&albumid="+this.props.match.params.id)
        // 将字符串转换成对象（不能用JSON.parse）
        const list = eval("("+data.data+")");
        // console.log(787878,list);
        this.setState({
        //     // 数组拼接
            albuminfo:this.state.albuminfo.concat(list),
            pic:list.pic
        });
    }

    componentDidMount() {
        this.zyh_getAlbumInfo();
    }
}
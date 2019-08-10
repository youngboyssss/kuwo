import React from "react";
import {
    Route,
    Link,
    NavLink,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";
import axios from 'axios';

class SearchList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            abslist:[],
            all:""
        }
    }
    render(){
        return (
            <div className={"searchTitle"}>
                <div className={"searchInput"}>
                    <input ref={"all"} type="text" placeholder={"歌手/歌名/歌词"}/>
                    <input type="button" onClick={this.search.bind(this)} value={"搜索"}/>
                </div>
                <div className={"searchConent"}>
                    {
                        this.state.data.map((v,i)=>{
                                return(
                                    <a key={i}>
                                        {v.disname}
                                    </a>
                                )
                        })
                    }
                </div>
            </div>
        )
    }
    async search(){
        this.props.history.push("/searchdetails")
        //console.log(this.props)
        // if (this.refs.all.value.length === 0){
        //     alert("请输入歌手名或歌曲名");
        // }else {
        //     const data = await axios.get("/kugouu/r.s?all="+this.refs.all.value+"&ft=music&client=kt&pn=0&rn=50&rformat=json&encoding=utf8")
        //         .then(data=>{
        //             console.log(this.props)

        //             let list = eval("("+data.data+")");
        //             console.log(list.abslist);
        //         })
        // }
    }
    componentDidMount() {
        axios.get("http://mobile.kuwo.cn/mpage/html5/2015/action/hotword.jsp")
            .then(data=>{
            this.setState({
                data:data.data
            })
        });
    }
}

export default withRouter(SearchList)
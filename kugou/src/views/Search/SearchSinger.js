import React from 'react';
import axios from 'axios';
export default class SearchSinger extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            abslist:[],
            all:""
        }
    }
    render() {
        return(
            <div>
                <div className={"searchInput"}>
                    <input ref={"all"} type="text" placeholder={"歌手/歌名/歌词"}/>
                    <input type="button" onClick={this.searchSinger.bind(this)} value={"搜索"}/>
                </div>
                <div className={"searchSum"}>
                    {
                        <p>
                            找到{this.state.abslist.HIT}个结果，更多结果可下载APP查看
                        </p>
                    }
                </div>
            </div>
        )
    }
    async searchSinger(){
        this.props.history.push("/searchdetails");
        //http://search.kuwo.cn/r.s?all=ppp&ft=artist&pn=0&rformat=json&encoding=utf8
        const {data} = await axios.get("/kugouu/r.s?all="+this.refs.all.value+"&ft=artist&pn=0&rformat=json&encoding=utf8")
            .then(data=>{
                const list = eval("("+data.data+")");
                this.setState({
                    abslist:list
                })
            })
    }
    componentDidMount() {
        this.searchSinger();
    }
}
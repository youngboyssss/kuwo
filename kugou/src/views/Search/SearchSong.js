import React from 'react';
import axios from 'axios'
import pubsub from 'pubsub-js'
export default class SearchSong extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            abslist:[],
            all:"",
            start:0
        }
    }
    render() {
        return(
            <div>
                <div>
                    {
                        this.state.abslist.map((v,i)=>{
                            return(
                                <div key={i} className={"sl_searchsong"}>
                                    <p>
                                        {v.NAME.replace("&nbsp;","")}
                                    </p>
                                    <p>
                                        {v.ARTIST}
                                    </p>
                                    <img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singDom.png" alt=""/>
                                    <hr/>
                                </div>
                            )
                        })
                    }
                </div>
                <div onClick={()=>{
                    this.getMore.call(this,this.state.start)
                }}>
                    加载更多
                </div>
            </div>
        )
    }
    async getMore(start){
        this.props.history.push("/searchdetails");
        const data = await axios.get("/kugouu/r.s?all="+this.refs.all.value+"&ft=music&client=kt&pn="+start+"&rformat=json&encoding=utf8")
            .then(data=>{
                let list = eval("("+data.data+")");
                this.setState({
                    abslist:[...list.abslist,...this.state.abslist]
                });
            })
    }
    async searchsing(value){
        this.props.history.push("/searchdetails");
        const data = await axios.get("/kugouu/r.s?all="+value+"&ft=music&client=kt&pn=0&rformat=json&encoding=utf8")
            .then(data=>{
                let list = eval("("+data.data+")");
                this.setState({
                    abslist:[...list.abslist,...this.state.abslist]
                });
            })
    }

    componentWillMount() {
        pubsub.subscribe("one",(name,a)=>{
            this.searchsing(a.value);
        })
    }

    componentDidMount() {

    }
}
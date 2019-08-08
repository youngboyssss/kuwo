import React from "react";
import {
    withRouter,
    Link,
} from "react-router-dom"


class MvList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            singerList:[],
            pn:0,
            title:"",
            isLoading:false,
        }
    }
    a(a){
        console.log(  this.props.history)
        this.props.history.push('/ClassifyList/'+a)
    }

    render(){
        return (
            <div className={"singerMvBox"}>
                <div className={"singerMvTit"}>
                    <Link to={"/mv"}><img className={"backArrow"} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/back.png"}/></Link>
                    <span className={'playTit'}>{this.state.title}</span>
                    <Link to={"/searchList"}><img className={'mvSearch'} src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/seach.png"}/></Link>
                </div>
                <div  className={"singerListWrap"}>
                    {
                        this.state.singerList.map((item,index)=>{
                            return (
                                <Link to={"/mvplay/"+item.id} key={index}>
                                    <div>
                                        {
                                            item.mvpic?<div className={"singerMv"}>
                                                <p className={"singerMvImg"}><img src={"http://img3.kwcdn.kuwo.cn/wmvpic/"+item.mvpic}/></p>
                                                <p className={"singerMvTex"}>
                                                    <span className={"singerMvName"}>{item.name}</span>
                                                    <span className={"singerMvName2"}>{item.artist}</span>
                                                </p>
                                            </div>:null
                                        }
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className={"getMoreBtn"} onClick={this.getMore.bind(this,++this.state.pn)}>
                    <div className={"loadMore"}>
                        <span>获取更多</span>
                    </div>
                </div>

            </div>
        )
    }
    getMore(pn){
            this.axios.get("http://nplserver.kuwo.cn/pl.svc?op=getlistinfo&pid="+this.props.match.params.pid+"&pn="+pn/1+"&rn=30&keyset=padmvpl")
                .then(({data})=>{
                    console.log(333,data)
                    this.setState({
                        singerList:[...this.state.singerList,...data.musiclist],
                        title:data.title,
                        loading:true,
                    })
                })

    }
    componentDidMount(){
        this.getMore()
    }
}

export default withRouter(MvList)

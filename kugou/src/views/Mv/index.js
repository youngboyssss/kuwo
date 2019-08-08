import React from "react";
import {
    Link
} from "react-router-dom"

export default class Mv extends React.Component{
    constructor(){
        super()
        this.state = {
            mvList:[]
        }
    }
    async componentDidMount(){
        const {data} = await this.axios.get("http://127.0.0.1:90/getMvList")
        if(data.ok===1){
            this.setState({
                mvList:data.mvList.data
            })
        }
    }

    render(){
        return (
            <div>
                <div className={"mv"}>
                    {
                        this.state.mvList.map((item,index)=>{
                            return (
                                <div className={"mvWrap"} key={item.pid}>
                                    <Link to={"/mvList/"+item.pid}><p className={"mvImg"}><img src={item.pic}/></p><p className={"mvTit"}>{item.title}</p></Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

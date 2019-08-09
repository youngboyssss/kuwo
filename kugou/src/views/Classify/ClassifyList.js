import React from "react";
import {withRouter} from 'react-router-dom'

class ClassifyList extends React.Component {
    constructor() {
        super()
        this.state = {
            infoList: {
                child: []
            }
        }
    }

    async componentDidMount() {
        const {data} = await this.axios.get("/kugou" + "/q.k" + this.props.location.search)
        this.setState({
            infoList: data
        })
    }

    return(){
        this.props.history.go(-1);
    }

    typeDetails(id){
        this.props.history.push("/classifyType/"+id);
    }

    render() {
        if (!this.state.infoList.child[0]) return  (
            <div className={"wait"}>
                {<this.component.Wait/>}
            </div>
        )
        this.state.infoList.ninfo = this.state.infoList.ninfo?this.state.infoList.ninfo:{}
        return (<>
            <div className={"typelistBoy"}>
                <div className={"listHeader"}>
                    <div className={"listHeader_left"}>
                        <span className="iconfont" onClick={this.return.bind(this)}>&#xe738;</span>
                        <div className={"listName"}>{this.state.infoList.ninfo.name}</div>
                    </div>
                    <span className="iconfont on">&#xe615;</span>
                </div>

                <div className={"classlistBody"}>
                    {
                        this.state.infoList.child.map((v, i) => {
                            return (
                                <div key={i} className={"typelist"} onClick={v.info?this.typeDetails.bind(this,v.sourceid):null}>
                                    <p style={{width: "75px", height: "75px"}}>
                                        <img src={v.pic} alt="" style={{width: "100%", height: "100%"}}/>
                                    </p>
                                    <div>
                                        <h3>{v.disname}</h3>
                                        <span>共{v.info?v.info:0}首歌曲</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>)
    }
}

export default withRouter(ClassifyList)
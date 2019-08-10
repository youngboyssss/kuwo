import React from "react";
import {withRouter} from 'react-router-dom'
class Classify extends React.Component {
    constructor() {
        super()

        this.state = {
            infoList: []
        }
    }

    async componentDidMount() {
        const {data} = await this.axios.get("http://127.0.0.1:90/getClassify")
        this.setState({
            infoList: data.infoList
        })
    }

    async classify(id){
        this.props.history.push("/classifyList/q.k?op=query&cont=ninfo&node="+id+"&rn=50&fmt=json&r=1565094758129");
    }

    render() {
        if(!this.state.infoList.length) return <div className={"classify"}></div>
        return (
            <div>
                <div className={"classify"}></div>
                {
                    this.state.infoList.map((v, i) => {
                        return (
                            <div className={"clssgroup"} key={i}>
                                <h3>{v.type}</h3>
                                <div>
                                    {
                                        v.data.map((n, m) => {
                                            return(
                                                    <span key={m} onClick={this.classify.bind(this,n.id)}>{n.type}</span>
                                                )
                                        })
                                    }
                                    <div className={"kongdiv"}></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default withRouter(Classify)
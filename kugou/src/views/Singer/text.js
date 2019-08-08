import React,{Component} from "react";
export default class Single extends Component{
    render(){
        return (
            <div className={"zyh_singList"}>
                {
                    this.state.songList.map((v,i)=>{
                        return(
                            <div className={"singBox"} key={i}>
                                <div className={"singTex"}>
                                    <div className={"singTexUp"}>
                                        <p className={"singTexUp2"}>
                                            {v.name.replace(/&nbsp;/g," ")}
                                            {/*<img src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/singDt.png"} style={{width:"30px",height:"30px;"}}/>*/}
                                            <span className={"spanSing"}>
                                        {/*<img src={"http://image.kuwo.cn/mpage/html5/2015/tuijian/singWs.png"} style={{width:"30px",height:"30px;"}} alt=""/>*/}
                                    </span>
                                        </p>
                                    </div>
                                    <p className={"singName"}>
                                        {v.artist.replace(/&nbsp;/g," ")}
                                        {v.album?"-"+v.album.replace(/&nbsp;/g," "):""}
                                    </p>
                                </div>
                                <a href="javascript:;" style={{textAlign:"right",lineHeight:"40px", }}>
                                    <img style={{width:"18px"}} src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singDom.png" alt=""/>
                                </a>
                                <a className={"zyh_mv"} href="javascript:;">
                                    <img src="http://image.kuwo.cn/mpage/html5/2015/tuijian/singMv.png" alt=""/>
                                </a>
                            </div>
                        )

                    })
                }
            </div>
        )
    }

}
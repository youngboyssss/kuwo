import React, {Component} from "react";
import {withRouter} from 'react-router-dom'

class Areacode extends Component {

        areaCode(number){
                this.props.history.push({
                    pathname:"/register",
                    query:{
                        id:number
                    }
                });
        }
    render() {
        return (
            <div className={"yxl_areacode"}>
                <span className={"title"}>常用</span>
                <span onClick={this.areaCode.bind(this,"0086")}>中国</span>
                <span onClick={this.areaCode.bind(this,"0087")}>中国香港</span>
                <span onClick={this.areaCode.bind(this,"0088")}>中国台湾</span>
                <span onClick={this.areaCode.bind(this,"0089")}>中国澳门</span>
                <span onClick={this.areaCode.bind(this,"0090")}>美国</span>
                <span className={"title"}>A</span>
                <span onClick={this.areaCode.bind(this,"0091")}>澳大利亚</span>
                <span onClick={this.areaCode.bind(this,"0092")}>中国澳门</span>
                <span className={"title"}>B</span>
                <span onClick={this.areaCode.bind(this,"0093")}>巴西</span>
                <span className={"title"}>D</span>
                <span onClick={this.areaCode.bind(this,"0094")}>德国</span>
                <span className={"title"}>E</span>
                <span onClick={this.areaCode.bind(this,"0095")}>俄罗斯</span>
                <span className={"title"}>F</span>
                <span onClick={this.areaCode.bind(this,"0096")}>法国</span>
                <span className={"title"}>H</span>
                <span onClick={this.areaCode.bind(this,"0097")}>韩国</span>
                <span className={"title"}>J</span>
                <span onClick={this.areaCode.bind(this,"0098")}>加拿大</span>
                <span className={"title"}>M</span>
                <span onClick={this.areaCode.bind(this,"0099")}>马来西亚</span>
                <span onClick={this.areaCode.bind(this,"0100")}>美国</span>
                <span className={"title"}>R</span>
                <span onClick={this.areaCode.bind(this,"0101")}>日本</span>
                <span className={"title"}>T</span>
                <span onClick={this.areaCode.bind(this,"0102")}>中国台湾</span>
                <span onClick={this.areaCode.bind(this,"0103")}>泰国</span>
                <span className={"title"}>X</span>
                <span onClick={this.areaCode.bind(this,"0104")}>中国香港</span>
                <span onClick={this.areaCode.bind(this,"0105")}>新加坡</span>
                <span className={"title"}>Y</span>
                <span onClick={this.areaCode.bind(this,"0106")}>印度</span>
                <span onClick={this.areaCode.bind(this,"0107")}>英国</span>
                <span className={"title"}>Z</span>
                <span onClick={this.areaCode.bind(this,"0108")}>中国</span>
                <div>
                    <p className="tips">
                        如果没有找到你所在的归属地，<br/>请拨打客服电话<a href="tel:4006282835">4006282835</a> 解决。
                    </p>
                </div>
            </div>
        )
    }
}

export default withRouter(Areacode)
import React,{Component} from "react";
import SingerImg from "../../components/singer/SingerImg";
export default class Mv extends Component{
    render(){

        return (
            <div>
                Mv
                <SingerImg {...this.props}></SingerImg>
            </div>
        )
    }

}
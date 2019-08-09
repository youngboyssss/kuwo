import React, {Component} from "react";
import SingerImg from "../../components/singer/SingerImg";

export default class Album extends Component {
    constructor(props) {
        super(props);
        console.log(45678900,this.props);
    }

    render() {
        return (
            <div>专辑
                <SingerImg {...this.props}></SingerImg>
            </div>
        )
    }
}
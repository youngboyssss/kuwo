import React from "react";
import Mvpaly from "./Mvpaly";
import Nav from "./Nav";
import Audio from "./Audio";
import Fonts_search from "./Fonts_search";
export default function () {
    React.Component.prototype.component={
        Mvpaly,
        Fonts_search,
        Nav,
        Audio
    }
}
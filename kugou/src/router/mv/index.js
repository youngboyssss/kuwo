import MvPlay from "../../views/Mv/MvPlay";
import Mv from "../../views/Mv"
import MvList from "../../views/Mv/MvList";
import children from './children'
export default[
    {//MV
        to: "/mv",
        path: "/mv",
        exact: true,
        context: "MV",
        component: Mv,
        children: [
            ...children
        ],
        meta: {
            title: "拉钩网",
            keywored: "关键字",
            descrieption: "描述",
            isFooter: true
        }
    },

    {//Mvlist  ----------  排行列表
        to: "/MvList",
        path: "/MvList",
        exact: true,
        context: "首播",
        component: MvList,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false
        }
    },
    {//MvPlay  ----------  Mv播放列表
        to: "/mvplay",
        path: "/mvplay",
        exact: true,
        context: "首播",
        component: MvPlay,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false
        }
    }
]

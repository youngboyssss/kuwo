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
        sbNav:false,
        children: [
           // ...children
        ],
        meta: {
            title: "拉钩网",
            keywored: "关键字",
            descrieption: "描述",
            isFooter: true
        }
    },

    {//Mvlist  ----------  排行列表
        to: "/MvList/:id",
        path: "/MvList/:id",
        exact: true,
        context: "首播",
        sbNav:false,
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

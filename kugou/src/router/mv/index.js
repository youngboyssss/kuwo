import MvPlay from "../../views/Mv/MvPlay/MvPlay";
import Mv from "../../views/Mv"
import MvList from "../../views/Mv/MvList/MvList";
import MvDetailPlay from "../../views/Mv/MvDetailPlay/MvDetailPlay";
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
            title: "酷我音乐",
            keywored: "关键字",
            descrieption: "描述",
            isFooter: true,
            isAuthorization:true
        }
    },

    {//MvList  ----------  二级页面
        to: "/MvList/:pid",
        path: "/MvList/:pid",
        exact: true,
        context: "首播",
        sbNav:false,
        component: MvList,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false,
            isAuthorization:true
        }
    },
    {//MvPlay  ----------  Mv播放列表
        to: "/mvplay/:id",
        path: "/mvplay/:id",
        exact: true,
        context: "播放",
        component: MvPlay,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false,
            isAuthorization:true
        }
    },
    {//MvDetailPlay  ----------  Mv下面列表
        to: "/MvDetailPlay/:id",
        path: "/MvDetailPlay/:id",
        exact: true,
        context: "MV播放",
        component: MvDetailPlay,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false
        }
    }
]

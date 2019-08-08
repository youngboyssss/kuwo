import MvPlay from "../../views/Mv/MvPlay/MvPlay";
import Mv from "../../views/Mv"
import MvList from "../../views/Mv/MvList/MvList";

export default[
    {//MV
        to: "/app",
        path: "/app",
        exact: true,
        context: "下载APP",
        component: Mv,
        sbNav:false,
        children: [

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
        sbNav:false,
        context: "首播",
        component: MvList,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false
        }
    },

]

import Classify from "../../views/Classify";

export default [
    {                                            //配置子页面导航栏下面显示的内容
        to: "/ClassifyList",
        path: "/ClassifyList",
        exact: true,
        context: "热门",
        component: Classify,
        className:"pp",
        sbNav:true,
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: true
        }
    }
]
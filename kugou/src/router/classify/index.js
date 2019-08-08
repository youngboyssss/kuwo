
import ClassifyList from "../../views/Classify/ClassifyList"
import Classify from "../../views/Classify";
import children from "./children"
export default [
    {                                        //配置子页面路由
        to: "/classify",
        path: "/classify",
        context: "分类",
        component: Classify,
        sbNav:false,
        children: [
            //...children
        ],
        meta: {
            title: "我的",
            keywored: "关键字",
            descrieption: "描述",
            isFooter: true                   //显示导航栏
        }
    },
    {                                        //配置一级路由 配置ClassifyList页面  只是配置子页面路由
        to: "/ClassifyList/:id",
        path: "/ClassifyList/:id",
        sbNav:false,
        exact: true,
        context: "热门",
        component: ClassifyList,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false                  //不显示导航栏
        }
    }
]


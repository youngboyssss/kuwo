
import ClassifyList from "../../views/Classify/ClassifyList"
import Classify from "../../views/Classify";
import children from "./children"
export default [
    {
        to: "/classify",
        path: "/classify",
        context: "分类",
        component: Classify,
        children: [
            ...children
        ],
        meta: {
            title: "我的",
            keywored: "关键字",
            descrieption: "描述",
            isFooter: true
        }
    },
    {
        to: "/ClassifyList",
        path: "/ClassifyList",
        exact: true,
        context: "热门",
        component: ClassifyList,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false
        }
    }
]


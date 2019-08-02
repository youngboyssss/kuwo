import Classify from "../../views/Classify";
export default [
    {
        to: "/ClassifyList",
        path: "/ClassifyList",
        exact: true,
        context: "热门",
        component: Classify,
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: true
        }
    }
]
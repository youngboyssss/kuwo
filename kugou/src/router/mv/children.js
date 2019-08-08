import MvList from "../../views/Mv/MvList/MvList";

export default [
    {
        to: "/MvList",
        path: "/MvList",
        exact: true,
        context: "首播",
        component: MvList,
        sbNav:true,
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: true
        }
    }
]
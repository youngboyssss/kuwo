import MvList from "../../views/DownloadAPP/MvList";

export default [
    {
        to: "/MvList",
        path: "/MvList",
        exact: true,
        context: "首播",
        component: MvList,
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: true
        }
    }
]
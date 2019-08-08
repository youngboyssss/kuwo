import Register  from "../../views/Register";

export default[
    {//login  ----------  登录列表
        to: "/register",
        path: "/register",
        exact: true,
        sbNav:false,
        context: "首播",
        component: Register,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false
        }
    },

]
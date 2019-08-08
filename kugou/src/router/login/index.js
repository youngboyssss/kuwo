import Login from "../../views/Login";

export default[
    {//login  ----------  登录列表
        to: "/login",
        path: "/login",
        exact: true,
        sbNav:false,
        context: "首播",
        component: Login,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false
        }
    },

]
import Areacode from "../../components/Areacode";

export default[
    {//areacode  ----------  区号列表
        to: "/areacode",
        path: "/areacode",
        exact: true,
        sbNav:false,
        context: "首播",
        component: Areacode,
        children: [],
        meta: {
            keywored: "关键字",
            descrieption: "描述",
            isFooter: false
        }
    },

]
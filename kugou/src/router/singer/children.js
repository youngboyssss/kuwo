import Singer from "../../views/Singer";
export default [
    {
        to:"/artistlist",
        path:"/artistlist",
        exact:true,
        context:"热门歌手",
        component:Singer,
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true
        }
    }
]
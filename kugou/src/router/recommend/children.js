import PlayList from "../../views/Recommend/PlayList"

export default [
    {
        to:"/playlist",
        path:"/playlist",
        exact:true,
        context:"每日新歌",
        component:PlayList,
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true
        }
    }
]
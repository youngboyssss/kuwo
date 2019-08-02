import SearchList from "../../views/Search/SearchList"
export default [
    {
        to:"/searchList",
        path:"/searchList",
        exact:true,
        context:"歌手/歌词/歌名",
        component:SearchList,
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true
        }
    }
]
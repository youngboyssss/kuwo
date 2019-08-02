import Search from "../../views/Search";
import SearchList from "../../views/Search/SearchList"
import children from './children'
export default [
    {//搜索
        to:"/search",
        path:"/search",
        exact:true,
        context:"搜索",
        component:Search,
        children:[
            ...children
        ],
        meta:{
            title:"拉钩网",
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true
        }
    },
    {//SearchList  ----------  Mv播放列表
        to:"/searchList",
        path:"/searchList",
        exact:true,
        context:"歌手/歌词/歌名",
        component:SearchList,
        children:[
        ],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter: false
        }
    }
]
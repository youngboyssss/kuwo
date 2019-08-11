import Search from "../../views/Search";
import SearchList from "../../views/Search/SearchList"
import ScreachDetails from "../../views/Search/ScreachDetails"
import children from './children'
import Font_search from '../../components/Fonts_search'
export default [
    {//配置搜索
        to:"/searchList",
        path:"/search",
        exact:true,
        context:"搜索",
        component:Search,
        sbNav:false,
        font:Font_search,
        children:[
            //...children
        ],
        meta:{
            title:"拉钩网",
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true,
            isAuthorization:true
        }
    },
    {//SearchList  ----------  Mv播放列表
        to:"/searchList",
        path:"/searchList",
        exact:true,
        sbNav:false,
        context:"歌手/歌词/歌名",
        component:SearchList,
        children:[
        ],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter: false,
            isAuthorization:true
        }
    },
    {//Searchdetails  ----------  搜索详情
        to:"/searchdetails",
        path:"/searchdetails",
        exact:true,
        sbNav:false,
        context:"歌手/歌词/歌名",
        component:ScreachDetails,
        children:[
        ],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter: false,
            isAuthorization:true
        }
    }
    ]
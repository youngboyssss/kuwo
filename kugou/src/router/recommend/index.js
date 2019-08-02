import Recommend from "../../views/Recommend";
import PlayList from "../../views/Recommend/PlayList"
import children from './children'
export default [
    {// 推荐
        to:"/",
        path:"/",
        exact:true,
        context:"推荐",
        component:Recommend,
        children:[
            ...children
        ],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true
        }
    },
    {//playlist  ----------  每日新歌
        to:"/playlist",
        path:"/playlist",
        exact:true,
        context:"每日新歌",
        component:PlayList,
        children:[],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter: false
        }
    }
]
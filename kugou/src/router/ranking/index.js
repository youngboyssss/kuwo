import Ranking from "../../views/Ranking";
import RankingList from "../../views/Ranking/RankingList"
import children from "./children"
export default [
    { //排行
        to:"/ranking",
        path:"/ranking",
        context:"排行",
        component:Ranking,
        children:[
            ...children
        ],
        meta:{
            // title:"搜索",
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true
        }
    },
    {//rankinglist  ----------  排行列表
        to:"/rankinglist",
        path:"/rankinglist",
        exact:true,
        context:"酷我飙升榜",
        component:RankingList,
        children:[

        ],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter: false
        }
    }

]
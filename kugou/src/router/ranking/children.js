import Ranking from "../../views/Ranking";
export default [
    {
        to:"/rankinglist",
        path:"/rankinglist",
        exact:true,
        context:"酷我飙升榜",
        component:Ranking,
        sbNav:true,
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true
        }
    }
]

import Rank from "./../../views/Ranking/Rank"
import Rank2 from "./../../views/Ranking/Rank2"
export default [
      {// 首页
        to:"/Rank",
        path:"/Rank",
        exact:true,
        context:'排行',
        component:Rank,
        sbNav:false,
        meta:{
            title:"排行",
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true,
            isAuthorization:true
        }
        
    },

        {
            to:"/Rank2/:id",
            path:"/Rank2/:id",
            exact:true,
            sbNav:false,
            context:"每日新歌",
            component:Rank2,
            children:[],
            meta:{
                keywored:"关键字",
                descrieption:"描述",
                isFooter: false
            }
        }
  
]
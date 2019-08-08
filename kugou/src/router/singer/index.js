import Singer from "../../views/Singer";
import ArtistList from "../../views/Singer/ArtistList"
import children from './children'
export default [

    {//歌手
        to:"/singer",
        path:"/singer",
        exact:true,
        context:"歌手",
        component:Singer,
        sbNav:false,
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
    {//artistlist  ---------- artist
        to:"/artistlist",
        path:"/artistlist",
        exact:true,
        context:"热门歌手",
        component:ArtistList,
        sbNav:false,
        children:[

        ],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter: false,
            isAuthorization:true
        }
    },

]
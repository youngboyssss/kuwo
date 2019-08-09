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
            title:"歌手",
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true
        }
    },
    {//artistlist  ---------- artist
        to:"/artistlist/:id",
        path:"/artistlist/:id",
        exact:true,
        context:"热门歌手",
        component:ArtistList,
        sbNav:false,
        children:[

        ],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter: false
        }
    },

]
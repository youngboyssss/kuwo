import Singer from "../../views/Singer";
import ArtistList from "../../views/Singer/ArtistList";
import SongList from "../../views/Singer/SongList";
import Mv from "../../views/Singer/Mv";
import Single from "../../views/Singer/Single";
import Album from "../..//views/Singer/Album";
import SongListNav from "../../components/singer/SongListNav";
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
        to:"/artistlist/:id/:name",
        path:"/artistlist/:id/:name",
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
    {//SongList
        to:"/songlist",
        path:"/songlist",
        exact:true,
        context:"歌手-歌单",
        component:SongList,
        sbNav:false,
        children:[
            {
                to:"/songlist",
                path:"/songlist",
                exact:true,
                context:"单曲",
                component:Single,
                sbNav:true,
                meta:{
                    keywored:"关键字",
                    descrieption:"描述",
                    isFooter: false
                }
            },
            {
                to:"/songlist/album",
                path:"/songlist/album",
                exact:false,
                context:"专辑",
                component:Album,
                sbNav:true,
                meta:{
                    keywored:"关键字",
                    descrieption:"描述",
                    isFooter: false
                }
            },
            {
                to:"/songlist/mv",
                path:"/songlist/mv",
                exact:false,
                context:"mv",
                component:Mv,
                sbNav:true,
                meta:{
                    keywored:"关键字",
                    descrieption:"描述",
                    isFooter: false
                }
            },
        ],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter: false
        }
    },

]
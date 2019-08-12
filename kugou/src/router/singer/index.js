import Singer from "../../views/Singer";
import ArtistList from "../../views/Singer/ArtistList";
import SongList from "../../views/Singer/SongList";
import Mv from "../../views/Singer/Mv";
import Single from "../../views/Singer/Single";
import Album from "../..//views/Singer/Album";
import AlbumInfo from "../..//views/Singer/AlbumInfo";
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
            isFooter:true,
            isAuthorization:true
        }
    },
    {//ArtistList  ---------- artist
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
            isFooter: false,
            isAuthorization:true
        }
    },
    {//Album
        to:"/album/:id",
        path:"/album/:id",
        exact:true,
        context:"专辑",
        component:Album,
        sbNav:false,
        children:[
        ],
        meta:{
            keywored:"歌手",
            descrieption:"描述",
            isFooter: false
        }
    },
    {//Mv
        to:"/mv/:id",
        path:"/mv/:id",
        exact:true,
        context:"mv",
        component:Mv,
        sbNav:false,
        children:[
        ],
        meta:{
            keywored:"歌手",
            descrieption:"描述",
            isFooter: false
        }
    },
    {//Single
        to:"/single/:id",
        path:"/single/:id",
        exact:true,
        context:"专辑",
        component:Single,
        sbNav:false,
        children:[
        ],
        meta:{
            keywored:"歌手",
            descrieption:"描述",
            isFooter: false
        }
    },
    {//AlbumInfo
        to:"/albuminfo/:id",
        path:"/albuminfo/:id",
        exact:true,
        context:"专辑详情",
        component:AlbumInfo,
        sbNav:false,
        children:[
        ],
        meta:{
            keywored:"专辑详情",
            descrieption:"描述",
            isFooter: false
        }
    },
]
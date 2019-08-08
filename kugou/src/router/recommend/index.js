import Recommend from "../../views/Recommend";
import PlayList from "../../views/Recommend/PlayList"
import Omei from "../../views/Recommend/Omei"
import Rihan from "../../views/Recommend/Rihan"
import Huaijiu from "../../views/Recommend/Huaijiu"
import Douyin from "../../views/Recommend/Douyin"
import Yuese from "../../views/Recommend/Yuese"
import Gushi from "../../views/Recommend/Gushi"
import Jueshi from "../../views/Recommend/Jueshi"
import KuwoYinpin from "../../views/Recommend/KuwoYinpin"
import Moxuan from "../../views/Recommend/Moxuan"
import Tuxiao from "../../views/Recommend/Tuxiao"
import children from './children'
import Tianmi from "../../views/Recommend/Tianmi"
import Xiangqing from "../../views/Recommend/Xiangqing"
import Liuxing from "../../views/Recommend/Liuxing"
import Xliuxing from "../../views/Recommend/Xliuxing"

import Wangluo from "../../views/Recommend/Wangluo"
import Xwangluo from "../../views/Recommend/Xwangluo"

import Yingshi from "../../views/Recommend/Yingshi"
import Xyingshi from "../../views/Recommend/Xyingshi"

import DJ from "../../views/Recommend/DJ"
import Xdj from "../../views/Recommend/Xdj"


import Jingdian from "../../views/Recommend/Jingdian"
import Xjingdian from "../../views/Recommend/Xjingdian"


import Huiyi from "../../views/Recommend/Huiyi"
import Wu from "../../views/Recommend/Wu"
export default [
    {// 推荐
        to:"/",
        path:"/",
        exact:true,
        context:"推荐",
        component:Recommend,
        sbNav:false,
        children:[
            //...children
        ],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter:true
        }
    },
    {//playlist  ----------  每日新歌
        to:"/playlist/:id",
        path:"/playlist/:id",
        exact:true,
        sbNav:false,
        context:"每日新歌",
        component:PlayList,
        children:[],
        meta:{
            keywored:"关键字",
            descrieption:"描述",
            isFooter: false
        }
    },
	 {//playlist  ----------  Omei
	    to:"/Omei/:id",
	    path:"/Omei/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Omei,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	 {//playlist  ----------  Rihan
	    to:"/Rihan/:id",
	    path:"/Rihan/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Rihan,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	//精彩歌曲
	{//playlist  ----------  Rihan
	    to:"/Huaijiu/:id",
	    path:"/Huaijiu/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Huaijiu,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	//精彩歌曲
	{//playlist  ----------  Douyin
	    to:"/Douyin/:id",
	    path:"/Douyin/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Douyin,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Yuese/:id",
	    path:"/Yuese/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Yuese,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Gushi/:id",
	    path:"/Gushi/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Gushi,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Jueshi/:id",
	    path:"/Jueshi/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Jueshi,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/KuwoYinpin/:data",
	    path:"/KuwoYinpin/:data",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:KuwoYinpin,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Tuxiao/:id",
	    path:"/Tuxiao/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Tuxiao,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Moxuan/:id",
	    path:"/Moxuan/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Moxuan,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Tianmi/:id",
	    path:"/Tianmi/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Tianmi,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Xiangqing/:id",
	    path:"/Xiangqing/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Xiangqing,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Liuxing/:id",
	    path:"/Liuxing/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Liuxing,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Xliuxing/:id",
	    path:"/Xliuxing/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Xliuxing,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Wangluo/:id",
	    path:"/Wangluo/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Wangluo,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Xwangluo/:id",
	    path:"/Xwangluo/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Xwangluo,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	
	
	{//playlist  ----------  Yuese
	    to:"/Yingshi/:id",
	    path:"/Yingshi/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Yingshi,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Xyingshi/:id",
	    path:"/Xyingshi/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Xyingshi,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	
	
	{//playlist  ----------  Yuese
	    to:"/DJ/:id",
	    path:"/DJ/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:DJ,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Xdj/:id",
	    path:"/Xdj/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Xdj,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Jingdian/:id",
	    path:"/Jingdian/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Jingdian,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	{//playlist  ----------  Yuese
	    to:"/Xjingdian/:id",
	    path:"/Xjingdian/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Xjingdian,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	
	
	
	{//playlist  ----------  Yuese
	    to:"/Huiyi/:id",
	    path:"/Huiyi/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Huiyi,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
	
	{//playlist  ----------  Yuese
	    to:"/Wu/:id",
	    path:"/Wu/:id",
	    exact:true,
	    sbNav:false,
	    context:"每日新歌",
	    component:Wu,
	    children:[],
	    meta:{
	        keywored:"关键字",
	        descrieption:"描述",
	        isFooter: false
	    }
	},
]
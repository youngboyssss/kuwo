import React from "react";
import {withRouter} from 'react-router-dom' ;
import {
    Route,
    BrowserRouter as Router
} from "react-router-dom"
import "../../assets/css/recommend.css"
import MyNav from '../../router/MyNav'
class Recommend extends React.Component{
    constructor(props){
        super(props);
		
    }
    jump(id){
        console.log(  this.props.history)
        this.props.history.push('/PlayList/'+id)
    }
	Omei(id){
	    console.log(  this.props.history)
	    this.props.history.push('/Omei/'+id)
		
	}
	Rihan(id){
	    console.log(  this.props.history)
	    this.props.history.push('/Rihan/'+id)
		
	}
	Huaijiu(id){
	    console.log(  this.props.history)
	    this.props.history.push('/Huaijiu/'+id)
		
	}
	Douyin(id){
	    console.log(  this.props.history)
	    this.props.history.push('/Douyin/'+id)
		
	}
	Yuese(id){
	    console.log(  this.props.history)
	    this.props.history.push('/Yuese/'+id)
		
	}
	Gushi(id){
	    console.log(  this.props.history)
	    this.props.history.push('/Gushi/'+id)
		
	}
	Jueshi(id){
	    console.log(  this.props.history)
	    this.props.history.push('/Jueshi/'+id)
		
	}
	KuwoYinpin(id){
			this.props.history.push('/KuwoYinpin/'+id)
		
	}
	Tuxiao(id){
			this.props.history.push('/Tuxiao/'+id)
		
	}
	Moxian(id){
			this.props.history.push('/Moxuan/'+id)
		
	}
	Tianmi(id){
			this.props.history.push('/Tianmi/'+id)
		
	}
	Liuxing(id){
			this.props.history.push('/Liuxing/'+id)
		
	}
	Wangluo(id){
			this.props.history.push('/Wangluo/'+id)
		
	}
	Yingshi(id){
			this.props.history.push('/Yingshi/'+id)
		
	}
	DJ(id){
		this.props.history.push('/DJ/'+id)
		
	}
	Jingdian(id){
			this.props.history.push('/Jingdian/'+id)
		
	}
	Huiyi(id){
			this.props.history.push('/mvdetailplay/'+id)
		
	}
	Wu(id){
			this.props.history.push('/mvdetailplay/'+id)
		
	}
	
    render(){
        return (
            <div>
			
				<h4>每日新歌</h4>
                <div className="TuijianCss">
					<p className="mrxg"><img src="http://img2.kwcdn.kuwo.cn/star/upload/7/7/1426644406311_.jpg" onClick={this.jump.bind(this,1082685104)}/></p>
					<p className="mrxg"><img src="http://img1.kwcdn.kuwo.cn/star/upload/10/10/1426644445642_.jpg" onClick={this.Omei.bind(this,967514363)}/></p>
					<p className="mrxg"><img src="http://img4.kwcdn.kuwo.cn/star/upload/8/8/1426644430456_.jpg" onClick={this.Rihan.bind(this,673955055)} /></p>
				</div>
				<h4>歌单推荐</h4>
				<div className="TuijianCsss">
					<div>
						<p className="mrxgs"><img src="http://img1.kwcdn.kuwo.cn/star/userpl2015/98/82/1562165143743_121006198b.jpg" onClick={this.Huaijiu.bind(this,2812566197)}/></p>
						<p className="context">怀旧情歌｜一人一首绝</p>
					</div>
					<div>
						<p className="mrxgs"><img src="http://img2.kwcdn.kuwo.cn/star/userpl2015/81/23/1562660901237_182253281_700.jpg" onClick={this.Douyin.bind(this,2815194854)}/></p>
						<p className="context">抖音2019年六月热门</p>
					</div>
					<div>
						<p className="mrxgs"><img src="http://img1.kwcdn.kuwo.cn/star/userpl2015/98/82/1562122650887_121006198b.jpg" onClick={this.Yuese.bind(this,2811743812)}/></p>
						<p className="context">轻轻静听｜熬夜修仙必</p>
					</div>
					<div>
						<p className="mrxgs"><img src="http://img4.kwcdn.kuwo.cn/star/userpl2015/89/90/1555942836477_472546989b.jpg" onClick={this.Yuese.bind(this,2744262147)}/></p>
						<p className="context">月色正浓｜华夏情歌</p>
					</div>
					<div>
						<p className="mrxgs"><img src="http://img4.kwcdn.kuwo.cn/star/userpl2015/95/40/1561351924618_254780995_700.jpg" onClick={this.Gushi.bind(this,2805825461)}/></p>
						<p className="context">【古诗新唱】听见</p>
					</div>
					<div>
						<p className="mrxgs"><img src="http://img2.kwcdn.kuwo.cn/star/userpl2015/56/91/1560760818369_477539956b.jpg" onClick={this.Jueshi.bind(this,2797560178)}/></p>
						<p className="context">华语爵士精选｜迷醉于</p>
					</div>
				</div>
				<h4>精彩节目</h4>
				<div className="TuijianCssss">
					<div>
						<p className="mrxgs"><img src="http://img2.kwcdn.kuwo.cn/star/userpl2013/67/27/1389668636029_131161167b.jpg" onClick={this.KuwoYinpin.bind(this,1013437783)}/></p>
						<p className="context">酷我音乐调频</p>
					</div>
					<div>
						<p className="mrxgs"><img src="http://img4.kwcdn.kuwo.cn/star/userpl2013/67/27/1389668815807_131161167b.jpg" onClick={this.Tuxiao.bind(this,1013437785)}/></p>
						<p className="context">吐小曹叭新闻</p>
					</div>
					<div>
						<p className="mrxgs"><img src="http://img3.kwcdn.kuwo.cn/star/userpl2013/67/27/1389668498635_131161167b.jpg" onClick={this.Moxian.bind(this,1013437787)}/></p>
						<p className="context">《墨轩日记》音乐小</p>
					</div>
				</div>
				<h4>热门分类</h4>
				<div className="TuijianCsssss">
						<div onClick={this.Tianmi.bind(this)}>
							<p className="kuang">甜蜜</p>
						</div >
						<div onClick={this.Liuxing.bind(this)}>
							<p className="kuang">流行</p>
						</div>
						
						<div onClick={this.Wangluo.bind(this)}>
							<p className="kuang">网络</p>
						</div>
							
						<div onClick={this.Yingshi.bind(this)}>
						<p className="kuang">影视</p>
						</div>
						
						<div onClick={this.DJ.bind(this)}>
						<p className="kuang">DJ</p>
						</div>
						
						<div onClick={this.Jingdian.bind(this)}>
						<p className="kuang">经典</p>
						</div>
					</div>
					<h4>最新Mv</h4>
					<div className="TuijianCssss">
						<div>
							<p className="mrxgw"><img src="http://img4.kwcdn.kuwo.cn/wmvpic/324/83/26/3803013381.jpg" onClick={this.Huiyi.bind(this,57569623)}/></p>
							<p className="context">回忆沙漏(十周年版)</p>
						</div>
						<div>
							<p className="mrxgw"><img src="http://img4.kwcdn.kuwo.cn/wmvpic/324/19/57/3060328884.jpg" onClick={this.Wu.bind(this,55496323)}/></p>
							<p className="contextw">悟</p>
						</div>
					</div>
				</div>
        )
    }
	
}

export default withRouter(Recommend)
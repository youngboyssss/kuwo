import React from "react"
import Swiper from "swiper"
import "Swiper/dist/css/swiper.min.css"
export default class Loop extends React.Component{
	render(){
		return(
			<div>
				<div className="swiper-container">
					<div className="swiper-wrapper">
						<div className="swiper-slide"><img src="http://img2.kwcdn.kuwo.cn/star/upload/10/10/1453347776330_.jpg"/></div>
						<div className="swiper-slide"><img src="http://img4.kwcdn.kuwo.cn/star/upload/4/4/1480909297444_.jpg"/></div>
						<div className="swiper-slide"><img src="http://img1.kwcdn.kuwo.cn/star/upload/10/10/1482312358874_.jpg"/></div>
						<div className="swiper-slide"><img src="http://img4.kwcdn.kuwo.cn/star/upload/14/14/1482482412398_.jpg"/></div>
					
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		 var mySwiper = new Swiper ('.swiper-container', {
			loop: true, // 循环模式选项
			autoplay:{
				autoplayStopOnlast:true,
			},
			 pagination: {
			  el: '.swiper-pagination',
			},
			
		  })        
	}
}
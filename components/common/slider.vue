<template>
	<!-- Slider main container -->
	<div class="swiper-container">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
					<!-- Slides -->
					<div class="swiper-slide" v-for="item in imgArray" :key="item.id">
						<img :src="item.url" />
					</div>
			</div>
			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
	</div>
</template>

<script>
import Swiper from 'swiper'

export default {
	data () {
		return {
			imgArray: [
				{
					id: 1,
					url:'http://cdn.dpjia.com/files/uploads/images/7e7dd990b2083ab73dd27a7f3756244d.jpg'
				},
				{
					id: 2,
					url:'http://cimg.dpjia.com/files/uploads/images/2c507f08eabef883a22ed718117d78d3.png'
				},
				{
					id: 3,
					url:'http://cdn.dpjia.com/files/uploads/images/7e7dd990b2083ab73dd27a7f3756244d.jpg'
				},
				{
					id: 4,
					url:'http://cimg.dpjia.com/files/uploads/images/d70810019b69f834b14cb74d2ddc1c74.png'
				}
			]
		}
	},
	methods: {
		init: function () {
			var mySwiper = new Swiper ('.swiper-container', {
				// Optional parameters
				loop: true,
				autoplay: {
					delay: 5000
				},
				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			})
		}
	},
	mounted() {
		require('~/node_modules/_swiper@4.3.5@swiper/dist/css/swiper.min.css')
		this.init()
	}
}
</script>
<style>
	
</style>

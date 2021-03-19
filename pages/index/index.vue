<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots :autoplay="true" :interval="3000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.pics" mode="widthFix" @click="gopages(item)"></image>
			</swiper-item>
		</swiper>

		<!-- 搜索框 -->
		<!-- #ifdef MP-WEIXIN|H5|APP-PLUS-->
		<button @click="search" class="searchWH">
			<text class="country">全国</text>
			<text class="icon1 icon-jiantou9 iconfont"></text>
			<text class="line">|</text>
			根据城市/出行日程进行搜索
			<text class="icon2 icon-sousuo iconfont"></text>
		</button>
		<!-- #endif -->

		<!-- #ifdef MP-ALIPAY-->
		<view class="searchAl" @click="search"><text class="icon3 icon-sousuo iconfont"></text></view>
		<!-- #endif -->

		<!-- nav板块 -->
		<uni-grid :column="4" :highlight="false" :showBorder="false">
			<uni-grid-item v-for="item in navs" :key="item.title">
				<image :src="item.pics" @click="gopages(item)"></image>
			</uni-grid-item>
		</uni-grid>

		<!-- 试睡专区 -->
		<view class="sleepFather">
			<image :src="sleep" mode="widthFix" class="sleep" @click="goSleep"></image>
		</view>

		<!-- 广告部分 -->
		<view class="adv">
			<image :src="adv[0]" mode="widthFix" @click="goVip"></image>
			<image :src="adv[1]" mode="widthFix" @click="goPrize"></image>
		</view>

		<!-- 首页浮标 -->
		<image :src="floatTip" class="floatTip" mode="widthFix" @click="goVip"></image>


		<!-- 文字部分 -->
		<view class="words">
			<text class="words-up">最新上线</text>
			<uni-notice-bar scrollable="true" single="true" text="全国酒店 , 空房预约 , 现在下单 , 即刻入住 ~"></uni-notice-bar>

		</view>

		<!-- 底部子组件板块 -->
		<view>
			<Preferent></Preferent>
			<Search :cityCode="cityCode" @func="receive"></Search>
			<view v-for="item in res.length" :key="item">
				<Suzhou :res="res[item]" :pageNum="pageNum" :cityCode="cityCode"></Suzhou>
			</view>
			<uni-load-more v-if="!flag" :status="'loading'"></uni-load-more>
			<uni-load-more v-else :status="'noMore'"></uni-load-more>
		</view>

	</view>
</template>

<script>
	import uniBadge from "@/components/uni-ui/uni-badge/uni-badge.vue"
	import uniGrid from "@/components/uni-ui/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-ui/uni-grid-item/uni-grid-item.vue"
	import uniSwiperDot from "@/components/uni-ui/uni-swiper-dot/uni-swiper-dot.vue"
	import uniNoticeBar from '@/components/uni-ui/uni-notice-bar/uni-notice-bar.vue'
	import Search from '@/components/search/search.vue'
	import Preferent from '@/components/preferent/preferent.vue'
	import Suzhou from '@/components/suzhou/suzhou.vue'
	import uniLoadMore from "@/components/uni-ui/uni-load-more/uni-load-more.vue"
	import {
		myRequestPost
	} from "@/utils/zgrequest.js"
	export default {
		data() {
			return {
				pageNum: 1,
				cityCode: "",
				res: [],
				flag: false,
				swipers: [
					{
						id: 0,
						pics: "https://image.ructrip.com/ructrip/1607512632892/双十二每日抢购头图的副本banner.jpg",
						title: "双十二每日抢购",
						path: "/pages/welfare/welfare"
					},
					{
						id: 1,
						pics: "https://image.ructrip.com/ructrip/1607420414465/1204-如程小程序版本更新-12月上新预告.jpg",
						title: "上新预告",
						path: "/pages/hotel/hotel"
					},
					{
						id: 2,
						pics: "https://image.ructrip.com/ructrip/1608128246925/%E5%8F%8C%E5%8D%81%E4%BA%8C%E5%B2%81%E6%9C%AB%E6%9A%96%E5%86%AC%E5%AD%A3banner.jpg",
						title: "冬季福利",
						path: "/pages/winter/winter"
					}
				],
				navs: [{
						pics: "https://image.ructrip.com/ructrip/1607422116032/最新上线@3x.png",
						title: "最新上线",
						path: "/pages/news/news"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422043859/预订指南@3x.png",
						title: "预定指南",
						path: "/pages/reservation/reservation"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422059182/专属客服@3x.png",
						title: "专属客服",
						path: "/pages/customer/customer"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422152381/酒店合集@3x.png",
						title: "酒店合集",
						path: "/pages/hotel/hotel"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422268333/开放城市@3x.png",
						title: "开放城市",
						path: "/pages/cities/cities"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422291089/预订榜单@3x.png",
						title: "预定榜单",
						path: "/pages/reservationList/reservationList"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422363618/天天抽奖@3x.png",
						title: "天天抽奖",
						path: "/pages/prize/prize"
					},
					{
						pics: "https://image.ructrip.com/ructrip/1607422386263/新人福利@3x.png",
						title: "新人福利",
						path: "/pages/welfare/welfare"
					}
				],
				adv: [
					"https://image.ructrip.com/ructrip/1607607428908/【new688】.png",
					"https://image.ructrip.com/ructrip/1607513447380/双十二.jpg"
				],
				floatTip: "https://image.ructrip.com/ructrip/1603255818332/首页浮标1.png",
				sleep: "https://image.ructrip.com/ructrip/1607512681756/试睡专区通栏.jpg",
				iconType: ['success']
			}
		},
		onLoad() {
			this.getword();
		},
		methods: {
			search() {
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},
			gopages(item) {
				uni.navigateTo({
					url: item.path
				})
			},
			goVip() {
				uni.navigateTo({
					url: "/pages/welfare/welfare"
				})
			},
			goPrize() {
				uni.navigateTo({
					url: "/pages/prize/prize"
				})
			},
			goSleep() {
				uni.navigateTo({
					url: "/pages/sleep/sleep"
				})
			},
			receive(code) {
				console.log(code, "999999999")
				this.cityCode = code;

				this.pageNum = 1;
				this.res = [];
				this.getword()
			},
			async getword() {
				let result = await myRequestPost("/sojo.equity.home.listIndexCityMenuRecommend", {
					"pageNum": this.pageNum,
					"pageSize": 3,
					"cityCode": this.cityCode,
					"platFrom": 10,
					"memberCityCode": "320200",
					"storeNoListStr": "",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1608105167000,
					"sign": "2BD4F2E388596CE4EB209B0C440BD3EF"
				});
				this.res = [...this.res, ...result.respData.list]
				this.page = result.respData.pages
				this.res = this.res.filter(item => {
					if (item.storeImage) {
						return item;
					}
				})

			},
			onReachBottom() {
				this.pageNum++;
				if (this.pageNum <= this.page) {
					this.getword();


				} else {
					//没有更多数据了item.length
					this.flag = true;
				}
				/* switch (){
					
				} */
			},

			onPullDownRefresh() {
				uni.showNavigationBarLoading(); //在标题栏中显示加载图标
				uni.request({
					url: 'https://capi.ructrip.com/sojo.equity.home.listIndexCityMenuRecommend',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {},
					success: function(res) {

					},
					fail: function(res) {},
					complete: function(res) {
						uni.hideNavigationBarLoading(); //完成停止加载图标
						uni.stopPullDownRefresh();
					}
				})
			}
		},
		components: {
			uniGrid,
			uniGridItem,
			uniSwiperDot,
			uniNoticeBar,
			Search,
			Preferent,
			Suzhou,
			uniLoadMore

		}
	}
</script>

<style lang="scss">
	.home {
		background-color: #FFFFFF;

		swiper {
			height: 572rpx;

			image {
				width: 750rpx;
			}

		}

		.searchWH {
			margin-top: 10rpx;
			width: 680rpx;
			height: 100rpx;
			line-height: 100rpx;
			border-radius: 45rpx;
			background-color: #FFFFFF;
			color: #9d9d9d;
			position: absolute;
			margin-left: 35rpx;
			top: 410rpx;
			font-size: 28rpx;
			z-index: 999;

			.country {
				font-size: 34rpx;
				font-weight: 600;
				color: #4a4a4a;
				margin-right: 25rpx;
			}

			.icon1 {
				font-size: 25rpx;
				color: #b1b1b1;
				margin-right: 15rpx;
			}

			.icon2 {
				font-size: 33rpx;
				margin-left: 10rpx;
				color: #fd885d;
			}

			.line {
				margin: 0 10rpx;
			}
		}

		.searchAl {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
			background-color: #FFFFFF;
			color: black;
			position: fixed;
			top: 965rpx;
			left: 40rpx;
			z-index: 998;
			text-align: center;
			line-height: 120rpx;

			.icon3 {
				font-size: 50rpx;
				// margin-left: 10rpx;
				color: #fd885d;
			}
		}

		.uni-grid-item {
			text-align: center;

			image {
				width: 185rpx;
				height: 156rpx;
				margin-top: 10rpx;
			}
		}

		.adv {
			text-align: center;

			image {
				width: 330rpx;
				margin-top: 10rpx;
				margin-left: 18rpx;
				margin-right: 18rpx;
			}
		}

		.sleepFather {
			padding: 0 25rpx;
			margin-bottom: 20rpx;

			.sleep {
				width: 700rpx;
			}
		}

		.floatTip {
			width: 150rpx;
			position: fixed;
			top: 950rpx;
			left: 570rpx;
			z-index: 999;
		}

		.words {
			.words-up {
				display: block;
				text-align: left;
				padding-left: 30rpx;
				margin-top: 30rpx;
				margin-bottom: 7rpx;
				color: #ec7041;
				font-weight: 700;
			}

			.words-down {
				display: block;
				text-align: left;
				padding-left: 30rpx;
				margin-bottom: 10rpx;
				color: #9b9b9b;
				font-size: 25rpx;
			}
		}

		.downSwiper {
			swiper {
				height: 380rpx;

				image {
					width: 750rpx;

				}

			}
		}

	}
</style>

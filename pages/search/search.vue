<template>
	<view class="home">
		<!-- 搜索按钮 -->
		<button class="search" @click="goSearch">
			<text class="country">全国</text>
			<text class="icon1 icon-jiantou9 iconfont"></text>
			<text class="city">{{title}}</text>
		</button>

		<!-- 广告部分 -->
		<image :src="url" mode="widthFix" @click="goVip"></image>

		<!-- 城市列表 -->
		<view v-for="item in res.length" :key="item">
			<Suzhou :res="res[item]" :pageNum="pageNum" :cityCode="cityCode"></Suzhou>
		</view>

		<!-- 下拉加载 -->
		<uni-load-more v-if="!flag" :status="'loading'"></uni-load-more>
		<uni-load-more v-else :status="'noMore'"></uni-load-more>
	</view>
</template>

<script>
	import Suzhou from '@/components/suzhou/suzhou.vue'
	import uniLoadMore from "@/components/uni-ui/uni-load-more/uni-load-more.vue"
	import {
		myRequestPost
	} from "@/utils/zgrequest.js"
	export default {
		data() {
			return {
				title: "点击选择城市",
				pageNum: 1,
				cityCode: "",
				res: [],
				flag: false,
				url: "https://image.ructrip.com/ructrip/1608122201728/1204-未购卡-任享会员688+20天会期-通用通览.jpg"
			}
		},
		onLoad(options) {
			this.cityCode = options.cityCode;
			console.log(this.cityCode, "1111111111");
			// this.getPicture();
			// this.getName()

			this.getword()
		},
		methods: {
			goSearch() {
				uni.navigateTo({
					url: "/pages/citiesList/citiesList"
				})
			},
			goVip() {
				uni.navigateTo({
					url: "/pages/welfare/welfare"
				})
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

				this.res = this.res.filter(item => {
					if (item.storeImage) {
						return item;
					}
				})
				this.page = result.respData.pages


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
			Suzhou,
			uniLoadMore
		}
	}
</script>

<style lang="less">
	.home {
		.search {
			margin-top: 20rpx;
			width: 680rpx;
			height: 80rpx;
			line-height: 80rpx;
			border: 1px solid #e0e0e0;
			background-color: #FFFFFF;
			outline: hidden;
			color: #9d9d9d;
			margin-left: 35rpx;
			font-size: 28rpx;
			position: relative;
			padding-left: 30rpx;

			.country {
				font-size: 28rpx;
				font-weight: 600;
				color: #4a4a4a;
				margin-right: 22rpx;
				float: left;
			}

			.icon1 {
				font-size: 18rpx;
				color: #b1b1b1;
				margin-right: 12rpx;
				float: left;
			}

			.city {
				float: left;
			}
		}

		image {
			width: 680rpx;
			margin-top: 20rpx;
			margin-left: 35rpx;
		}
	}
</style>

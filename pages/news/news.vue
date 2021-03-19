<template>
	<view class="home">
		<!-- 顶部标题图片 -->
		<image :src="topurl" mode="widthFix"></image>

		<!-- 子组件轮播图部分 -->
		<view v-for="item in number">
			<swiperAdv v-if="res.length" :res="res[item]"></swiperAdv>
		</view>
	</view>
</template>

<script>
	import swiperAdv from '@/components/swiperAdv/swiperAdv.vue'
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'

	export default {
		data() {
			return {
				topurl: "https://image.ructrip.com/ructrip/1606400279047/34534255.jpg",
				res: [],
				number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

			}
		},

		onLoad() {
			this.getNewAdv()
		},

		methods: {
			async getNewAdv() {
				let result = await myRequestPost("/sojo.equity.store.anniversary.store.list", {
					"pageNum": 1,
					"pageSize": 24,
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1608019849000,
					"sign": "A5AE9FC080623E4CDD6112BD36C13005"
				});
				if (result.respCode === "00") {
					// this.RespData = result.respData
					// console.log(this.RespData)
					this.res = [...this.res, ...result.respData.equityVoPageInfo.list]
					console.log(this.res, "11111111")
				}
			},
		},
		components: {
			swiperAdv
		}
	}
</script>

<style lang="less">
	.home {
		background-color: #7487ee;

		image {
			display: block;
			width: 750rpx;
		}
	}
</style>

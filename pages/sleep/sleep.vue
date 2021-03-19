<template>
	<view class="home">
		<!-- 顶部标题图片 -->
		<image :src="Url" mode="widthFix"></image>

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
				Url: "https://image.ructrip.com/ructrip/1607880634493/otto2试睡专区2.jpg",
				res: [],
				number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

			}
		},

		onLoad() {
			this.getSleep()
		},

		methods: {
			async getSleep() {
				let result = await myRequestPost("/sojo.equity.store.tst.store.list", {
					"pageNum": 1,
					"pageSize": 27,
					"channelCode": null,
					"planNo": null,
					"exclusiveZoneId": "40",
					"trySleepActivityId": "1300608627434864641",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1608089847000,
					"sign": "BF1518CCA320E633C1A40E979B334C5D"
				});
				if (result.respCode === "00") {
					this.res = result.respData.equityVoPageInfo.list
					console.log(this.res, "0000000000000")

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
		background-color: #aac567;

		image {
			display: block;
			width: 750rpx;
		}
	}
</style>

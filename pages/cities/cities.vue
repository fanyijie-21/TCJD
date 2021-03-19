<template>
	<view>
		<view v-for="item in res" class="imageFather">
			<image :src="item.scenicSpotImage" mode="widthFix"></image>
		</view>

	</view>
</template>

<script>
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				res: []
			}
		},
		onLoad(options) {
			this.getPicture()
		},
		methods: {
			async getPicture() {
				let result = await myRequestPost("/sojo.equity.morehot.attractions.list", {
					"cityCode": "320200",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1608037956000,
					"sign": "10D0698D8C83768447166403B7592513"
				});
				if (result.respCode === "00") {
					this.res = result.respData
					console.log(this.res, "11111111111")
				}
			},
		}
	}
</script>

<style lang="less">
	.imageFather {
		padding: 0 35rpx;

		image {
			width: 680rpx;
			margin-bottom: 20rpx;

		}
	}
</style>

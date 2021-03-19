<template>
	<view class="all">
		<view class="content">
			<!-- #ifdef MP-WEIXIN|APP-PLUS|H5 -->
			<rich-text :nodes="attractionsNearby" aline="center"></rich-text>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY-->
			<rich-text :nodes="htmlNodes" aline="center"></rich-text>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import parse from '@/utils/htmlparser.js';
	import {
		formatRichText
	} from '@/utils/format.js'
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				attractionsNearby: [],
				htmlNodes: []
			}
		},
		onLoad(options) {
			this.storeNo = options.storeNo
			this.getPicture()
		},
		methods: {
			async getPicture() {
				let result = await myRequestPost("/sojo.equity.store.detail.v.two", {
					"storeNo": this.storeNo,
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1607425661000,
					"sign": "53E5E8A53FCC179B1006E2A61F2D6A8E"
				});
				console.log(this.attractionsNearby)
				this.attractionsNearby = formatRichText(result.respData.attractionsNearby)
				//#ifdef MP-ALIPAY
				//支付宝小程序rich-text不支持字符串，需要是nodes数组
				this.htmlNodes = parse(this.attractionsNearby)
				//#endif
			}
		}
	}
</script>
<style lang="scss">
	.content {
		padding: 15rpx;
		font-size: 28rpx;
		color: gray;
	}
</style>

<template>
	<view class="all">
		<view class="content">
			<!-- #ifdef MP-WEIXIN|H5|APP-PLUS -->
			<rich-text :nodes="trafficGuide"></rich-text>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY -->
			<rich-text :nodes="htmlNodes"></rich-text>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import parse from '@/utils/htmlparser.js';
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				htmlNodes: [],
				trafficGuide: [],
				storeNo: ""
			}
		},
		onLoad(options) {
			this.storeNo = options.storeNo;
			console.log(options.storeNo)
			console.log(this.storeNo, "44444444")
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
				console.log(this.trafficGuide)
				this.trafficGuide = result.respData.trafficGuide
				//#ifdef MP-ALIPAY
				//支付宝小程序rich-text不支持字符串，需要是nodes数组
				this.htmlNodes = parse(this.trafficGuide)
				//#endif
			}
		}
	}
</script>
<style lang="scss">

</style>

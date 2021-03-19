<template>
	<view>
		<view>
			<!-- #ifdef H5|MP-WEIXIN|APP-PLUS-->
			<rich-text :nodes="content"></rich-text>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY-->
			<rich-text :nodes="htmlNodes"></rich-text>
			<!-- #endif -->
			<view class="bottom">
				<button class="left" @click="tan">加入会员</button>
				<button class="right" @click="tan">为亲友开通</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		myRequestPost
	} from "@/utils/zgrequest.js";
	import parse from '@/utils/html.js'
	import {
		formatRichText
	} from '@/utils/format.js'
	export default {
		data() {
			return {
				content: "",
				arr: [],
				htmlNodes: ""
			}
		},
		mounted() {
			this.getNewsDetail()
		},
		methods: {
			async getNewsDetail() {
				const res = await myRequestPost('/sojo.equity.plantw.detail', {
					"channelCode": 301000000003,
					"memberPlanNo": 301000000003,
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1608343589000,
					"sign": "D94078076E3F17F5E3B0D03DD7262D84"
				})
				for (let i = 0; i < 3; i++) {
					this.content = res.respData[i].content
					this.arr.push(this.content)
				}
				this.content = formatRichText(this.arr.join(','))
				//#ifdef MP-ALIPAY
				this.htmlNodes = parse(this.content)
				// #endif
			},
			tan() {
				uni.showToast({
					title: '开通成功',
					duration: 2000
				});
			}
		}

	}
</script>

<style scoped lang="less">
	image {
		width: 100%;
	}

	.bottom {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #FFFFFF;
		box-shadow: 0 2px;
		padding: 16rpx 0;

		button {
			width: 375rpx;
			height: 90rpx;
			background-color: #fc6315;
			font-size: 36rpx;
			font-weight: 700;
			color: #FFFFFF;
		}
	}
</style>

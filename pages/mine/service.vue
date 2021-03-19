<template>
	<view class="bg1">
		<view class="bg">
			<button type="default" class="qs" @click="goQs">
				<text class="fl1 icon-wenti iconfont" style="color: #fd8d54;"></text>
				<view class="fl">常见问题</view>
				<text class="icon icon-zuojiantou iconfont" style="color: #bcbcbc;"></text>
			</button>
			<button type="default" @click="no">
				<text class="fl1 icon-huida iconfont" style="color: #fd8d54;"></text>
				<view class="fl">在线客服<span>（服务时间：10:00~24:00）</span></view>
				<text class="icon-zuojiantou iconfont icon" style="color: #bcbcbc;"></text>
			</button>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			no() {
				uni.showToast({
					title: '此功能暂未开通',
					duration: 1000,
					icon: 'none'
				});
			},
			goQs() {
				uni.navigateTo({
					url: `/pages/mine/qusetion`,
				})
			}
		}
	}
</script>

<style lang="less">
	page {
		height: 100%;
		background-color: #f8f8f8;
	}

	.bg {
		// background-color: #f8f8f8;
		margin: 80rpx 40rpx;


		button {
			display: flex;
			background-color: #FFFFFF;
			font-size: 30rpx;
			font-weight: 700;
			height: 111rpx;
			line-height: 111rpx;

			.fl {
				text-align: left;
				padding-left: 41rpx;
				width: 520rpx;
			}

			.fl1 {
				flex: 1;
			}

			span {
				font-size: 25rpx;
				font-weight: 400;
				color: #ccc;
			}

			.icon {
				flex: 1;
				font-size: 39rpx;

			}
		}

		.qs {
			margin-bottom: 30rpx;

		}

	}
</style>

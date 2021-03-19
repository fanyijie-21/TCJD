<template>
	<view>
		<view class="view1">
			此功能未开通
		</view>
		<view class="bottom">
			<button class="left" @click="goDengLu()">立即登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			goDengLu() {
				uni.navigateTo({
					url: "/pages/mine/login"
				})
			},
		},
	}
</script>

<style>
	.view1 {
		margin-top: 20px;
		margin-left: 260rpx;

	}

	.bottom {
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #FFFFFF;
		box-shadow: 0 0px;
		padding: 120rpx 0;

	}

	button {
		width: 325rpx;
		height: 90rpx;
		background-color: #fc6315;
		font-size: 36rpx;
		font-weight: 700;
		color: #FFFFFF;
		margin-left: auto;
		margin-right: auto;

	}
</style>

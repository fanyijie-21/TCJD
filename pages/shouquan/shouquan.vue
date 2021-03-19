<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
<template>
	<view class="container">
		<image class="bg-set" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1964961921,3267854311&fm=26&gp=0.jpg"></image>
		<view class="text">
			<text>
				Hi~
				欢迎来到如程
			</text>
		</view>

		<button type="primary" open-type="getUserInfo" @getuserinfo="handleGetUserInfo">微信授权登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			/* getUserInfo(e) {
				// console.log(e)
				const userinfo = e.detail.rawData;
				// console.log(userinfo)
				uni.setStorageSync("userinfo", userinfo);
				uni.navigateBack({
					delta: 1
				});
			} */
			handleGetUserInfo(event) {
				if (event.detail.userInfo) {
					uni.reLaunch({
						url: '/pages/personal/personal?userInfo=' + JSON.stringify(event.detail.userInfo)
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.bg-set {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.text {
		margin: 180rpx 80rpx;
		color: #FFFFFF;
		font-size: 80rpx;
	}

	button {
		margin: 367rpx 60rpx;
		border-radius: 200rpx;
		background-color: #fc6315 !important;
	}
</style>

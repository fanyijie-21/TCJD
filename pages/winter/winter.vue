<template>
	<view class="home">
		<view class="imgFather">
			<image :src="url1" mode="widthFix" class="img1"></image>
			<view class="img2">
				<image :src="url2" mode="widthFix" @click="goSleep"></image>
			</view>
		</view>

		<view class="footer">
			<!-- 倒计时部分 -->
			<!-- 广告部分 -->
			<view class="countdownPart">
				<view class="countdown-words">
					<text>距结束还剩:</text>
				</view>
				<view class="countdown">
					<uni-countdown color="#FFFFFF" background-color="#e3506e" border-color="#e3506e" :day="29" :hour="23" :minute="59"
					 :second="59"></uni-countdown>
				</view>

			</view>

			<image :src="url3" mode="widthFix"></image>
			<text class="text1">任享会员12个月+再送30天会期</text>
			<text class="text2">会期内可预订1房2晚</text>
			<text class="text3">权益详情></text>

			<view class="VIP">
				<button type="warn" @click="tan">加入会员</button>
			</view>

		</view>
	</view>
</template>

<script>
	import uniCountdown from '@/components/uni-ui/uni-countdown/uni-countdown.vue'

	export default {
		data() {
			return {
				url1: "https://image.ructrip.com/ructrip/1608123937914/双十二岁末年冬季头图 2.jpg",
				url2: "https://image.ructrip.com/ructrip/1608177807197/试睡专区入口.png",
				url3: "https://image.ructrip.com/ructrip/1608124845577/抢购会场sku.png"
			}
		},
		methods: {
			goSleep() {
				uni.navigateTo({
					url: "/pages/sleep/sleep"
				})
			},
			tan() {
				uni.showToast({
					title: '开通成功',
					duration: 2000
				});
			}
		},
		components: {
			uniCountdown


		}
	}
</script>

<style lang="less">
	.home {
		background-color: #f5e9ec;

		.imgFather {
			position: relative;

			.img1 {
				width: 750rpx;
			}

			.img2 {
				margin-left: 25rpx;
				position: absolute;
				top: 550rpx;

				image {
					width: 700rpx;
					z-index: 998;
				}
			}
		}

		.footer {
			position: relative;
			width: 700rpx;
			height: 650rpx;
			background-color: #FFFFFF;
			margin: 0 auto;
			margin-top: 160rpx;
			border-radius: 20rpx;
			padding-top: 35rpx;

			.countdownPart {
				width: 470rpx;
				height: 100rpx;
				margin: 0 auto;


				.countdown-words {
					display: inline-block;
					width: 170rpx;
					height: 100rpx;

					float: left;

					text {
						display: block;
						margin-top: 11rpx;
						font-size: 30rpx;
						font-weight: 600;
					}
				}

				.countdown {
					display: inline-block;
					width: 300rpx;
					height: 100rpx;
					margin-top: 3rpx;
					float: left;
				}
			}

			image {
				width: 700rpx;
			}

			.text1 {
				font-size: 35rpx;
				display: block;
				margin-top: 15rpx;
				margin-left: 30rpx;
			}

			.text2 {
				font-size: 30rpx;
				display: inline-block;
				margin-left: 30rpx;
				margin-top: 10rpx;
				color: #9b9b9b;

			}

			.text3 {
				font-size: 30rpx;
				display: inline-block;
				float: right;
				margin-right: 30rpx;
				margin-top: 10rpx;
				color: #e3506e;

			}

			.VIP {
				button {
					margin-left: 15rpx;
					width: 670rpx;
					background-color: #fc6315;
					top: 30rpx;
				}
			}
		}

	}
</style>

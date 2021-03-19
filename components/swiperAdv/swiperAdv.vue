<template>
	<view>
		<view class="body" @click="hotel(res)">
			<swiper indicator-dots :autoplay="true" :interval="4500" circular>
				<swiper-item v-for="item in res.storeImage.split(',')" :key="item">
					<image :src="item" mode="widthFix"></image>
				</swiper-item>
			</swiper>

			<view class="child">
				<text class="sellingLabel">{{res.sellingLabel.replace(/,/g,"&nbsp;/")}}</text>
				<view class="subTitleFather">
					<text class="subTitle">{{res.subTitle}}</text>
				</view>

				<view class="storeNameFather">
					<text class="storeName">{{res.storeName}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['res'],
		data() {
			return {

			}
		},

		methods: {
			hotel(res) {
				uni.navigateTo({
					url: "/pages/hotelDetails/hotelDetails?storeNo=" + res.storeNo,
				});

			}
		}
	}
</script>

<style lang="less">
	.body {
		// background-color: #000000;
		padding: 0 35rpx;
		margin-bottom: 25rpx;

		swiper {
			height: 380rpx;

			image {
				width: 680rpx;

			}
		}

		.child {
			width: 640rpx;
			height: 200rpx;
			background-color: #FFFFFF;
			padding: 20rpx;

			.sellingLabel {
				padding: 5rpx;
				width: 150rpx;
				height: 30rpx;
				font-size: 12px;
				border: 1px solid #C8C7CC;
				color: gray;
				border-radius: 12rpx;
			}

			.subTitleFather {
				margin-top: 8rpx;

				.subTitle {
					margin-top: 8rpx;
					font-size: 45rpx;
				}
			}

			.storeNameFather {
				margin-top: 8rpx;

				.storeName {
					color: grey;
				}
			}


		}
	}
</style>

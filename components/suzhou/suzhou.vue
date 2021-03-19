<template>
	<view class="contents" @click="hotel(res)">
		<view class="content1">
			<swiper :interval="4500" circular>
				<template v-if="res.storeImage">
					<swiper-item v-for="item in res.storeImage.split(',')" :key="item">
						<image :src="item" mode="widthFix"></image>
					</swiper-item>
				</template>
			</swiper>
		</view>
		<view class="word">
			<view class="laber">
				<text class="reserve">{{res.storeReserve||"本月可订"}}</text>
				<template v-if="res.sellingLabel">
					<text v-for="item in res&&res.sellingLabel&&res.sellingLabel.split(',')">{{item}}</text>
				</template>
			</view>
			<view class="title">
				{{res.subTitle}}
			</view>
			<view class="word1">
				<text>{{res.storeName}}</text>
				<text>特色度假酒店</text>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		myRequestPost
	} from "@/utils/zgrequest.js"
	export default {
		props: ['res'],
		data() {
			return {
				storeImage: []
			}
		},

		methods: {

			hotel(res) {
				uni.navigateTo({
					url: "/pages/hotelDetails/hotelDetails?storeNo=" + res.storeNo,
				});

			},


		}
	}
</script>

<style lang="less">
	.contents {
		width: 710.28rpx;
		margin: auto;
		margin-top: 30rpx;
		border: 1rpx solid #EEEEEE;

		.content1 {
			height: 404rpx;

			swiper {
				height: 404rpx;

				image {
					width: 712.28rpx;
					height: 404rpx;
					margin-left: 1rpx;
					margin-top: 1rpx;

				}
			}

		}

		.word {
			margin-top: 35rpx;
			margin-left: 20rpx;

			.laber {

				display: flex;

				.reserve {
					color: #ff6c36;
					background-color: #fff6f3;
				}

				text {
					overflow: hidden;
					white-space: nowrap;
					color: #777777;
					padding: 5rpx;
					display: block;
					font-size: 25rpx;
					background-color: #f8f8f7;
					margin-right: 8rpx;

				}
			}

			.title {
				color: #00004f;
				margin-top: 20rpx;
				display: block;
				font-size: 42rpx;
				font-weight: 300;
				margin-bottom: 20rpx;
			}
		}

		.word1 {
			display: flex;

			text {
				color: #b7b7b7;
				display: block;
				margin-bottom: 40rpx;
			}
		}
	}
</style>

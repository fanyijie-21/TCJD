<template>
	<view class="sharebtn">
		<view class="uni-share">
			<view class="words"><text>听说，可爱的人都很喜欢分享哦~</text></view>
			<view class="uni-share-content">
				<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box">
					<view class="uni-share-content-image">
						<image :src="item.icon" class="content-image" />
					</view>
					<text class="uni-share-content-text">{{ item.text }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bottomData: [{
						text: '微信好友',
						icon: '/static/icons/weixin.png',
						name: 'wx'
					},
					{
						text: '生成美图',
						icon: '/static/icons/copy.png',
						name: 'copy'
					},

				],

			}
		},

		methods: {

		}
	}
</script>

<style lang="scss">
	/* 底部分享 */
	.sharebtn {
		background-color: #FFFFFF;
		height: 300rpx;

		.uni-share {
			width: 690rpx;
			margin: 30rpx;
			border-radius: 30rpx;
			/* #ifndef APP-NVUE */
			display: flex;
			flex-direction: column;
			/* #endif */
			background-color: #fff;

			.words {
				font-size: 30rpx;
				color: grey;
				text-align: center;
				margin-top: 25rpx;
			}

			.uni-share-content {
				/* #ifndef APP-NVUE */
				display: flex;
				/* #endif */
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: center;
				overflow-x: scroll;
				padding: 15px 50rpx;

				.uni-share-content-box {
					/* #ifndef APP-NVUE */
					display: flex;
					/* #endif */
					flex-direction: column;
					align-items: center;
					margin-right: 60rpx;

					&:nth-last-child(1) {
						margin-right: 0;
					}

					.uni-share-content-image {
						/* #ifndef APP-NVUE */
						display: flex;
						/* #endif */
						flex-direction: row;
						justify-content: center;
						align-items: center;
						width: 110rpx;
						height: 110rpx;
						overflow: hidden;
						border-radius: 50%;
						// background-color: orange;


						.content-image {
							width: 90rpx;
							height: 90rpx;
						}
					}

					&:nth-last-child(1) {
						.uni-share-content-image .content-image {
							width: 50rpx !important;
							height: 50rpx !important;
						}
					}

					.uni-share-content-text {
						font-size: 26rpx;
						color: #333;
						padding-top: 5px;
						padding-bottom: 10px;
						margin-top: 20rpx;
					}
				}
			}
		}
	}
</style>

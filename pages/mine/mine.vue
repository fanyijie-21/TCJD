<template>

	<view class="container">

		<view class="user-section">
			<view class="top">
				<view class="shezhi">
					<view class="iconfont icon-xianxingtubiao_huabanfuben tit1 " @tap="toSetting"></view>
					<view class="iconfont icon-erweima1 tit1 jl" @tap="toMyQR"></view>
				</view>
				<view class="user-info-box" @click="goLogin">
					<view class="portrait-box">
						<image class="portrait" :src="userinfo.avatarUrl || '/static/missing-face.png'"></image>
					</view>
					<view class="info-box">
						<text class="username">
							{{userinfo.nickName || '注册/登录'}}
						</text>
					</view>

				</view>
			</view>

			<view class="vip-card-box">
				<view class="tit">
					<text class="yticon icon-iLinkapp-"></text>
					如程会员权益
				</view>
				<view class="tb">
					<view class="cell1">
						<view class="zheng">
							<image :src="require('../../static/image/tuceng1.png')" mode="widthFix" class="img"></image>
						</view>
						<text class="tit1">全年免费住</text>
					</view>
					<view class="cell2">
						<view class="zheng">
							<image :src="require('../../static/image/tuceng2.png')" mode="widthFix" class="image1"></image>
						</view>
						<text class="tit1">节假日通用</text>
					</view>
					<view class="cell3">
						<view class="zheng">
							<image :src="require('../../static/image/tuceng3.png')" mode="widthFix" class="image1"></image>
						</view>
						<text class="tit1">节假日通用</text>
					</view>
					<view class="cell4">
						<view class="zheng">
							<image :src="require('../../static/image/tuceng4.png')" mode="widthFix" class="image1"></image>
						</view>
						<text class="tit1">房型无限制</text>
					</view>

				</view>
				<button class="get_vip" type="default" @click="goVip">
					立即领取特权
				</button>
			</view>
		</view>

		<view class="cover-container">
			<image class="arc" src="/static/arc.png"></image>


		</view>
		<!-- 订单 -->
		<view class="order-section">
			<view class="order-item" @click="goCoupon">
				<text class="iconfont icon-youhuiquan red"></text>
				<text>优惠券</text>
			</view>
			<view class="order-item" @click="no">
				<text class="iconfont icon-jifen red"></text>
				<text>积分</text>
			</view>
			<view class="order-item" @click="no">
				<text class="iconfont icon-shoucang red"></text>
				<text>收藏</text>
			</view>
			<view class="order-item" @click="no">
				<text class="iconfont icon-shu red"></text>
				<text>笔记</text>
			</view>
		</view>
		<!-- 关注 -->
		<view class="attention">
			<view class="iconfont icon-weibiaoti1" style="color: #ea4204; font-size: 15px;"></view>
			<view class="text">关注如程微信公众号，酒店上新不错过!</view>
			<button class="guanzhu" plain>去关注</button>
		</view>
		<!-- 广告 -->
		<view class="ad">
			<image src="https://image.ructrip.com/ructrip/1607675633548/%E4%BB%BB%E4%BA%AB%E4%BC%9A%E5%91%98688+45%E5%A4%A9%E4%BC%9A%E6%9C%9F-%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83%E9%80%9A%E6%A0%8F.png"
			 mode="widthFix" @click="goVip"></image>
		</view>
		<!-- 中心 -->
		<view class="history-section">
			<view icon="icon-iconfontweixin" class="xian" @click="goCenter">
				兑换中心
				<text class="fr icon-zuojiantou iconfont" style="color: #bcbcbc;"></text>
			</view>
			<view icon="icon-dizhi" class="xian" @click="goService">
				我的客服
				<text class="fr icon-zuojiantou iconfont" style="color: #bcbcbc;"></text>
			</view>
			<view icon="icon-pinglun-copy" class="xian" @click="goVip">
				账户余额
				<text class="fr icon-zuojiantou iconfont" style="color: #bcbcbc;"></text>
			</view>
			<view icon="icon-pinglun-copy" class="xian" @click="goHands">
				酒店合作
				<text class="fr icon-zuojiantou iconfont" style="color: #bcbcbc;"></text>
			</view>
			<view icon="icon-shoucang_xuanzhongzhuangtai" class="content" @click="goNotice">
				程客须知
				<text class="fr icon-zuojiantou iconfont" style="color: #bcbcbc;"></text>
			</view>
		</view>
	</view>


	</view>
</template>
<script>
	export default {
		components: {

		},
		data() {
			return {
				userinfo: {},
			}
		},
		onShow() {
			const userinfo = uni.getStorageSync("userinfo");
			this.userinfo = JSON.parse(userinfo)
		},
		methods: {
			goVip() {
				uni.navigateTo({
					url: "/pages/mine/join"
				})
			},
			toMyQR() {
				uni.navigateTo({
					url: '/pages/mine/myQR'
				})
			},
			toSetting() {
				uni.navigateTo({
					url: '/pages/mine/setting'
				})
			},
			goLogin() {
				uni.navigateTo({
					url: `/pages/mine/login`,
				})
			},
			goVip() {
				uni.navigateTo({
					url: `/pages/mine/join`,
				})
			},
			no() {
				uni.showToast({
					title: '此功能暂未开通',
					duration: 1000,
					icon: 'none'
				});
			},
			goCoupon() {
				uni.navigateTo({
					url: `/pages/mine/coupon`,
				})
			},
			goCenter() {
				uni.navigateTo({
					url: `/pages/mine/center`,
				})
			},
			goService() {
				uni.navigateTo({
					url: `/pages/mine/service`,
				})
			},
			goHands() {
				uni.navigateTo({
					url: `/pages/mine/hands`,
				})
			},
			goNotice() {
				uni.navigateTo({
					url: `/pages/mine/notice`,
				})
			}
		}
	}
</script>
<style lang='scss'>
	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	%section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		background: #fff;
		border-radius: 10rpx;
	}

	.container {
		background-color: #f5f5f5;
		height: 100%;
	}

	.user-section {
		height: 790rpx;
		padding: 50rpx 15rpx 0;
		position: relative;
		background-color: #3f3737;
	}

	.shezhi {
		margin-top: 45rpx;
		height: 70rpx;
		display: flex;
		align-items: center;
	}

	.jl {
		margin-left: 40rpx;
	}

	.user-info-box {
		height: 212rpx;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;
		padding: 0 40rpx 20rpx;

		.portrait {
			width: 100rpx;
			height: 100rpx;
			border: 5rpx solid #fff;
			border-radius: 50%;
		}

		.username {
			font-size: 38rpx;
			color: #e4e3e3;
			margin-left: 20rpx;
		}
	}

	.vip-card-box {
		display: flex;
		flex-direction: column;
		color: #f7d680;
		height: 430rpx;
		background: linear-gradient(to top left, rgb(0, 0, 0), rgba(0, 0, 0, .8));
		overflow: hidden;
		position: relative;
		padding: 20rpx 24rpx;

		.tb {
			display: flex;

			.zheng {
				width: 135rpx;
				height: 135rpx;
				border-radius: 50%;
				margin-left: 30rpx;

				.image1 {
					width: 110rpx;
				}

				.img {
					width: 110rpx;
				}
			}

			.tit1 {
				font-size: 24rpx;
				color: rgb(231, 231, 231);
				margin: 13rpx 0;
				padding: 20rpx 0 0 26rpx;
				width: 50rpx;
			}
		}

		.get_vip {
			width: 97%;
			height: 85rpx;
			margin-top: 40rpx;
			background-color: #ff6c36;
			color: #ffebe5;
		}

		.b-btn {
			position: absolute;
			right: 20rpx;
			top: 16rpx;
			width: 132rpx;
			height: 40rpx;
			text-align: center;
			line-height: 40rpx;
			font-size: 22rpx;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}

		.tit {
			font-size: 28rpx;
			color: #fff;
			margin: 28rpx 0;

			.yticon {
				color: #f6e5a3;
				margin-right: 16rpx;
			}
		}

		.e-b {
			font-size: 24rpx;
			color: #d8cba9;
			margin-top: 10rpx;
		}
	}

	.cover-container {
		background: #f8f8f8;
		margin-top: -19rpx;
		padding: 0 30rpx;
		position: relative;
		background: #f5f5f5;

		.arc {
			position: absolute;
			left: 0;
			top: 8rpx;
			width: 100%;
			height: 38rpx;
		}
	}

	.tj-sction {
		.tj-item {
			flex-direction: column;
			height: 140rpx;
			font-size: 24rpx;
			color: #75787d;
		}

		.num {
			font-size: 32rpx;
			color: #303133;
			margin-bottom: 8rpx;
		}
	}

	.order-section {
		@extend %section;
		padding: 28rpx 0;
		margin: 46rpx 17rpx 11px;

		.red {
			color: #ea4204;
		}

		.order-item {
			@extend %flex-center;
			width: 120rpx;
			height: 120rpx;
			border-radius: 10rpx;
			font-size: 26rpx;
			font-weight: 700;
			color: #303133;
		}

		.yticon {
			font-size: 48rpx;
			margin-bottom: 18rpx;
			color: #fa436a;
		}

		.icon-shouhoutuikuan {
			font-size: 44rpx;
		}
	}

	.attention {
		display: flex;
		height: 84rpx;
		background-color: #fff;
		margin: 0 17rpx;
		justify-content: center;
		align-items: center;
		font-size: 12px;
		margin-bottom: 12px;

		.text {
			color: #949494;
		}

		.guanzhu {
			padding: 0;
			width: 115rpx;
			height: 50rpx;
			border: 1px solid #fc7530;
			font-size: 12px !important;
			color: #fc7530;
			line-height: 50rpx;
			margin-left: 37px;
		}
	}

	.ad {
		margin: 0 17rpx;

		image {
			width: 100%;
		}
	}

	.history-section {
		padding-left: 16rpx 0 0;
		margin: 20rpx 17rpx -4rpx;
		background: #fff;
		border-radius: 10rpx;
		font-weight: 700;
		height: 540rpx;
		flex-direction: column;

		view {
			margin-left: 34rpx;
			margin-right: 34rpx;
			height: 105rpx;
			line-height: 105rpx;
			font-size: 30rpx;

			.fr {
				float: right;
				line-height: 99rpx;
			}
		}

		.jl {
			margin-left: 20rpx;
		}

		.xian {
			border-bottom: 2px solid #fafafa !important;
		}

		.content {
			padding-bottom: var(--window-bottom);
		}
	}
</style>

<template>
	<view>
		<view class="lunbo">
			<swiper indicator-dots :autoplay="false" indicator-active-color="white">
				<swiper-item v-for="item in swipers" :key="item.id">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="bigf">
			<view class="big">
				<view class="content">
					<view class="link">
						<image :src="res.avatarLink"></image>

					</view>
					<view class="nickname"><text>{{res.nickname}}</text></view>
					<view class="zan" @click="zan">
						<uni-icons type="heart" size="25" :style="flag?'color:red':''"></uni-icons>
					</view>
					<view class="share" @click="open">
						<uni-icons type="redo" size="25" color="#636e72"></uni-icons>
					</view>
				</view>
				<view class="word"><text>{{res.evaluation}}</text></view>

				<!-- middle -->
				<view class="middle" @click="hotel(res)" v-if="wor">
					<view class="left">
						<image :src="res.storeImage"></image>
					</view>
					<view class="right">
						<view class="zi">
							<text>{{wor[0]||"摩洛哥风格"}}</text>
							<text class="ti">/</text>
							<text class="ti">{{wor[1]||"空中花园" }}</text>
							<text class="ti">/</text>
							<text class="ti">{{wor[2]||"不接待港澳台及外宾"}}</text>
						</view>
						<view class="hotel">{{res.storeName}}</view>
						<view class="area">{{res.city||"无锡市"}} {{res.area||"滨湖区"}}</view>
					</view>
				</view>
				<!-- 为你推荐 -->
				<view class="recommend"><text>为你推荐</text></view>
				<view class="bottom">

					<view class="bottomitem" v-for="item in data" :key="item.id">
						<!-- <text>为你推荐</text> -->
						<view class="bottpic">
							<image :src="item.defaultImage" @click="itemchange(item)"></image>
						</view>
						<view><text class="botthotel">{{item.storeName||"大湖原舍特色度假酒店"}}</text></view>
						<view class="bottwor">
							<text class="bottword">{{item.evaluation}}</text>
						</view>
						<view class="bottbottom">
							<view class="botthead">
								<image :src="item.avatarLink"></image>
							</view>
							<view class="botthaedname">
								<text>{{item.nickname}}</text>
							</view>
							<view class="xinheart" @click="zan">
								<uni-icons type="heart" size="18" :style="flag?'color:red':''"></uni-icons>
							</view>
						</view>
					</view>
				</view>

				<!-- 分享 -->
				<uni-popup ref="sharepopup" type="bottom">
					<!-- <share-btn :sharedataTemp="sharedata"></share-btn> -->
					<share-btn></share-btn>
				</uni-popup>

			</view>
		</view>
	</view>
</template>

<script>
	import shareBtn from '@/components/share-btn/share-btn.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniIcons from "@/components/uni-ui/uni-icons/uni-icons.vue";
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {

				id: "13090",
				pageNum: 1,
				swipers: [],
				wor: [],
				res: {},
				data: [],
				flag: false
			}
		},
		components: {
			uniIcons,
			uniPopup,
			shareBtn
		},
		onLoad(options) {
			this.id = options.id;
			this.getSwipers();
			// this.getRecommend();
		},
		methods: {
			hotel(res) {
				uni.navigateTo({
					url: "/pages/hotelDetails/hotelDetails?storeNo=" + res.storeNo,
				});
			},
			itemchange(item) {
				uni.navigateTo({
					url: '/pages/finddetail/finddetail?id=' + item.id
				})
			},
			async getSwipers() {

				let result = await myRequestPost("/sojo.order.evaluation.get.detail", {
					"id": this.id,
					"userGuid": "rc61007bb64721f4f46f68",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "win10",
					"timestamp": 1607935973000,
					"sign": "C6203604290E8A2FB9C943DE3DA85F24"
				});
				// console.log(result,'gggg')
				var res = result.respData;
				this.res = res;
				// console.log(res, 'ttttttt')
				// console.log(res.avatarLink,'tutut')
				var str = result.respData.evaluationImage;
				var arr = str.split(",");
				// console.log(arr, "wwewqeqw")
				this.swipers = arr;
				var words = res.sellingLabels;
				this.wor = words
				this.getRecommend(result.respData.storeNo)
			},
			// 为你推荐
			async getRecommend(storeNo) {
				let Recommend = await myRequestPost("/sojo.order.evaluation.get.detailListByStoreNo", {
					"pageSize": 6,
					"pageNum": 1,
					"orderByType": 10,
					"userGuid": "rc1bc0651c1d5135f07110",
					"evaluationId": this.id,
					"storeNo": storeNo,
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 7 x64",
					"timestamp": 1608259937000,
					"sign": "A647CC80514663408AC8F994682F6154"

				});
				// console.log(Recommend, "rrrrrrrrr")
				var arr1 = Recommend.respData.list;
				this.data = arr1;
				// console.log(this.data, "ddddddddd")

			},
			zan() {
				this.flag = !this.flag;
				console.log(this.flag)
			},

			open: function() {
				this.$refs.sharepopup.open();
			},
		}
	}
</script>

<style lang="scss">
	.lunbo {
		swiper {
			height: 580rpx;

			image {
				width: 750rpx;
				height: 580rpx;
			}
		}
	}

	// .bigf {
	// 	position: relative;

	.big {
		height: 100%;
		border: 1px solid white;
		border-radius: 10px 10px 0px 0px;
		background-color: white;
		position: relative;
		top: -16rpx;

		.content {
			display: flex;
			margin-top: 70rpx;
			padding: 0 25rpx;

			.link {
				// flex: 1;
				height: 70rpx;

				image {
					width: 70rpx;
					height: 70rpx;
					border-radius: 50%;
				}

			}

			.nickname {
				flex: 1;
				font-size: 30rpx;
				height: 70rpx;
				line-height: 70rpx;
				margin-left: 30rpx;
			}

			.zan {
				margin-right: 50rpx;
			}
		}

		.word {
			font-size: 35rpx;
			margin-top: 50rpx;
			padding: 0 25rpx;
		}

	}

	// }

	.middle {
		display: flex;
		width: 700rpx;
		height: 180rpx;
		// border: 1px solid red;
		background-color: #FFFFFF;
		margin-top: 50rpx;
		margin-left: 25rpx;
		border-top: 1px solid rgb(238, 238, 238);
		box-shadow: 12px 12px 12px -12px #000;

		.left {
			image {
				width: 200rpx;
				height: 100%;
			}
		}

		.right {
			display: flex;
			flex-direction: column;
			margin-top: 15rpx;
			margin-left: 45rpx;
			overflow: hidden;

			.zi {
				overflow: hidden;
				white-space: nowrap;
				width: 100%;
				font-size: 20rpx;
				color: rgb(252, 99, 21);

				.ti {
					display: inline-block;
					margin-left: 6rpx;
				}
			}

			.hotel {
				font-size: 30rpx;
				margin-top: 20rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.area {
				font-size: 20rpx;
				color: lightgrey;
				margin-top: 20rpx;
			}
		}
	}

	.recommend {
		font-size: 30rpx;
		font-weight: 700;
		margin-top: 80rpx;
		margin-left: 25rpx;
	}

	.bottom {
		box-sizing: border-box;
		display: flex;
		padding: 0 15rpx;
		justify-content: space-between;
		overflow: hidden;
		flex-wrap: wrap;
		margin-top: 50rpx;
		height: auto;
		// box-shadow: 12px 12px 12px -12px #000;
		background-color: rgb(243, 243, 243);

		.bottomitem {
			position: relative;
			width: 355rpx;
			margin-bottom: 20rpx;
			background-color: #FFFFFF;
			box-sizing: border-box;

			.bottpic {
				// background: #FFFFFF;
				overflow: hidden;

				image {
					width: 100%;
					height: 360rpx;
					border-top-left-radius: 10rpx;
					border-top-right-radius: 10rpx;
					width: 100%;
					// mix-width: 330rpx;
					margin: 0 0;
				}

			}


			.botthotel {
				position: absolute;
				left: 20rpx;
				top: 280rpx;
				width: 300rpx;
				height: 40rpx;
				font-size: 25rpx;
				color: white;
				background-color: rgba(118, 115, 114, 0.7);
				border-radius: 20rpx;
				text-align: center;
				line-height: 40rpx;
				overflow: hidden;
			}

			.bottwor {

				width: 320rpx;
				height: 40rpx;
				font-size: 28rpx;
				color: rgb(74, 74, 74);
				padding: 16rpx 0;

				.bottword {
					display: inline-block;
					width: 300rpx;
					height: 80rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-left: 20rpx;
				}
			}

			.bottbottom {
				display: flex;
				height: 50rpx;
				position: relative;
				margin-top: 30rpx;
				margin-left: 20rpx;
				overflow: hidden;

				.botthead {
					image {
						width: 40rpx;
						height: 40rpx;
						position: absolute;
						top: 0px;
						line-height: 50rpx;
						border-radius: 50%;

					}
				}

				.botthaedname {
					text {
						width: 230rpx;
						height: 40rpx;
						color: rgb(193, 193, 193);
						font-size: 25rpx;
						position: absolute;
						left: 50rpx;
						top: -8rpx;
						line-height: 50rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}

				.xinheart {
					margin-left: 280rpx;
				}
			}

		}
	}
</style>

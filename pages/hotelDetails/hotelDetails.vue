<template>
	<view class="content">
		<!-- 背景图片部分 -->
		<view class="picture" @click="cakan(photo)">
			<image :src="res" mode="widthFix"></image>
		</view>
		<view class="all">
			<!-- 分享、收藏、介绍 -->
			<view class="sellingLabel">
				<text>{{sellingLabel}}</text>
				<view class="xing">
					<uni-icons @click="zan" type="heart" size="25" :style="flag?'color:red':''"></uni-icons>
				</view>
				<view class="fen">
					<uni-icons type="redo" size="25" color="#636e72"></uni-icons>
				</view>
			</view>
			<!-- 宾馆名称 -->
			<view class="subTitle">
				{{subTitle}}
			</view>
			<!-- 酒店地址、客服 -->
			<view class="ab">
				<view class="storeName">
					{{storeName}}
					<view class="area" @click="map(latitude)">
						{{city}}
						{{area}}
						{{address}}
						<!-- <image class="ke" src="../../images/客服.png"></image> -->
					</view>
				</view>
			</view>

			<view class="jiaotong" @click="jiaotong(storeNo)">
				查看交通指南
			</view>
			<view class="huiyuan">
				<image :src="pics" mode="widthFix" @click="goVip"></image>
			</view>
			<!-- {{JSON.stringify(storeModuleInfoVos)}} -->
			<view class="canguan">
				参观这间酒店
			</view>
			<view class="storeModuleInageVos" v-for="item in storeModuleInfoVos" :key="item.moduleId">
				<!-- {{item.title}} -->
				<view class="san">
					<view v-for="item2 in item.storeModuleImageVos">
						<image :src="item2.imageUrl"></image>
					</view>
				</view>
				<view class="gongqu">
					{{item.title}}
				</view>
			</view>
			<view class="cakan" @click="cakan(photo)">
				查看全部照片
			</view>
			<view class="youwan">
				游玩攻略
			</view>
			<!-- {{JSON.stringify(storeModuleInfoVos)}} -->
			<view class="attractionsImage">
				<image :src="attractionsImage" mode="widthFix"></image>
			</view>
			<view class="attractionsTitle">
				{{attractionsTitle}}
			</view>
			<view class="gengduo" @click="gengduo(geng)">
				查看更多
			</view>
			<view class="ruzhu">
				入住笔记
			</view>
			<!-- {{JSON.stringify(defaultImage)}} -->
			<view class="zz">
				<view class="dddd" v-for="item in defaultImageList" :key="item.storeNo">
					<image :src="item.defaultImage" class="photo"></image>
					<text class="title">{{item.title}}</text>
					<text class="nickname">{{item.nickname}}</text>
					<!-- <text class="title">{{item.title}}</text>
					<text class="nickname">{{item.nickname}}</text> -->
				</view>
				<!-- <view class="title" v-for="item in defaultImageList" :key="item.storeNo">
					{{item.title}}
				</view>
				<view class="nickname" v-for="item in defaultImageList" :key="item.storeNo">
					{{item.nickname}}
				</view> -->
			</view>
			<!-- <swiper :interval="3000" v-for="item in this.defaultImageList">
				<swiper-item class="border">
					<image :src="item.defaultImage" class="photo" ></image>
					<text class="title">{{item.title}}</text>
					<text class="nickname">{{item.nickname}}</text>
					
					<view class="title" v-for="item in defaultImageList" :key="item.storeNo">
						{{item.title}}
					</view>
					<view class="nickname" v-for="item in defaultImageList" :key="item.storeNo">
						{{item.nickname}}
					</view>
				</swiper-item>
			</swiper> -->
			<!-- <view class="ruzhu1">
				<view class="defaultImage" v-for="item in defaultImageList" :key="item.storeNo">
					<image :src="item.defaultImage"></image>
				</view>

			</view> -->

			<!-- <view class="quanbu">
				查看全部
			</view> -->
			<view class="dingfang">
				订房必读
			</view>
			<view class="enterNoticeSubTitle">
				{{enterNoticeSubTitle}}
			</view>
			<view class="xiangqing" @click="xiangqing(xiang)">
				查看详情
			</view>
		</view>
	</view>

</template>

<script>
	// import uniFav from '@/components/uni-ui/uni-fav/uni-fav.vue'
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue'
	import uniIcons from "@/components/uni-ui/uni-icons/uni-icons.vue"
	import Suzhou from "@/components/suzhou/suzhou.vue"
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'

	export default {

		data() {
			return {
				pics: "https://image.ructrip.com/ructrip/1608122201728/1204-未购卡-任享会员688+20天会期-通用通览.jpg",
				flag: false,
				res: "",
				sellingLabel: {},
				subTitle: {},
				storeName: {},
				area: {},
				city: {},
				address: {},
				storeModuleInfoVos: [],
				attractionsImage: "",
				attractionsTitle: {},
				enterNoticeSubTitle: {},
				defaultImageList: []

			}
		},
		// components: {uniFav},
		onLoad(options) {
			this.storeNo = options.storeNo;
			/* console.log(this.storeNo,"1111111111") */
			this.getPicture();
			this.getName()
		},
		components: {
			uniIcons,
			uniPopup,
			Suzhou
		},
		methods: {
			goVip() {
				uni.navigateTo({
					url: "/pages/welfare/welfare"
				})
			},
			zan() {
				this.flag = !this.flag;
				console.log(this.flag)
			},
			map(latitude) {
				uni.navigateTo({
					url: "/pages/map/map?storeNo=" + this.storeNo
				})
			},
			jiaotong(storeNo) {
				console.log(storeNo)
				uni.navigateTo({
					url: "/pages/trafficGuidance/trafficGuidance?storeNo=" + this.storeNo
				});
			},

			cakan(photo) {
				uni.navigateTo({
					url: "/pages/viewAllphotos/viewAllphotos?storeNo=" + this.storeNo
				});
			},
			gengduo(geng) {
				uni.navigateTo({
					url: "/pages/toViewmore/toViewmore?storeNo=" + this.storeNo
				});
			},
			xiangqing(xiang) {
				uni.navigateTo({
					url: "/pages/viewDetails/viewDetails?storeNo=" + this.storeNo
				});
			},
			async getPicture() {
				let result = await myRequestPost("/sojo.equity.store.detail.v.two", {
					"storeNo": this.storeNo,
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1607425661000,
					"sign": "53E5E8A53FCC179B1006E2A61F2D6A8E"
				});

				this.res = result.respData.shareImageUrl
				this.sellingLabel = result.respData.sellingLabel
				this.subTitle = result.respData.subTitle
				this.storeName = result.respData.storeName
				this.area = result.respData.area
				this.city = result.respData.city
				this.address = result.respData.address
				this.storeModuleInfoVos = result.respData.storeModuleInfoVos
				this.attractionsImage = result.respData.attractionsImage
				this.attractionsTitle = result.respData.attractionsTitle
				this.enterNoticeSubTitle = result.respData.enterNoticeSubTitle
				// console.log(this.res, "888888888888888888888888888");
			},
			async getName() {
				let result = await myRequestPost("/sojo.order.store.evaluation.list.es", {

					"storeNo": this.storeNo,
					"userGuid": "rc787915dd3b521a385d0f",
					"pageNum": 1,
					"pageSize": 5,
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1608003909000,
					"sign": "636A7A1B8055E3A979B9A941A18239F2"
				});
				this.defaultImageList = result.respData.list
				// console.log(this.defaultImageList, "111111111111111111111")

			}
		}

	}
</script>

<style lang="scss">
	.content {
		.picture {
			width: 100%;
			// background-color: pink;
			// display: flex;

			image {
				width: 100%;
				// float: left;
			}
		}

		.all {
			width: 100%;
			height: 3400rpx;
			// background-color: yellow;
			border-top-right-radius: 10rpx;
			border-top-left-radius: 10rpx;

			.sellingLabel {
				margin-top: 60rpx;
				/* margin-left: 40rpx; */
				margin-left: 40rpx;
				font-size: 25rpx;
				font-weight: 200;
				line-height: 100rpx;
				display: flex;
				z-index: 1000;

				.xing {
					width: 40px;
					height: 40px;
					// position: absolute;
					margin-left: 70rpx;

				}

				.fen {
					width: 40px;
					height: 40px;
					// position: absolute;
					margin-left: 10rpx;
				}
			}


			.subTitle {
				margin-top: 40rpx;
				margin-left: 40rpx;
				font-size: 45rpx;
				font-weight: 300;
			}

			.ab {
				border-radius: 3px;
				height: 130rpx;
				background-color: #f8f7f9;
				margin-left: 40rpx;
				margin-right: 40rpx;
				margin-top: 40rpx;

				.storeName {
					margin-top: 5px;
					margin-left: 40rpx;
					margin-right: 40rpx;
					font-size: 30rpx;
					font-weight: 300;
					line-height: 45px;

					.area {
						margin-top: -40rpx;
						font-size: 16rpx;
						font-weight: 100;

						.ke {
							width: 40px;
							height: 40px;
							position: absolute;
							right: 65rpx;
							top: 930rpx;
							/* margin-left: 170rpx;
							float: right;
							right: 30rpx; */
							/* bottom: 100rpx; */
						}
					}

				}
			}

			.huiyuan {
				width: 100%;
				margin-left: 25rpx;
				// text-align: center;
				margin-top: 30rpx;

				image {
					width: 700rpx;
				}
			}

			.jiaotong {
				margin-left: 40rpx;
				margin-top: 20rpx;
				font-size: 30rpx;
				color: #0399d4;
			}

			.canguan {
				margin-top: 40rpx;
				margin-left: 40rpx;
				font-size: 45rpx;
				font-weight: 600;
				color: #595959;
			}

			.storeModuleInageVos {

				margin-left: 40rpx;
				margin-top: 40rpx;

				.san {
					display: inline-flex;
					flex-direction: row;
				}

				image {
					width: 200rpx;
					height: 200rpx;
					margin-left: 20rpx;
				}

				.gongqu {
					margin-top: 40rpx;
					margin-left: 20rpx;
					font-size: 35rpx;
					font-weight: 200;
				}
			}

			.cakan {
				margin-left: 40rpx;
				margin-top: 40rpx;
				font-size: 30rpx;
				color: #0399d4;
			}

			.attractionsImage {
				// text-align: center;
				margin-left: 40rpx;
				margin-top: 40rpx;

				image {
					height: 400rpx;
					border-radius: 3px;
				}
			}

			.attractionsTitle {
				font-size: 29rpx;
				font-weight: 300;

				margin-top: 40rpx;
				margin-left: 35rpx;
				margin-right: 30rpx;
			}

			.youwan {
				margin-top: 100rpx;
				margin-left: 40rpx;
				font-size: 45rpx;
				font-weight: 600;
				color: #595959;
			}

			.gengduo {
				margin-left: 40rpx;
				margin-top: 40rpx;
				font-size: 30rpx;
				color: #0399d4;
			}

			.dingfang {
				margin-top: 100rpx;
				margin-left: 40rpx;
				font-size: 45rpx;
				font-weight: 600;
				color: #595959;
			}

			.enterNoticeSubTitle {
				font-size: 29rpx;
				font-weight: 300;
				/* text-align: center; */
				margin-top: 40rpx;
				margin-left: 40rpx;
				margin-right: 30rpx;
			}

			.xiangqing {
				margin-left: 40rpx;
				margin-top: 40rpx;
				font-size: 30rpx;
				color: #0399d4;
			}

			.ruzhu {
				margin-top: 100rpx;
				margin-left: 40rpx;
				font-size: 45rpx;
				font-weight: 600;
				color: #595959;
			}

			.defaultImage {
				margin-top: 20rpx;
				display: inline-flex;
				flex-direction: row;

				image {
					width: 200rpx;
					height: 200rpx;
					margin-left: 20rpx;
				}


			}

			.zz {
				display: flex;
				padding: 0;
				justify-content: space-between;
				overflow: hidden;
				flex-wrap: nowrap;
				margin-left: 40rpx;
				width: 335px;

				.dddd {
					width: 355rpx;
					margin-bottom: 15rpx;
					background: #fff;
					padding: 10px;
					box-sizing: border-box;
					padding-top: 15px;

					image {
						height: 150px;
						width: 150px;
						mix-width: 160px;
						margin: 0px auto;
						margin-left: 0px;
					}
				}

				.title {
					/* margin-top: 30rpx; */
					margin-top: 10rpx;
					margin-left: 10rpx;
					font-size: 35rpx;
					font-weight: 100;
					color: #ccc;
					float: left;

				}

				.nickname {
					margin-top: 10rpx;
					margin-left: 10rpx;
					font-size: 35rpx;
					font-weight: 100;
					color: #ccc;
					float: left;
				}
			}



			.quanbu {
				margin-left: 40rpx;
				margin-top: 40rpx;
				font-size: 30rpx;
				color: #0399d4;
			}
		}
	}
</style>

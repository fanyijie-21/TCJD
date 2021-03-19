<template>
	<view class="goods_list">
		<view class="goods_item" v-for="(item,index) in msg" :key="index" @click="itemchange(item)">
			<view class="tianchong">
				<image :src="item.defaultImage" mode="scaleToFill"></image>
			</view>
			<view :class="{xuanfu:isend==true}"><text class="fu">{{item.storeName}}</text></view>
			<view class="price">
				<text class="tex">{{item.evaluation}}</text>
			</view>
			<view class="bao">
				<view class="tupian">
					<image :src="item.avatarLink"></image>
				</view>
				<view class="info">
					<text>{{item.nickname}}</text>
				</view>
				<view class="item" :class="{active:istrue==true}" @click.stop="ai(istrue)">❤</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['msg'],
		data() {
			return {
				isend: true,
				istrue: false
			};
		},

		methods: {
			// shan(item){
			// 	if(item){
			// 		this.isend=true;
			// 	}
			// 	else{
			// 		this.isend=false;
			// 	}
			// },
			itemchange(item) {
				uni.navigateTo({
					url: '/pages/finddetail/finddetail?id=' + item.id
				})
			},
			ai(istrue) {
				if (istrue) {
					this.istrue = false;
				} else {
					this.istrue = true;
				}
			}
		}

	}
</script>
<style lang="scss">
	.goods_list {
		display: flex;
		padding: 0 10rpx;
		justify-content: space-between;
		overflow: hidden;
		flex-wrap: wrap;

		.goods_item {
			position: relative;
			width: 355rpx;
			margin-bottom: 20rpx;
			background: #fff;
			box-sizing: border-box;

			.tianchong {
				background: #eee;

				image {
					// height: 150px;
					border-top-left-radius: 5px;
					border-top-right-radius: 5px;
					width: 100%;
					height: 360rpx;
					mix-width: 330rpx;

					margin: 0 0;
				}

			}

			.xuanfu {
				overflow: hidden;
				position: absolute;
				left: 20rpx;
				top: 300rpx;
				width: 260rpx;
				height: 40rpx;
				font-size: 10px;
				background-color: rgba(118, 115, 114, 0.7);
				border-radius: 20rpx;
				text-align: center;

				text {
					line-height: 40rpx;
					//text-align: center;

					color: white;
				}
			}


			.price {

				width: 320rpx;
				height: 50rpx;
				font-size: 12px;
				color: rgb(74, 74, 74);
				padding: 16rpx 0;

				.tex {
					display: inline-block;
					width: 300rpx;
					height: 70rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}

			.bao {
				display: flex;
				height: 50rpx;
				position: relative;

				// overflow: hidden;
				.tupian {
					image {
						width: 40rpx;
						height: 40rpx;
						position: absolute;
						top: 0px;
						line-height: 40rpx;
						border-radius: 50%;

					}
				}

				.info {
					text {
						height: 40rpx;
						color: rgb(193, 193, 193);
						font-size: 8px;
						position: absolute;
						left: 50rpx;
						top: -4rpx;
						line-height: 40rpx;

					}
				}

				.item {
					height: 40rpx;
					flex: 1;
					display: inline-block;
					text-align: right;

					line-height: 40rpx;
				}

				.active {
					color: red;
				}
			}

		}
	}
</style>

<template>
	<view class="goods_list">
		<view class="goods_item" v-for="(item,index) in arr" :key="index" @click="itemchange(item)">
			<view class="tianchong">
				<image :src="item.arr1.defaultImage"></image>
			</view>
			<view :class="{xuanfu:isend==true}"><text class="fu">{{item.arr1.storeName||"大湖原舍特色度假酒店"}}</text></view>
			<view class="price">
				<text class="tex">{{item.arr1.evaluation}}</text>
			</view>
			<view class="bao">
				<view class="tupian">
					<image :src="item.arr1.avatarLink"></image>
				</view>
				<view class="info">
					<text>{{item.arr1.nickname}}</text>
				</view>
				<view class="item" @click.stop="addone(index)">
					<uni-icons type="heart" size="18" :style="item.flg?'color:red':''"></uni-icons>
				</view>


			</view>
		</view>
		<view>
			<view class="biji" @click="taobi">
				<text>写笔记</text>
			</view>
		</view>

	</view>
</template>

<script>
	import uniIcons from "@/components/uni-ui/uni-icons/uni-icons.vue";
	export default {
		props: ['arr', "a"],
		data() {
			return {
				isend: true,
				istrue: false,
				active: [],


			};
		},
		mounted() {},

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
					url: '/pages/finddetail/finddetail?id=' + item.arr1.id
				})
			},


			addone(i) {
				// console.log(e)
				// console.log(i)
				// console.log(item)
				//console.log(this.arr[i].arr1)
				// console.log(this.newsList)
				console.log(this.a, "pppppppppffffffffffffp")
				if (6 * (this.a - 1) + this.arr[i].in == i) {

					if (this.arr[i].flg == false) {
						// this.arr[i].arr1.id = this.arr[i].arr1.id + 1
						this.arr[i].flg = true
					} else {
						// this.arr[i].arr1.id = this.arr[i].arr1.id - 1
						this.arr[i].flag = false
					}

				}


			},
			taobi() {
				uni.navigateTo({
					url: '/pages/biji/biji'
				})
			}
		},
		components: {
			uniIcons

		}
	}
</script>
<style lang="scss">
	.goods_list {
		box-sizing: border-box;
		display: flex;
		padding: 0 15rpx;
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
					width: 100%;
					height: 360rpx;
					border-top-left-radius: 5px;
					border-top-right-radius: 5px;
					width: 100%;
					mix-width: 330rpx;
					margin: 0 0;
				}

			}


			.xuanfu {
				position: absolute;
				left: 20rpx;
				top: 300rpx;
				width: 260rpx;
				height: 40rpx;
				font-size: 10px;
				background-color: rgba(118, 115, 114, 0.7);
				border-radius: 10px;
				text-align: center;
				overflow: hidden;

				text {
					line-height: 40rpx;


					color: white;
				}
			}

			.price {

				width: 320rpx;
				height: 50rpx;
				font-size: 24rpx;
				color: rgb(74, 74, 74);
				padding: 8px 0;

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
				height: 25px;
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
						height: 20px;
						color: rgb(193, 193, 193);
						font-size: 16rpx;
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
					z-index: 99;
					line-height: 40rpx;
				}

				.active {
					color: red;

				}

				.act {
					color: blue;
				}


			}

		}

		.biji {
			position: fixed;
			right: 30rpx;
			bottom: 95rpx;
			width: 160rpx;
			height: 160rpx;
			background-color: orange;
			border-radius: 50%;
			text-align: center;

			text {
				font-size: 12px;
				color: white;
				line-height: 160rpx;
			}

		}
	}
</style>

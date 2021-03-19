<template>
	<view class="top-nav">
		<view class="top-nav-bar">
			<view class="item" :class="{ active: isActive == 1 }" @click="chenked(1)">全部</view>
			<view class="item" :class="{ active: isActive == 2 }" @click="chenked(2)">待付款</view>
			<view class="item" :class="{ active: isActive == 3 }" @click="chenked(3)">待入住</view>
			<view class="item" :class="{ active: isActive == 4 }" @click="chenked(4)">已入住</view>
			<view class="item" :class="{ active: isActive == 5 }" @click="chenked(5)">已完成</view>
			<view class="item" :class="{ active: isActive == 6 }" @click="chenked(6)">已取消</view>
		</view>
		<view>
			<image @click="goHuiYuan()" :src="url"></image>
		</view>
		<view class="nav_item" v-if="isActive==1">
			<Goods></Goods>
		</view>
		<view class="nav_item" v-if="isActive==2">
			<List></List>
		</view>
		<view class="nav_item" v-if="isActive==3">
			<Next></Next>
		</view>
		<view class="nav_item" v-if="isActive==4">
			<YiRu></YiRu>
		</view>
		<view class="nav_item" v-if="isActive==5">
			<WanChen></WanChen>
		</view>
		<view class="nav_item" v-if="isActive==6">
			<QuXiao></QuXiao>
		</view>
	</view>
</template>

<script>
	import Goods from '@/components/dingdan/goods.vue'
	import List from '@/components/dingdan/list.vue'
	import Next from '@/components/dingdan/next.vue'
	import YiRu from '@/components/dingdan/yiru.vue'
	import WanChen from '@/components/dingdan/wanchen.vue'
	import QuXiao from '@/components/dingdan/quxiao.vue'

	export default {
		data() {
			return {
				isActive: 1,
				url: "https://image.ructrip.com/ructrip/1608122201728/1204-未购卡-任享会员688+20天会期-通用通览.jpg"
			}
		},
		onLoad() {

		},
		methods: {
			chenked(type) {
				this.isActive = type;
			},
			goHuiYuan() {
				uni.navigateTo({
					url: "/pages/welfare/welfare"
				})
			},
		},
		components: {
			Goods,
			List,
			Next,
			YiRu,
			WanChen,
			QuXiao
		}
	}
</script>


<style>
	.top-nav {
		width: 750rpx;
		position: fixed;

	}

	.top-nav-bar {
		border: 2px solid white;
		display: flex;
		height: 44px;
		justify-content: space-between;
		font-size: 13px;
		background-color: #fff;
		overflow: scroll;
		color: #353b48;
		border-top: 0px solid #e5e5e5;
	}

	.nav-item {
		flex: 1;
	}

	.item {
		width: 70px;
		text-align: center;
		line-height: 33px;
		height: 33px;
	}

	.active {
		color: #ff0000;
		font-weight: 550;
		position: relative;
	}

	.active::after {
		content: '';
		position: absolute;
		top: 25px;
		width: 90rpx;
		height: 8rpx;
		background-color: red;
		left: 0px;
		right: 0px;
		bottom: 0px;
		margin: auto;
	}

	image {
		width: 750rpx;
		height: 120rpx;
	}
</style>

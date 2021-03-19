<template>
	<view>
		<view v-for="item in pics" :key="item">
			<image :src="item" mode="widthFix"></image>
		</view>

		<view class="footer">
			<button type="warn" @click="tan">加入会员</button>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				pics: [
					"https://image.ructrip.com/ructrip/1607607515647/%E3%80%90new%E3%80%911204-%E6%9C%AA%E8%B4%AD%E5%8D%A1-%E4%BB%BB%E4%BA%AB%E4%BC%9A%E5%91%98688+45%E5%A4%A9%E4%BC%9A%E6%9C%9F-%E5%A4%B4%E5%9B%BE-%E6%B8%A0%E9%81%93.jpg",
					"https://image.ructrip.com/ructrip/1607445628442/1204-%E6%9C%AA%E8%B4%AD%E5%8D%A1-%E4%BB%BB%E4%BA%AB%E4%BC%9A%E5%91%98688+20%E5%A4%A9%E4%BC%9A%E6%9C%9F-%E6%8E%A5%E5%86%85%E5%AE%B9%E9%A6%96%E5%B1%8F.jpg",
					"https://image.ructrip.com/ructrip/1601190709475/1280%E5%85%83%E5%A6%82%E7%A8%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E6%9B%B4%E6%96%B0-%E5%AE%98%E6%96%B9_04.jpg",
					"https://image.ructrip.com/ructrip/1605698826486/4.jpg",
					"https://image.ructrip.com/ructrip/1601190724554/1280%E5%85%83%E5%A6%82%E7%A8%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E6%9B%B4%E6%96%B0-%E5%AE%98%E6%96%B9_06.jpg",
					"https://image.ructrip.com/ructrip/1601190748548/1280%E5%85%83%E5%A6%82%E7%A8%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E6%9B%B4%E6%96%B0-%E5%AE%98%E6%96%B9_07.jpg",
					"https://image.ructrip.com/ructrip/1601190754274/1280%E5%85%83%E5%A6%82%E7%A8%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E6%9B%B4%E6%96%B0-%E5%AE%98%E6%96%B9_08.jpg",
					"https://image.ructrip.com/ructrip/1601190772427/1280%E5%85%83%E5%A6%82%E7%A8%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E6%9B%B4%E6%96%B0-%E5%AE%98%E6%96%B9_09.jpg",
					"https://image.ructrip.com/ructrip/1601190777572/1280%E5%85%83%E5%A6%82%E7%A8%8B%E8%AF%A6%E6%83%85%E9%A1%B5%E6%9B%B4%E6%96%B0-%E5%AE%98%E6%96%B9_10.jpg"
				]
			}
		},
		methods: {
			tan() {
				uni.showToast({
					title: '开通成功',
					duration: 2000
				});
			}
		}
	}
</script>

<style lang="less">
	view {
		position: relative;

		image {
			display: block;
			width: 750rpx;
		}


		.footer {
			display: flex;
			position: fixed;
			bottom: 100rpx;
			width: 100%;
			background-color: #FFFFFF;
			box-shadow: 0 2px;


			button {
				margin-left: 40rpx;
				width: 670rpx;
				background-color: #fc6315;
				position: fixed;
			}
		}

	}
</style>

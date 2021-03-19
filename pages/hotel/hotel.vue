<template>
	<view>
		<image :src="url" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: "https://s3.ax1x.com/2020/12/15/rMI1JO.png"
			}
		},
		methods: {

		}
	}
</script>

<style>
	image {
		width: 750rpx;
	}
</style>

<template>
	<view class="searchall">
		<swiper :interval="2000">
			<swiper-item>
				<text class="search" @click="change1()">推荐</text>
				<text class="search" @click="change2()">无锡</text>
				<text class="search" @click="change3()">苏州</text>
				<text class="search" @click="change4()">湖州</text>
				<text class="search" @click="change5()">常州</text>
			</swiper-item>
			<swiper-item>
				<text class="search" @click="change6()">嘉兴</text>
				<text class="search" @click="change7()">北京</text>
				<text class="search" @click="change8()">扬州</text>
				<text class="search" @click="change9()">南京</text>
				<text class="search" @click="change10()">上海</text>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	export default {
		props: ['cityCode'],
		data() {
			return {

			};
		},
		methods: {
			change1() {
				var code = 320200
				this.$emit("func", code)
			},
			change2() {
				var code = 320200
				this.$emit("func", code)
			},
			change3() {
				var code = 320500
				this.$emit("func", code)
			},
			change4() {
				var code = 330500
				this.$emit("func", code)
			},
			change5() {
				var code = 320400
				this.$emit("func", code)
			},
			change6() {
				var code = 330400
				this.$emit("func", code)
			},
			change7() {
				var code = 110100
				this.$emit("func", code)
			},
			change8() {
				var code = 321000
				this.$emit("func", code)
			},
			change9() {
				var code = 320100
				this.$emit("func", code)
			},
			change10() {
				var code = 310100
				this.$emit("func", code)
			},
		}


	}
</script>

<style lang="less">
	.searchall {
		margin-top: 40rpx;
		width: 100%;
		margin-left: 25rpx;
		display: flex;

		swiper {
			width: 95%;
			height: 60rpx;

			swiper-item {
				display: flex;

				text {
					display: block;

					background-color: #ccc;
					width: 200rpx;
					height: 60rpx;

					text-align: center;
					border: 10rpx solid #fff;
					opacity: 0.7;


				}
			}
		}
	}
</style>

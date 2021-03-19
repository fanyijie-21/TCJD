<template>
	<view class="box">
		<form @submit="formSubmit">
			<view class="import">请输入兑换码</view>
			<input class="conversion" name="input" focus />
			<button type="default" class="btn" form-type="submit">立即兑换</button>
			<view class="text">
				<p>兑换说明</p>
				<p>兑换中心仅对会员资格以及会员升级兑换，如需兑换优惠券请到个人中心内进行兑换</p>
				<p>会员资格兑换及会员升级兑换规则请仔细阅读<span style="color: #fda77b;">《如程会员协议》</span>及
					<span style="color: #fda77b;">《如程任享会员升级规则》</span>。一经兑换，则视为会员同意前述协议及规则，相应会员资格即生效</p>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			formSubmit(e) {
				// console.log(e.detail.value.input)
				var formdata = e.detail.value.input
				uni.showModal({
					content: '您的兑换码是' + formdata,
					showCancel: false
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.box {
		width: 600rpx;
		height: 800rpx;
		margin: 180rpx 75rpx;
		// background-color: skyblue;

		.import,
		.text {
			font-size: 30rpx;
			color: rgb(79, 79, 79);
		}

		.conversion {
			box-sizing: border-box;
			width: 100%;
			border: 1px solid #aaa;
			margin-top: 30rpx;
			margin-bottom: 62rpx;
			height: 103rpx;
		}

		.btn {
			background-color: #fc6315;
			color: #fff;
		}

		.text {
			margin-top: 56rpx;

			p {
				margin-top: 30rpx;
			}
		}

	}
</style>

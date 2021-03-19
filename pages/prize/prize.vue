<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog title="该功能暂未开通" type="info" message="成功消息" :duration="2000" :before-close="true" @close="close"
			 @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		<!-- #endif -->
		
		<!-- #ifdef MP-ALIPAY|H5|APP-PLUS -->
			<view class="tips">
				<text>该功能暂未开通哦，请耐心等待~</text>
			</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import uniPopupMessage from '@/components/uni-ui/uni-popup-message/uni-popup-message.vue';
	import uniPopupDialog from '@/components/uni-ui/uni-popup-dialog/uni-popup-dialog.vue'
	export default {
		data() {
			return {

			}
		},
		onLoad() {
			this.$refs.popup.open()
		},
		methods: {
			close(done) {
				done()
			},

			confirm(done) {
				done()
			},

			
		},
		components: {
			uniPopup,
			uniPopupMessage,
			uniPopupDialog
		}
	}
</script>

<style lang="less">
	.tips{
		display:flex;
		justify-content: center;
		align-items: center;
		width: 750rpx;
		height: 1000rpx;
		color: gray;
	}
</style>

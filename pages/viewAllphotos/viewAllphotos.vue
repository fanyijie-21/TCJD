<template>
	<view class="content">
		<view class="respData" v-for="item in respData" :key="item.moduleId">
			<view class="title">
				{{item.title}}
			</view>
			<view class="picture">
				<view v-for="item2 in item.storeModuleImageVos">
					<image :src="item2.imageUrl" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				respData: [],
			}
		},
		onLoad(options) {
			this.No = options.storeNo
			this.getPicture();
			console.log(this.No, "5555555555")
		},
		methods: {
			async getPicture() {
				let result = await myRequestPost("/sojo.equity.store.module.info", {
					"storeNo": this.No,
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1608018423000,
					"sign": "9F67F91DFADB90400B28B575BCAF054E"
				});
				this.respData = result.respData
				console.log("+8+888+8+8+8+8+8+8+8+8+8+8+88")
			},
		}
	}
</script>

<style lang="scss">
	.content {
		.respData {


			text-align: center;

			.picture {
				margin-top: 40rpx;


				image {
					margin-top: 20px;

				}
			}
		}

		.title {
			margin-top: 40rpx;
			font-size: 40rpx;
			font-weight: 600;
		}
	}
</style>

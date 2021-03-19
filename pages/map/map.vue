<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 800px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
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
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: this.latitude,
				longitude: this.longitude,
				covers: [{
					latitude: this.latitude,
					longitude: this.longitude,
					iconPath: '../../../static/location.png'
				}, {
					latitude: this.latitude,
					longitude: this.longitude,
					iconPath: '../../../static/location.png'
				}]
			}

		},
		onLoad(options) {
			console.log(this.options, "666666666")
			this.storeNo = options.storeNo
			this.getPicture()
		},
		methods: {
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
				console.log(this.result, "8484869")
				this.longitude = result.respData.longitude
				this.latitude = result.respData.latitude
				console.log(this.longitude, this.latitude, "9999999999")
			}
		},
	}
</script>

<style>

</style>

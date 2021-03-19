<template>
	<view>
		<view class="tianjia">
			<text>+</text>
		</view>

		<view class="fabu">
			<input type="text" placeholder="想好一个标题会有更多的赞哦" />
			<textarea placeholder="多说一说~" />
			</view>
		
		<view class="address">
			<uni-icons type="location-filled" size="30"></uni-icons>
			<text class="local" @click="showLoaction(isty)">显示地址</text>
		</view>
		
		
		<view class="page-body">
		       <view class="page-section page-section-gap">
		           <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers"  v-if="isty">
		           </map>
		       </view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-ui/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons},
		data() {
			
			return {
				isty:false,
				id:0, // 使用 marker点击事件 需要填写id
				           title: '即刻',
				           latitude: 39.909,
				           longitude: 116.39742,
				           covers: [{
				               latitude: 39.909,
				               longitude: 116.39742,
				               iconPath: '../../../static/location.png'
				           }, {
				               latitude: 39.90,
				               longitude: 116.39,
				               iconPath: '../../../static/location.png'
				           }]
				       }
										
			
		},
		methods: {
		showLoaction(pp){
			if(pp){
				this.isty=false;
			}
			else{
				this.isty=true;
			}
		}
			
		}
	}
</script>

<style lang="scss">
	.tianjia{
		
		background-color: rgb(245,245,245);
		
		width: 200rpx;
		height: 200rpx;
		margin-left: 50rpx;
		left: 50rpx;
		text-align: center;
		line-height: 200rpx;
		margin-bottom: 20rpx;
		text{
			font-size: 35px;
		}
		
	}
	
	.fabu{
		width: 750rpx;
		height: 500rpx;
		display: flex;
		// flex-wrap: wrap;
		// justify-content: space-between;
		align-content: center;
		flex-direction: column;	
		margin-left: 50rpx;
		margin-bottom: 45rpx;
		input{
			width: 650rpx;
			height: 80rpx;
			margin-bottom: 20rpx;
			background-color: rgb(245,245,245);
			// margin-top: 30rpx;
		}
		textarea{
			width: 650rpx;
			height: 400rpx;
			background-color: rgb(245,245,245);
			// margin-top: 60rpx;
			
		}
		
	}
	.address{
		margin-left: 50rpx;
		margin-top: 10rpx;
		.local{
			font-size: 36rpx;
			font-family: "宋体";
			// margin-left: 10rpx;
		}
	}
	
	

</style>

<template>
	<view class="container">
		<view class="title">输入酒店简要信息</view>
		<view class="table" v-for="(item,id) in tabs" :key="id">
			<view class="name">
				<text class="icon">{{ item.icon }}</text>
				{{ item.name }}
			</view>
			<view class="input">
			</view>
			<input class="detail" :placeholder="item.placeholder" placeholder-class="placeholder" />
		</view>
		<view class="ms">
			<view class="zt">描述补充：</view><textarea></textarea>
		</view>
		<view class="pic">
			<view class="zt">酒店照片:</view>
			<view class="demo">
			  <ss-upload-image :url="url" :file-list="fileList" :name="name" @on-success="onSuccess" @on-error="onError" @on-remove="onRemove" @on-process="onProcess"></ss-upload-image>
			</view>
		</view>
		<view class="fixed">
			<button @click="put">提交申请</button>
		</view>
		
	</view>
	<!-- <view>
				<textarea></textarea>
			</view> -->
</template>

<script>
import ssUploadImage from '@/components/ss-upload-image/ss-upload-image.vue'
export default {
	data() {
		return {
			fileList: [],
			url: 'http://',
			name: 'file',
			tabs: [
				{
					id: 0,
					icon: '*',
					name: '酒店名称:',
					placeholder: '请输入酒店名称'
				},
				{
					id: 1,
					icon: '*',
					name: '区域:',
					placeholder: '省-市-区'
				},
				{
					id: 2,
					icon: '*',
					name: '房间数量:',
					placeholder: '请输入房间数量'
				},
				{
					id: 3,
					icon: '*',
					name: '联系人:',
					placeholder: '请输入联系人名称'
				},
				{
					id: 4,
					icon: '*',
					name: '手机号:',
					placeholder: '请输入联系人手机号'
				},
				{
					id: 5,
					name: 'OTA链接:',
					placeholder: '请输入携程/去哪儿网/飞猪/等OTA酒店链接'
				}
			]
		};
	},
	components: {
	  ssUploadImage
	},
	methods: {
	  // 上传成功
	  onSuccess(res) {
	    if (res.code === 0) {
	      this.fileList.push(res.data.image_url)
	    }
	    console.log(res)
	  },
	  // 上传进程
	  onProcess(res) {
	    console.log(res)
	  },
	  // 上传失败
	  onError(err) {
	    console.log(err)
	  },
	  // 移除
	  onRemove(index) {
	    this.fileList.splice(index, 1)
	  },
	  put(){
		  uni.showToast({
		  	title: '提交成功',
		  	duration: 1000
		  });
	  }
	}
};
</script>

<style lang="stylus">
.container
	padding 20rpx 40rpx
	box-sizing border-box
	.title
		font-size 35rpx
		color #4a4a4a
	.table
		display flex
		margin-top 40rpx
		justify-content center
		align-items center
		.name
			flex 1
			color #4c4c4c
			float left
			text-align right
			font-size 30rpx
			padding-right 15rpx
		input
			width 480rpx
			height 66rpx
			border 1px solid #d4d4d4
			// margin-left 14rpx
			.placeholder
				font-size 26rpx
				padding-left 18rpx
		.icon
			color #fc864a
	.ms 
		display flex
		margin-top 40rpx
		padding-left 20rpx
		.zt 
			flex 1
			color #4c4c4c
			float left
			font-size 30rpx
			padding-top 15rpx
			white-space nowrap
			text-align right
		textarea
			width 480rpx
			height 150rpx
			border 1px solid #d4d4d4
	.pic
		display flex
		color #4c4c4c
		margin-top 40rpx
		font-size 30rpx
		// margin-left 15rpx
		padding-left 30rpx
		margin-bottom 200rpx
		// margin-right 30rpx
		.demo
			margin-left 31rpx
	.fixed 
		width 100%
		height 150rpx
		position fixed
		bottom 0
		background-color #FFFFFF
		
		button
			margin-right 80rpx
			background-color #fc6315
			color #FFFFFF
			font-weight 700
</style>
 

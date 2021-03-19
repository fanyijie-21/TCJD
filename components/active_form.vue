<template>
	<view class="form-container">
		<view class="form-box">
			<block v-for="(item,index) in formDate" :key="item.rules.name">
				<!-- 单行文本框 -->
				<view class='line' v-if="item.type=='text' || item.type=='number' || item.type=='password'">
					<view :class="item.rules.verify.indexOf('req')!=-1 ? 'line-left' :'p-l14 line-left' "><text class='colorRed' v-if="item.rules.verify.indexOf('req')!=-1">*</text>{{item.label}}</view>
					<!-- 发送验证码 -->
					<view class="line-right send-code-box" v-if="item.rules.name=='yzm'">
						<input :type="item.type" class="input" placeholder-class="plaClass" :placeholder='item.placeholder' v-model="item.rules.value"
						 @input="inputVal(index)"></input>
						<view class="send-code" @click="sendCode()" :style="sendColor">{{codeFont}}</view>
					</view>
					<!-- 普通输入框 -->
					<view class="line-right" v-else>
						<input :type="item.type" class="input" placeholder-class="plaClass" :placeholder='item.placeholder' v-model="item.rules.value"
						 @input="inputVal(index)"></input>
					</view>
				</view>
				<!-- 下拉选择-->
				<view class='line' v-else-if="item.type=='radio'">
					<view :class="item.rules.verify.indexOf('req')!=-1 ? 'line-left' :'p-l14 line-left' "><text class='colorRed' v-if="item.rules.verify.indexOf('req')!=-1">*</text>{{item.label}}</view>
					<view class="line-right">
						<input type="text" class="input" placeholder-class="plaClass" :placeholder='item.placeholder' v-model="item.rules.value"
						 @click="selectInput(index)"></input>
						<view class="select-icon"> </view>
					</view>
				</view>
				<!-- 多行文本框 -->
				<view class="textarea-box" v-else-if="item.type=='textarea'">
					<view :class="item.rules.verify.indexOf('req')!=-1 ? '' :'p-l14 ' "><text class='colorRed' v-if="item.rules.verify.indexOf('req')!=-1">*</text>{{item.label}}</view>
					<view class="line-right">
						<textarea rows="" cols="" placeholder-class="plaClass" :placeholder='item.placeholder' v-model="item.rules.value"
						 @input="inputVal(index)">
						</textarea>
					</view>
				</view>
				<!-- 上传图片 -->
				<view class="img-box" v-else-if="item.type=='image'">
					<view :class="item.rules.verify.indexOf('req')!=-1 ? 'img-label' :'p-l14 img-label' "><text class='colorRed' v-if="item.rules.verify.indexOf('req')!=-1">*</text>{{item.label}}</view>
					<view class="line-right">
						<view v-if="item.updateImg" class="update-img-box">
							<view class="update-img-box2">
								<img :src="item.rules.value" alt="" mode="aspectFill" class="update-img">
								<img src="./../static/img/delete_img.png" alt="" class="close-img" @click="deleteImg(index)">
							</view>
						</view>
						<view v-if="!item.updateImg" class="update-btn-box">
							<img src="./../static/img/update_btn.png" alt="" mode="aspectFill" @click="chooseImage(index)">
						</view>
					</view>
				</view>
			</block>
		</view>
		<view class="select-modal" v-if="show">
			<view class="select-bg" @click="cancel"></view>
			<view class="select-box" :animation="animationData">
				<view class="select-title">
					<view class="font32 color-999" @click="cancel">取消</view>
					<view class="font32 color-orange" @click="sure">确定</view>
				</view>
				<view>
					<block v-for="(item,index) in selectBox" :key="index">
						<view class="select-item" @click="selectItem(item.value,index)">{{item.value}} <i class="select-flag" v-if="item.flag"></i></view>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'activeForm',
		data() {
			return {
				submitData: "",
				show: false,
				animationData: {},
				selectBox: [],
				currentSelectIndex: "",
				currentSelectValue: "",
				codeFont: "获取验证码",
				wait: 60,
				isSend: false,
				sendColor: "color:#ff5b01"
			}
		},
		props: {
			formDate: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		methods: {
			//input输入框的值传给父组件
			inputVal: function(index) {
				this.$emit("input-val", JSON.stringify({
					val: this.formDate[index].rules.value,
					index: index
				}))
			},
			// 选择下拉框
			selectInput: function(index) {
				this.selectBox = [];
				this.currentSelectIndex = "";
				this.currentSelectValue = "";
				this.currentSelectIndex = index;
				for (var i = 0; i < this.formDate[index].selectVal.length; i++) {
					var selectVal = {
						value: this.formDate[index].selectVal[i],
						flag: false
					}
					if (this.formDate[index].selectVal[i] == this.formDate[index].rules.value) { //判断上次选中的那个
						selectVal.flag = true;
					}
					this.selectBox.push(selectVal)
				}
				this.show = true;
				var animation = uni.createAnimation({
					duration: 300,
					timingFunction: 'ease',
				})
				this.animation = animation;
				animation.bottom("0").step()
				this.animationData = this.animation.export()
				this.$emit("select-input-btn", index);
			},
			// 上传图片
			chooseImage: function(index) {
				var that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: (res) => {
						this.$emit("choose-image-btn", JSON.stringify({
							value: res.tempFilePaths[0],
							index: index,
						}))
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}

				})
			},
			// 删除图片
			deleteImg: function(index) {
				this.$emit("delete-img-btn", index)
			},
			// 取消
			cancel: function() {
				var that = this;
				var animation = uni.createAnimation({
					duration: 300,
					timingFunction: 'ease',
				})
				this.animation = animation;
				animation.bottom("-1000upx").step()
				this.animationData = this.animation.export()
				setTimeout(function() {
					that.show = false;
				}, 200)
			},
			// 确定
			sure: function() {
				this.$emit("sure-btn", JSON.stringify({
					currentSelectIndex: this.currentSelectIndex,
					currentSelectValue: this.currentSelectValue
				}))
				console.log(this.formDate)
				this.cancel();
			},
			//选择值
			selectItem: function(value, index) {
				this.currentSelectValue = value;
				for (var i = 0; i < this.selectBox.length; i++) {
					this.$set(this.selectBox[i], "flag", false);
				}
				this.selectBox[index].flag = true;
			},
			// 发送验证码
			sendCode: function() {
				var that = this;
				var setTime = 0;
				if (!that.isSend) {
					that.isSend = true;
					setTime = setInterval(function() {
						that.wait--;
						that.sendColor = "color:#999";
						that.codeFont = that.wait + "重新发送";
						if (that.wait == 0) {
							clearInterval(setTime);
							that.codeFont = "获取验证码";
							that.isSend = false;
							that.wait = 60;
							that.sendColor = "color:#ff5b01";
						}
					}, 1000)
				}

			}

		}
	}
</script>

<style lang="scss">
	.input {
		width: 100rpx;
		height: 50rpx;
		border: 1px solid #C0C0C0;
	}

	// 弹框
	.select-modal {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 300000;

		.select-bg {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.3);
		}

		.select-box {
			position: absolute;
			left: 0;
			bottom: -1000upx;
			width: 100%;
			background: #fff;
			max-height: 50%;
			// height: 0%;
			overflow: auto;

			.select-title {
				display: flex;
				justify-content: space-between;
				height: 80upx;
				background: #f5f5f5;
				line-height: 80upx;
				padding: 0 30upx;
			}

			.select-item {
				font-size: 28upx;
				color: #333;
				border-bottom: 1px solid #eee;
				height: 75upx;
				line-height: 75upx;
				padding: 0 30upx;

				i {
					display: block;
					float: right;
					border-bottom: 4upx solid #1ca032;
					border-right: 4upx solid #1ca032;
					width: 12upx;
					height: 26upx;
					transform: rotate(45deg);
					margin-top: 24.5upx;
				}
			}
		}

		@keyframes mymove {
			0% {
				max-height: 10%;
			}

			100% {
				max-height: 50%;
			}
		}

		/*Safari 和 Chrome:*/
		@-webkit-keyframes mymove {
			0% {
				max-height: 10%;
			}

			100% {
				max-height: 50%;
			}
		}
	}

	// 下拉icon
	.select-icon {
		// display: block;
		float: right;
		border-bottom: 2upx solid #999;
		border-right: 2upx solid #999;
		width: 16upx;
		height: 16upx;
		transform: rotate(-45deg);
		margin-right: 10upx;
	}

	.color-orange {
		color: #ff5b01;
	}

	.color-999 {
		color: #999;
	}

	.font32 {
		font-size: 32upx;
	}

	.plaClass {
		color: #dbdbdb;
	}

	.form-container {
		padding: 0 30upx;

		.form-box {
			width: 100%;
			box-sizing: border-box;
		}

		.colorRed {
			color: red;
		}

		.img-box {
			border-bottom: 1px solid #ededed;
			padding: 30upx 0;

			.update-img-box {
				border: 1px solid #ededed;
				display: flex;

				.update-img {
					width: 140upx;
					height: 140upx;
				}
			}

			.update-img-box2 {
				overflow: hidden;
				display: flex;
			}

			.update-img-box,
			.update-btn-box {
				width: 140upx;
				height: 140upx;
				position: relative;
				margin-top: 20upx;
			}

			.update-img-box .close-img {
				width: 40upx;
				height: 40upx;
				position: absolute;
				right: -12upx;
				top: -16upx;
				background: #fff;
				border-radius: 50%;
			}

			img {
				width: 140upx;
				height: 140upx;
				object-fit: cover;
			}
		}

		.line-right {
			flex: 1;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;

		}

		.send-code-box {
			.send-code {
				font-size: 28upx;
				padding: 0;
				white-space: nowrap;
				// width: 60%;
				//color:#ff5b01;
				height: 90upx;
				line-height: 90upx;
				cursor: pointer;
			}
		}

		.line-left {
			display: flex;
			width: 22%;
			align-items: center;
			height: 100%;
			font-size: 28upx;
			color: #333;
			box-sizing: border-box;
		}

		.img-label {
			width: 100%;
			height: 100%;
			font-size: 28upx;
			color: #333;
			box-sizing: border-box;
		}

		.p-l14 {
			padding-left: 14upx;
		}

		.textarea-box {
			// display: flex;
			border-bottom: 1px solid #ededed;
			padding-top: 20upx;

			// align-items: center;
			textarea {
				height: 150upx;
				font-size: 28upx;
				color: #333;
				width: 100%;
				margin-top: 20upx;
			}
		}

		.line {
			margin-top: 30upx;
			height: 100upx;
			width: 100%;
			margin: 0 auto;
			border-bottom: 1px solid #ededed;
			display: flex;
			overflow: hidden;

			.input {
				padding-right: 20upx;
				height: 100%;
				width: 100%;
				text-align: left;
				font-size: 28upx;
				color: #333;
				border: none;
				overflow: hidden;
				text-overflow: ellipsis;
				outline: none;
			}
		}
	}
</style>

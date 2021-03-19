<template>

	<view class="hot_goods">

		<view class="haha">
			<view class="buju">
				<view class="zuixin" @click="chenked(1)">
					<text class="wen">最新发布</text>
				</view>
				<view class="zuixin active">
					|
				</view>
				<view class="zuixin" @click="chenked(2)">
					<text class="ben">最多点赞</text>
				</view>
			</view>
		</view>
		<view v-if="isActive == 1">
			<Goods :arr="arr" :a="a"></Goods>
		</view>
		<view v-if="isActive == 2">
			<Dianzan :msg="msg"></Dianzan>
		</view>

		<uni-load-more v-if="!flag" :status="'loading'"></uni-load-more>
		<uni-load-more v-else :status="'noMore'"></uni-load-more>
	</view>



</template>

<script>
	import {
		myRequestPost
	} from '@/utils/zgrequest.js'
	import Goods from '@/components/goods/goods.vue'
	import Dianzan from '@/components/goods/dianzan.vue'
	import uniLoadMore from "@/components/uni-ui/uni-load-more/uni-load-more.vue"


	export default {
		data() {
			return {
				htmlNodes: [],
				isActive: 1,
				res: [],
				msg: [],
				flag: false,
				pageNum: 1,
				result: [],
				arr: [],
				a: 1
			}
		},
		onLoad() {
			this.getList();
			this.getLoods();
			console.log(this.pageNum, "pppppppppppppp")
		},


		methods: {
			chenked(type) {
				this.isActive = type;
				this.pageNum = 1;



			},

			async getList() {

				let result = await myRequestPost("/sojo.order.evaluation.list.page", {

					"pageSize": 6,
					"pageNum": this.pageNum,
					"orderByType": 10,
					"userGuid": "rc61007bb64721f4f46f68",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "win10",
					"timestamp": 1607427013000,

				});


				// result.respData.list[1].storeName="既见桑梓特色度假酒店";

				// 	console.log(ab,"ssssssssssssssssssssssssssss")
				// 	console.log(result,"llllllllllllllllll")

				// 	console.log(ab,"ppppppp")
				// this.res = [...this.res, ...result.respData.list]
				this.res = result.respData.list

				// console.log(this.res,"ffffffffffffffffffffffff");
				this.getData();
				console.log(this.arr, "wfffffffffffffffffffffffffffffffffwwwww")


			},
			getData() {
				for (var i = 0; i < this.res.length; i++) {
					var obj1 = {
						arr1: [],
						flg: false,
						in: i
					}

					obj1.arr1 = this.res[i]
					this.arr.push(obj1)

				}
				console.log(this.arr, "wwwwwwwwwwwwwwww")
			},
			async getLoods() {

				let res = await myRequestPost("/sojo.order.evaluation.list.page", {



					"pageSize": 6,
					"pageNum": this.pageNum,
					"orderByType": 20,
					"userGuid": "rc355e390778041925cb4d",
					"client": "applets",
					"mobileBrand": "microsoft",
					"mobileModel": "microsoft",
					"osVersion": "Windows 10 x64",
					"timestamp": 1607426292000,
					"sign": "45A1C99613B96EE1F0A16A1A46EA4DEC"



				});


				this.msg = [...this.msg, ...res.respData.list]
				// console.log(this.msg);
			},


		},
		onReachBottom() {
			this.pageNum++;
			this.a = this.pageNum;
			console.log(this.a)
			if (this.pageNum <= 5) {
				this.getLoods();
				this.getList()
				// switch (this.pageNum){
				// 	case 2:
				// 	result.respData.list[0].storeName="eggwgwe";
				// 		break;
				// 		case 3:
				// 		result.respData.list[2].storeName="333333";
				// 			break;
				// 			case 4:
				// 			result.respData.list[1].storeName="既见桑梓特色度假酒店";
				// 				break;
				// 	default:
				// 		break;
				// }

			} else {
				//没有更多数据了
				this.flag = true;
			}
		},
		onPullDownRefresh() {
			this.pageNum = 1;
			this.flag = false;
			this.msg = [];
			this.arr = [];
			this.getList().then(() => {
				uni.stopPullDownRefresh()
			});
			this.getLoods().then(() => {
				uni.stopPullDownRefresh()
			});


		},
		components: {
			uniLoadMore,
			Goods,
			Dianzan
		},
	}
</script>
<style lang="scss">
	.hot_goods {
		background: #eee;

		.haha {
			height: 56px;

			.buju {

				display: flex;
				width: 750rpx;
				height: 100rpx;

				background-color: white;
				margin-bottom: 10px;
				// position: sticky;
				// top: 0;
				position: fixed;
				// top: 0;
				z-index: 2;

				.zuixin {

					flex: 1;
					font-size: 16px;
					color: rgb(74, 74, 74);

					text-align: center;
					line-height: 100rpx;


					.wen {
						position: absolute;
						left: 50px;
					}

					.ben {
						position: absolute;
						right: 50px;
					}

				}

				.active {
					font-size: 10px;
				}
			}

		}

		.gaodu {
			margin-top: 20px;
		}


	}
</style>

<template>
	<view>
		<view v-for="item in citiesList" class="buttonFather">
			<button @click="goCity(item)">
				<view class="buttonWords">
					{{item.city}}
				</view>
			</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				citiesList: [{
						"city": "保山",
						"cityCode": 530500
					},
					{
						"city": "北京",
						"cityCode": 110100
					},
					{
						"city": "北海",
						"cityCode": 450500
					},
					{
						"city": "常州",
						"cityCode": 320400
					},
					{
						"city": "成都",
						"cityCode": 510100
					},
					{
						"city": "池州",
						"cityCode": 341700
					},
					{
						"city": "潮州",
						"cityCode": 445100
					},
					{
						"city": "郴州",
						"cityCode": 431000
					},
					{
						"city": "重庆",
						"cityCode": 500100
					},
					{
						"city": "长沙",
						"cityCode": 430100
					},
					{
						"city": "大理白族自治州",
						"cityCode": 532900
					},
					{
						"city": "大连",
						"cityCode": 210200
					},
					{
						"city": "大连",
						"cityCode": 210200
					},
					{
						"city": "福州",
						"cityCode": 350100
					},
					{
						"city": "广州",
						"cityCode": 440100
					},
					{
						"city": "桂林",
						"cityCode": 450300
					},
					{
						"city": "甘孜藏族自治州",
						"cityCode": 513300
					},
					{
						"city": "惠州",
						"cityCode": 441300
					},
					{
						"city": "杭州",
						"cityCode": 330100
					},
					{
						"city": "海口",
						"cityCode": 460100
					},
					{
						"city": "湖州",
						"cityCode": 330500
					},
					{
						"city": "黄山",
						"cityCode": 341000
					},
					{
						"city": "吉安",
						"cityCode": 360800
					},
					{
						"city": "嘉兴",
						"cityCode": 330400
					},
					{
						"city": "景德镇",
						"cityCode": 360200
					},
					{
						"city": "金华",
						"cityCode": 330700
					},
					{
						"city": "开封",
						"cityCode": 410200
					},
					{
						"city": "昆明",
						"cityCode": 530100
					},
					{
						"city": "丽水",
						"cityCode": 331100
					},
					{
						"city": "丽江",
						"cityCode": 530700
					},
					{
						"city": "乐山",
						"cityCode": 511100
					},
					{
						"city": "廊坊",
						"cityCode": 131000
					},
					{
						"city": "南京",
						"cityCode": 320100
					},
					{
						"city": "南平",
						"cityCode": 350700
					},
					{
						"city": "南昌",
						"cityCode": 360100
					},
					{
						"city": "南通",
						"cityCode": 320600
					},
					{
						"city": "宁波",
						"cityCode": 330200
					},
					{
						"city": "濮阳",
						"cityCode": 410900
					},
					{
						"city": "泉州",
						"cityCode": 350500
					},
					{
						"city": "衢州",
						"cityCode": 330800
					},
					{
						"city": "青岛",
						"cityCode": 370200
					},
					{
						"city": "黔东南苗族侗族自治州",
						"cityCode": 522600
					},
					{
						"city": "日照",
						"cityCode": 371100
					},
					{
						"city": "三门峡",
						"cityCode": 411200
					},
					{
						"city": "上海",
						"cityCode": 310100
					},
					{
						"city": "深圳",
						"cityCode": 440300
					},
					{
						"city": "绍兴",
						"cityCode": 330600
					},
					{
						"city": "苏州",
						"cityCode": 320500
					},
					{
						"city": "台州",
						"cityCode": 331000
					},
					{
						"city": "无锡",
						"cityCode": 320200
					},
					{
						"city": "武汉",
						"cityCode": 420100
					},
					{
						"city": "温州",
						"cityCode": 330300
					},
					{
						"city": "厦门",
						"cityCode": 350200
					},
					{
						"city": "徐州",
						"cityCode": 320300
					},
					{
						"city": "湘西土家族苗族自治州",
						"cityCode": 433100
					},
					{
						"city": "西安",
						"cityCode": 610100
					},
					{
						"city": "扬州",
						"cityCode": 321000
					},
					{
						"city": "阳江",
						"cityCode": 441700
					},
					{
						"city": "漳州",
						"cityCode": 350600
					},
					{
						"city": "珠海",
						"cityCode": 440400
					},
					{
						"city": "省直辖县级行政区划",
						"cityCode": 469000
					},
					{
						"city": "舟山",
						"cityCode": 330900
					},
					{
						"city": "镇江",
						"cityCode": 321100
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
			goCity(item) {
				uni.redirectTo({
					url: "/pages/search/search?cityCode=" + item.cityCode
				})
			}

		}
	}
</script>

<style lang="less">
	.buttonFather {
		button {
			background-color: #FFFFFF;
			margin-bottom: 8rpx;

			.buttonWords {
				font-size: 30rpx;

			}
		}
	}
</style>

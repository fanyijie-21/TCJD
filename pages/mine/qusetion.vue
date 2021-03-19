<template>
	<view class="container">
		<collapse v-model="activeNames" accordion>
			<collapse-item title="1.会员的有效期是多久？" name="1">
				如程任享电子会员有效期自购当日起至1年后止；会员有效期期满后，会员有权益保留会员资格。续费金额以平台当时公示金额为准。
			</collapse-item>
			<collapse-item title="2.我可以同时预定好几个房间吗？" name="2">
				会员使用免费入住权益时，每次最高可预订1个免费房间，连续2晚。当您完成本次订单退房后可进行下一次预定。
			</collapse-item>
			<collapse-item title="3.会员有使用次数/房型限制吗？" name="3">
				会员有效期内，在如程所有合作酒店，会员享有不限次数、不限房型的免费入住权益。
			</collapse-item>
			<collapse-item title="4.会员可以和家人朋友一起使用吗？" name="4">
				在您本人入住的前提下，您可与家人朋友居住在一个房间。房间入住人数以酒店规则为准。
			</collapse-item>
			<collapse-item title="5.会员可以转让给朋友吗？" name="5">
				为了保证您的会员专属权益，您的如程任享仅供您本人使用。
			</collapse-item>
			<collapse-item title="6.入住后可以立刻下单预定其他行程吗？" name="6">
				不可以，会员在入住并办理完成退房手续后，可预订下次行程
			</collapse-item>
			<collapse-item title="7.保证金的收取标准是什么？" name="7">
				订房是需要付房费作为保证金，保证金金额按该房间市场价格（标价）计算，具体以实际支付金额为准。在入住完成并退房办理完成后，该笔保证金将予以退还。
			</collapse-item>
			<collapse-item title="8.可以开发票吗？" name="8">
				可以的。请您致电如程会员客服中心（400-872-9988），向客服申请开票，并提供相关开票信息：个人：邮箱、会员真实姓名；公司：邮箱、购买手机号、会员真实姓名、公司名称、公司税号、对公账号、开户银行、联系电话及地址
			</collapse-item>
			<collapse-item title="9.保证金可以退回到哪里？多久可以到账？" name="8">
				保证金将在退房完成后一个工作日内退还至会员付款的银行或其他收款账户中
			</collapse-item>
		</collapse>

	</view>

</template>

<script>
	import collapse from '@/components/uni-ui/uni-collapse/uni-collapse';
	import collapseItem from '@/components/uni-ui/uni-collapse-item/uni-collapse-item';

	export default {
		data() {
			return {
				activeNames: ['1'],
				accordion: false
			}
		},
		components: {
			collapse,
			collapseItem
		},
		methods: {

		}
	}
</script>

<style lang="less">
	.container {
		margin-top: 89rpx;
	}

	.uni-collapse-cell {
		margin: 0 40rpx;
	}
</style>

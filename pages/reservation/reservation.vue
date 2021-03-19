<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://mall.ructrip.com/web-content-img/?code=1&id=2007312252531"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>

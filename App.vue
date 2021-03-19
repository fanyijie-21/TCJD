<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	 
</style>
<style lang='scss'>
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2263203_g2329fp3xyo.eot?t=1608307496287'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2263203_g2329fp3xyo.eot?t=1608307496287#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_2263203_g2329fp3xyo.woff?t=1608307496287') format('woff'),
  url('//at.alicdn.com/t/font_2263203_g2329fp3xyo.ttf?t=1608307496287') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2263203_g2329fp3xyo.svg?t=1608307496287#iconfont') format('svg'); /* iOS 4.1- */
}


	.iconfont {
		font-family: "iconfont" !important;
		font-size: 24px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #fff;
	}

	.icon-erweima1:before {
	  content: "\e688";
	}
	
	.icon-erweima:before {
	  content: "\e601";
	}
	
	.icon-shanchu:before {
	  content: "\e600";
	}
	
	.icon-shu:before {
	  content: "\e6c4";
	}
	
	.icon-sousuo:before {
	  content: "\e657";
	}
	
	.icon-jiantou9:before {
	  content: "\e60b";
	}
	
	.icon-shou_cang:before {
	  content: "\e614";
	}
	
	.icon-btn_scan:before {
	  content: "\e60d";
	}
	
	.icon-huida:before {
	  content: "\e7a0";
	}
	
	.icon-wenti:before {
	  content: "\e649";
	}
	
	.icon-zuojiantou:before {
	  content: "\e61c";
	}
	
	.icon-weibiaoti1:before {
	  content: "\e637";
	}
	
	.icon-xianxingtubiao_huabanfuben:before {
	  content: "\e62a";
	}
	
	.icon-jifen:before {
	  content: "\e636";
	}
	
	.icon-biji:before {
	  content: "\e6c2";
	}
	
	.icon-shoucang:before {
	  content: "\e612";
	}
	
	.icon-youhuiquan:before {
	  content: "\e623";
	}

</style>

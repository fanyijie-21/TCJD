
 import Vrules  from "./Vregular.js"; //正则验证
var  verification={};

verification.install=function(Vue){
	Vue.prototype.$vervify =function(option){
		var otherDefault={
			reqEmptyVal:false,
		 
		 }
		var otherPra=Object.assign({},otherDefault,option.otherPra) //合并对象
		var result=0;
		var flag=true;
		for(var m=0;m<option.formDate.length;m++){
			var regular=option.formDate[m].rules.verify.split("|");			
			for(var i=0;i<regular.length;i++){
				if(Vrules[regular[i]]){							
					var _default=Object.assign({},Vrules[regular[i]],option.formDate[m].rules) //合并对象
						if(regular[i]=="req"){
							// 必填项未填写内容提示
							if(otherPra.reqEmptyVal){
								var emptyMessage="请输入"+option.formDate[m].label;
								if(option.formDate[m].type=="radio"){
									 emptyMessage="请选择"+option.formDate[m].label;
								}else if(option.formDate[m].type=="image"){
									emptyMessage="请上传"+option.formDate[m].label;
								}
								
								if(_default.value.length==0){
									uni.showToast({
									    title:emptyMessage,
									    duration: 2000,
										icon:"none"
									});
									flag=false;
								}else{
									regularVer()
								}
							}else{
								regularVer()
							}																					
						}else if(regular[i]=="same"){//确认输入框需要配置在被确认的下面
							if(m>0){
								if(option.formDate[m-1].rules.value!=_default.value){
									uni.showToast({
									    title: _default.errMess,
									    duration: 2000,
										icon:"none"
									});
									flag=false;
								}
							}else{
								uni.showToast({
								    title: "表单配置不正确，请检查被确认输入框的位置",
								    duration: 2000,
									icon:"none"
								});
								flag=false;
							}
							
						}else{
							if(_default.value.length>0){
								regularVer()
							}
						}						
					function regularVer(){
						if(!_default.pattern.test( _default.value)){
							uni.showToast({
							    title: _default.errMess,
							    duration: 2000,
								icon:"none"
							});											
							flag=false;
						}else{
							flag=true;
						}
					}
					if(!flag){
						return flag
					}									
			 	}		   
			 }						
		}		
		return flag;
	},
	// 提交序列化的表单
	Vue.prototype.$submitForm =function(option){
		var submitData={};
		for(var i=0;i<option.length;i++){
			submitData[option[i].rules.name]=option[i].rules.value;
		}
		return submitData;
	}
}
export default verification

var Vregular = {  
  // 验证自然数
  naturalNumber: /^(([0-9]*[1-9][0-9]*)|(0+))$/,
  // 0到20位的英文字符和数字
  enNum0to20: /^[a-z0-9A-Z]{0,20}$/,
  // 2到100位的中英文字符和空格
  cnEnSpace2to100: /^[a-zA-Z\u4E00-\u9FA5\s*]{2,100}$/,
  // 数字和换行符
  numLinefeed: /^[0-9\n*]+$/,
  // 255位以内的字符
  char0to255: /^.{0,255}$/,
  
  // 英文
  english: /^.[A-Za-z]+$/,
  // 座机
  telephone: /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/,
  // 证件号码
  IDNumber: /^[a-z0-9A-Z]{0,50}$/,
  // 身份证号码,包括15位和18位的
  IDCard: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{7}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,
  // QQ号码
  qq: /^[1-9]\d{4,11}$/,
  //邮箱
  email:/^\s{0}$|^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
  //电话号码
  phone:/^\s{0}$|^1\d{10}$/, 
  // 验证6位数字
  num6:/^\s{0}$|^[0-9]{6}$/,
  // 支付宝账号
  AlipayAccount:/^\s{0}$|^(?:\w+\.?)*\w+@(?:\w+\.)+\w+|^1\d{10}$/,
  //姓名，2-20个汉字，中间允许包含一个“.”
  realName:/^\s{0}$|^[\u4E00-\u9FA5]+[.·]{0,1}[\u4E00-\u9FA5]+$/,
  //验证用户名，4到16位（字母，数字，下划线，第一位必须是字母）
  userName:/^\s{0}$|^[a-zA-Z][a-zA-Z0-9_]{3,15}$/,
  // 银行卡号码
  bankCard:/^\s{0}$|^(\d{15}|\d{16}|\d{19})$/,
  // 网址, 仅支持http和https开头的
  URL: /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/,
  //正整数
  positiveInteger:/^\s{0}$|^-?(([1-9]\d*)|(0))$/,
  //数字类型
  numberType:/^-?[0-9]+(\.\d+)?$/,
  // 不为空
  noEmpty:/\S/,
  //pwd:/\/ 至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符：
  pwd:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,20}$/
}

var Vrules={
	phone:{pattern: Vregular.phone, errMess: '请输入正确的手机号码'},
	number:{pattern: Vregular.numberType, errMess: '请输入正确的数字'},
	telephone: {pattern: Vregular.telephone, errMess: "请输入正确的座机号码",},
	email: {pattern: Vregular.email, errMess: '请输入正确的邮箱'},
	idcard:  {pattern: Vregular.IDCard, errMess: '请输入正确的证件号码'},
	bankCard: {pattern: Vregular.bankCard, errMess: '请输入正确的银行卡号码'},
	qq: {pattern: Vregular.qq, errMess: '请输入正确的qq号码'},
	num6:{pattern: Vregular.num6, errMess: '请输入正确的6位数字'},
	AlipayAccount:{pattern: Vregular.AlipayAccount, errMess: '请输入正确的支付宝账号'},
	realName:{pattern: Vregular.realName, errMess: '请输入正确的真实姓名'},
	userName:{pattern: Vregular.userName, errMess: '请输入正确的名称'},
	URL:{pattern: Vregular.URL, errMess: '请输入正确的url'},
	positiveInteger:{pattern: Vregular.positiveInteger, errMess: '请输入正确的正整数'},
	english:{pattern: Vregular.english, errMess: '请输入正确的英文字母'},
	idNumber:{pattern: Vregular.IDNumber, errMess: '请输入正确的证件号'},
	req:{pattern: Vregular.noEmpty, errMess: '必填项'},
	same:{pattern:"",errMess: '两次输入不一致'},
	pwd:{pattern:Vregular.pwd,errMess: '密码格式不正确'}
	
	
}
export default Vrules
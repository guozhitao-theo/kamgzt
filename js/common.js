/*根目录节点字体大小设置*/

htmlFontSize()
//在屏幕大小改变的时候再一次调用设置根节点的字体大小的方法
window.onresize = function(){
	htmlFontSize()
}
function htmlFontSize(){
	//获取屏幕的大小
	let width = document.documentElement.clientWidth
	//判断屏幕的大小，当其大于750时将根节点字体大小设置为750 三目运算符
	width = width >　750　?　750　:　width
	//计算得到根节点的字体大小  
	let htmlFontS = width/750*100
//	设置根节点大小
	$("html").css({
		"font-size":htmlFontS+"px"
	})
}

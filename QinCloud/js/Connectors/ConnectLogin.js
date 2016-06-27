
var httpGate = "http://192.168.1.30:18000";
var loginHandle = 'login';
var registerHandle = 'register';

/*
 * 注册接口调用 只要传递数据即可
 */
function StartRegister(data,btn) {
	
	PostData(httpGate, registerHandle, data,
		function(rep) {
			alert('注册成功' + rep);
			btn.disabled = false;
			mui.back();
		},
		function(rep) {
			alert(rep['' + "tips" + '']);
			btn.disabled = false;
		},
		function(){
			btn.disabled = false;
		}
	);
}

/*
 * 登录接口调用 只要传递数据即可 
 */
function StartLogin(data,btn,nextPage,id) {
	
	PostData(httpGate, loginHandle, data,
		function(rep) {
			mui.toast("登录成功");
			btn.disable = false;
			mui.openWindow({
				url: nextPage,
				id: id
			});
		},
		function(rep) {
			alert(rep['' + "tips" + '']);
			btn.disable = false;
		},
		function(){
			btn.disable = false;
		}
	);
	
}

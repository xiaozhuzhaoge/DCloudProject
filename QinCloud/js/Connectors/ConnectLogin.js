
var httpGate = "http://xingxueke.gicp.net:18000";
var loginHandle = 'method=login&data=';
var registerHandle = 'method=register&data=';

/*
 * 注册接口调用 只要传递数据即可
 */
function register(data) {
	PostData(httpGate, registerHandle, data,
		function(rep) {
			alert("注册成功");
			mui.back();
		},
		function(rep) {
			alert(rep['' + "tips" + '']);
		}
	);
}

/*
 * 登录接口调用 只要传递数据即可 
 */
function StartLogin(data,nextPage) {
	PostData(httpGate, loginHandle, data,
		function(rep) {
			alert("登录成功");
			mui.openWindow({
				url: nextPage,
				id: 'reg'
			});
		},
		function(rep) {
			alert(rep['' + "tips" + '']);
		}
	);
}
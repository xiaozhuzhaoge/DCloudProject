/*
 * Http Post
 * uri 发送请求URI
 * pre uri后续内容
 * sendfrom 发送表单
 * success success回调
 * fail 失败回调
 */
function PostData(uri, method, data, successFun, failFun, errorFun) {

	var jsond = JSON.stringify(data);
	console.log(jsond);
	mui.ajax(uri, {
		data: {
			method: method,
			data: jsond.toString()
		},
		dataType: 'text',
		type: 'post',
		timeout: 5000,
		success: function(data) {
			var response = $.parseJSON(data);
			var result = response['' + "result" + ''];
			if (result == 0) {
				successFun(response);
			} else {
				failFun(response);
			}
		},
		error: function(xhr, type, errorThrown) {
			mui.toast('与服务器连接失败，请检查您的网络后再重试');
			errorFun(xhr);
		}
	})

}

//function GetData(uri, method, data , successFun , failFun , errorFun)
//{
//	fvar jsond = JSON.stringify(data);
//	console.log(jsond);
//	mui.ajax(uri, {
//		data:{
//			method:method,
//			data:json.toString()
//		},
//		
//	})
//}

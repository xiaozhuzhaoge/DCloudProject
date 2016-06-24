
/*
 * Http Post
 * uri 发送请求URI
 * pre uri后续内容
 * sendfrom 发送表单
 * success success回调
 * fail 失败回调
 */
function PostData(uri, pre, sendfrom, success, fail) {

	var oReq = new XMLHttpRequest();
	oReq.open("POST", uri);
	oReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	var jsond = JSON.stringify(sendfrom);

	oReq.send(pre + jsond.toString());
	oReq.onreadystatechange = function() {
		if (oReq.readyState == 4) {
			var response = $.parseJSON(oReq.responseText);
			var result = response['' + "result" + ''];
			if (result == 0) {
				success(response);
			} else {
				fail(response);
			}
		}
	}
}
function postData(url, form, callback ) {  
      
    mui.ajax(url,{  
        data: form,
        dataType:'json',  
        type:'post',  
        contentType:"application/x-www-form-urlencoded; charset=utf-8",  
        timeout:60000,  
        success:callback,  
        error:function(xhr,type,errorThrown){  
        	 
            mui.alert("<网络连接失败，请重新尝试一下>", "错误", "OK", null);  
        }  
    });  
}  
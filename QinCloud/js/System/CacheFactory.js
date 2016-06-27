
//获取用户名
function Username(val)
{
	this.value = val;
	
	this.getValue = function(){
		return localStorage.get('$username');
	};
	
	this.setValue = function(){
		value = val;
		localStorage.save('$username',value);
	};
	
}

//获取密码
function Password(val)
{
	this.value = val;
	
	this.getValue = function(){
		return localStorage.get('$password');
	};
	
	this.setValue = function(){
	    value = val;
	    localStorage.save('$password',value);
	}
}




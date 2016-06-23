$(document).ready(function(){
	$("p").click(function(){
		$(this).hide();
	})
});

$(function(){
	$("div *").html("我们是一家人");
})

$(function(){
	$(".s").html("sfs");
    $("p").html("sgsfdsdf");
    $("#prev").html("sfsdf");
    $("p,.s,#prev").html("gssss");
})

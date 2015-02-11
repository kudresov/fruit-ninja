


$(document).on( "click", ".fruit-name", function() {
	console.log('clicked:%s',"App");
	   $(this).parent().find(".fruit-info").css("display","block");
});
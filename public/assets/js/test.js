$(document).ready(function(){
	$(window).on('scroll', function(){
		$("#top").css('top', $(window).scrollTop());
	});
});
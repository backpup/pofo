 $(document).ready(function(){
	
/* For contact page interactivity */
	$(".input-group").each(function(){
		var input = $(this).find(":input");
		input.on('focus', function(){
			$(this).siblings('span').css('color', '#FBAE2C');
		}).on('blur', function(){
			$(this).siblings('span').css('color', '#7a7978');
		});
	});

/* ******************************************************* */

/* For project windows' interactivity */
	var isOverlay = false;
	$(".project-outer").on('mouseenter', function(){
		var that = $(this);
		var overlay = $("<span>").addClass('overlay');
		if(!isOverlay)
		{
			$(this).append(overlay);
			overlay.fadeIn(300, function(){
				if(that.is(':hover'))
					that.find('.project-info').css({display:'', zIndex:50, marginTop:'25%'}).slideDown(200);
			});
			isOverlay = true;
		}
	}).on('mouseleave', function(){
		isOverlay = false;
		var that = $(this);
		var fin = $(this).find('.overlay');
		var projectInfo = $(this).find('.project-info').fadeOut(200);
		fin.fadeOut(300, function(){
			$(this).remove();
			
		});
		// $(this).find('.project-info').slideUp(200, function(){
		// 	$(this).css('display', 'none');
		// 	fin.fadeOut(400, function(){
		// 		$(this).remove();
		// 		isOverlay = false;
		// 	});
		// 	console.log('hello');
			
		// });
	});

});



 function navbarAdjuster(){
 	var sw = document.body.clientWidth;
 	if(sw < 1110)
 	{
 		$("#top").css('width', '100%');
 	}else{
 		$("#top").css('width', 1100);
 	}
 }
$(window).resize(function(){
	navbarAdjuster();
});


navbarAdjuster();

$(window).on('scroll', function(){
	//navbarAdjuster();
	if($(window).scrollTop()>=500)
	{
		// $("#header").stop(true).animate({
		// 	paddingTop: "1em", paddingBottom: "1em"}, 200);
		$("#header").addClass("header-animate");
		
	}else{
		$("#header").removeClass("header-animate");
		// $("#header").stop(true).animate({
		// 	paddingTop: "3em", paddingBottom: "3em"}, 200);
		
	}
});


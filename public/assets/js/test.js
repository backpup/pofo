$(document).ready(function(){
	
	$(window).on('scroll', function(){
		$("#top").css('top', $(this).scrollTop());
		
	});

	
	// $("#name").on('focus', function(){
	// 	$(this).siblings('span').css('color', '#FBAE2C');
	// });
	$(".input-group").each(function(){
		var input = $(this).find(":input");
		input.on('focus', function(){
			$(this).siblings('span').css('color', '#FBAE2C');
		}).on('blur', function(){
			$(this).siblings('span').css('color', '#7a7978');
		});

	});

});


// $(document).ready(function() {

// 	var scroll, wresize, mobile;
// 	var headerPos = $('#top').offset().top;
// 	var once = true;
// 	var init = false;
// 	var show, go;
	
// 	(scroll = function() {
		
// 		if(mobile != true && $('#top').css('position') != 'fixed') {
// 			var scrollPos = $(document).scrollTop();
			
// 			if(scrollPos > headerPos) {
// 				clearTimeout(show);
// 				init = true;
// 				if(once === true) {
// 					once = false;
// 					$('#top').hide();
// 					go = setTimeout(function() {
// 						$("#top").show();
// 					}, 400);
// 				}
				
// 				$('#top').addClass('attached').css({'top' : (scrollPos-headerPos)+'px'});
				
// 			} else if(init === true) {
				
// 				clearTimeout(go);
				
// 				$('#top').removeClass('attached').css({'top' : '0px'});
// 				once = true;
// 				$('#top').hide();
// 				show = setTimeout(function() {
// 					$('#top').show();
// 				}, 400);
				
// 				init = false;
// 			}
// 		}
		
// 	})();
	
// 	window.addEventListener('touchstart', function() {
// 		mobile = true;
// 	});
	
// 	// (wresize = function() {
// 	// 	msize = $('.header').width();
// 	// 	$('.attached').width(msize);
// 	// });
	
// 	$(document).scroll(scroll);
// 	//$(window).resize(wresize);
	
// });


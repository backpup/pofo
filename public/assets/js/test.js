$(document).ready(function(){
	
	$(window).on('scroll', function(){
		$("#top").css('top', $(this).scrollTop());
		

	});
});

// $(document).ready(function(){
	
// 	$(window).on('scroll', function(e){
// 		if($(this).scrollTop()>0)
// 		{
// 			$("#top").css({
// 				top:$(this).scrollTop(),
// 				position:'absolute'
// 			});
// 		}else{
// 			$("#top").css({
// 				top:0,
// 				position:'fixed'
// 			});
// 		}
// 	});
// });


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


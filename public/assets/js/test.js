var wordAnimate = function(id, duration){
	this.word = $("#"+id);
	this.secondCounter = 0;
	this.duration=duration;
	this.secondTimer;
	
}
wordAnimate.prototype.init=function(name)
{
	this.array = name.split('');
	this.secondCounter = 0;
	this.stepDuration = this.duration/this.array.length;
	clearTimeout(this.secondTimer);
	this.word.html('');
	this.startAnim();
}

wordAnimate.prototype.startAnim=function()
{
	var that = this;
	//console.log(this.array);

	that.typeAnim(this.array[this.secondCounter]);
	if(this.secondCounter < this.array.length-1)
	{
		this.secondCounter++;
		this.secondTimer = setTimeout(function(){
			that.startAnim();
		}, that.stepDuration);
	}else{
		//that.word.html('');
	}
}

wordAnimate.prototype.typeAnim=function(letter)
{
	var temp = this.word.html()+letter;
	this.word.html(temp);

}

/* For banner interactivity */ 

var Banner = function(classBanner){
	this.skillsList;
	this.skillsWithImg = new Array();
	this.banner = $('.'+classBanner);
	this.counter = 0;
	this.timer;
	this.dotLog;

	/* adding in another class now */

	this.secondAnim = new wordAnimate('hook', 1000);





	/* ********************* */


	
/* setting it up by giving ids to the skills in the list and storing them */
/* storing ones with data-img separately */
	var tempSkillsArray = new Array();
	var tempSkillsWithImgArray = new Array();
	$.each(this.banner.children(), function(i, val){
		var skill = $(val).attr('id', "skill_"+i);
		
		tempSkillsArray.push(skill);
		if(skill.data('img'))
			tempSkillsWithImgArray.push(skill);

	});
	this.skillsList = tempSkillsArray;
	this.skillswithImg = tempSkillsWithImgArray;
}

Banner.prototype.init = function(){
	var num = Math.floor(Math.random()*8);
	var dot = $('<i class="fa fa-square dot"></i>')
	$('.inner-expertise p').html(this.skillsList[num].data('name'));
	this.skillsList[num].append(dot);
	this.dotLog=dot;
	/* so that animate will move things +1 forward */
	this.counter = num+1;
	this.animate();

}
Banner.prototype.animate=function()
{
	var that = this;
	this.timer = setTimeout(function(){
		var counter = that.counter % 8;
		that.smallDisplay(that.skillsList[counter]);
		that.counter++;
	}, 1200);
	
}

Banner.prototype.smallDisplay = function(skill)
{	

	var that = this;
	var dot = $('<i class="fa fa-square dot"></i>').css('display', 'none');
	if(this.counter>0)
		this.dotLog.remove();
	dot.appendTo(skill);
	this.dotLog = dot;
	var name = skill.data('name');
	//$('.inner-expertise p').html(name);
	that.secondAnim.init(name);
	dot.fadeIn(500, function(){
		
		that.animate();
	});

}




 $(document).ready(function(){
	var checkBanner = new Banner('skill-list');
	checkBanner.init();

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


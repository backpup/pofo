
var wordAnimate = function(id, duration){
	this.word = $("#"+id);
	this.secondCounter = 0;
	this.duration=duration;
	
};
wordAnimate.prototype.init=function(name)
{
	this.array = name.split('');
	this.secondCounter = 0;
	this.stepDuration = this.duration/this.array.length;
	clearTimeout(this.secondTimer);
	this.word.html('');
	this.startAnim();
};

wordAnimate.prototype.startAnim=function()
{
	var that = this;

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
};

wordAnimate.prototype.typeAnim=function(letter)
{
	var temp = this.word.html()+letter;
	this.word.html(temp);

};

/* For banner interactivity */ 

var Banner = function(classBanner){
	this.skillsWithImg = [];
	this.banner = $('.'+classBanner);
	this.counter = 0;

	/* adding in another class now */

	this.secondAnim = new wordAnimate('hook', 1000);


	/* ********************* */


/* setting it up by giving ids to the skills in the list and storing them */
/* storing ones with data-img separately */
	var tempSkillsArray = [];
	var tempSkillsWithImgArray = [];
	$.each(this.banner.children(), function(i, val){
		var skill = $(val).attr('id', "skill_"+i);
		
		tempSkillsArray.push(skill);
		if(skill.data('img'))
			tempSkillsWithImgArray.push(skill);

	});
	this.skillsList = tempSkillsArray;
	this.skillswithImg = tempSkillsWithImgArray;
};

Banner.prototype.init = function(){
	var num = Math.floor(Math.random()*8);
	var dot = $('<i class="fa fa-square dot"></i>');
	$('.inner-expertise p').html(this.skillsList[num].data('name'));
	this.skillsList[num].append(dot);
	this.dotLog=dot;
	/* so that animate will move things +1 forward */
	this.counter = num+1;
	this.animate();

};
Banner.prototype.animate=function()
{
	var that = this;
	this.timer = setTimeout(function(){
		var counter = that.counter % 8;
		that.smallDisplay(that.skillsList[counter]);
		that.counter++;
	}, 1200);
	
};

Banner.prototype.smallDisplay = function(skill)
{	

	var that = this;
	var dot = $('<i class="fa fa-square dot"></i>').css('display', 'none');
	if(this.counter>0)
		this.dotLog.remove();  //has to exist before it can be removed
	dot.appendTo(skill);
	this.dotLog = dot;
	var name = skill.data('name');
	//$('.inner-expertise p').html(name);
	that.secondAnim.init(name);
	dot.fadeIn(500, function(){	
		that.animate();
	});

};
// document.onclick=function(){
// 	alert($(window).scrollTop());
// }

//var navPos = $("#mainNav").offset().top;
var navPos = 112;
$('#mainNav').offset().top = navPos;

$(window).on('scroll', function(){
	var nav = $('#mainNav');
	var banner = $('#banner');
	
	console.log(nav.height());
	if($(this).scrollTop()<112)
	{
		nav.css({
			top:navPos-$(this).scrollTop(),
			opacity:'1'
		});
	}else {
		nav.css({
			top:'0',
			opacity:'.8'
		});
	}

});

function navbarAdjuster(){
	var sw = document.body.clientWidth;
	var bannerWidth = $('#banner').width();
	$('#mainNav').width(bannerWidth);
}
$(window).resize(function(){
	navbarAdjuster();
});


var NavHandler=function(){

	this.timer=null;
	this.locations=[0, 612, 1688];
	var that = this;
	$.each($('.mainLink'), function(i, val){
		link = $(this);
		link.click(function(e){
			e.preventDefault();
			return that.scrollTo(that.locations[i]);
			
		})
	});
}
NavHandler.prototype.scrollTo=function(i){
	$('html, body').animate({scrollTop:i}, 800);

}
var nav = new NavHandler();

if($('#appMessage')[0]!=undefined)
{
	nav.scrollTo(1688);
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

	});

});






// 


// navbarAdjuster();

// $(window).on('scroll', function(){
// 	//navbarAdjuster();
// 	if($(window).scrollTop()>=500)
// 	{
// 		$("#header").addClass("header-animate");
		
// 	}else{
// 		$("#header").removeClass("header-animate");
		
// 	}
// });

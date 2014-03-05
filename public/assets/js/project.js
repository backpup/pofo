

//This module/object will be responsible for animating the text

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
	this.banner = $('.'+classBanner);
	this.counter = 0;

	/* adding in another class now */

	this.secondAnim = new wordAnimate('hook', 1000);


	/* ********************* */

	var tempSkillsArray = [];
	
	$.each(this.banner.children(), function(i, val){

		var skill = $(val).attr('id', "skill_"+i);
		tempSkillsArray.push(skill);

	});
	this.skillsList = tempSkillsArray;
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
	var skillWidth = skill.width();
	var adjustedPos = '20px';
	if(skillWidth<83)         //adjustments for smaller screens
		adjustedPos="-10px";
	else if(skillWidth<135)
    adjustedPos = '-5px';

	dot.css({
		position:'absolute',
		top:'20px',
		right:adjustedPos
	})
	.appendTo(skill);
	this.dotLog = dot;
	var name = skill.data('name');

	that.secondAnim.init(name);
	dot.fadeIn(500, function(){	
		that.animate();
	});

};

//this will fix the nav at top on scroll	
(function(){
	var navPos = 112;
	$('#mainNav').offset().top = navPos;

	function scrollAdjuster(){
		var nav = $('#mainNav');
		
		if($(window).scrollTop()<=112)
		{
			nav.css({
				top:navPos-$(window).scrollTop(),
				opacity:'1'
			});
		}else {
			nav.css({
				top:'0',
				opacity:'.8'
			});
		}
	}
	scrollAdjuster();  //add
	$(window).on('scroll', scrollAdjuster);

})();




//misc functions for adjustments on browser lookalike project lists
addressBarAdjuster();
navbarAdjuster();
function navbarAdjuster(){
	var bannerWidth = $('#banner').width();
	$('#mainNav').width(bannerWidth);
}
function addressBarAdjuster(){
	var addBar = $(".addressBar");
		var projectWindowWidth = $('div .project-outer').width();
		if(projectWindowWidth < 330)
			addBar.css('fontSize', '.7em');
		else
			addBar.css('fontSize', '.9em');
}
$(window).resize(function(){
	navbarAdjuster();
	addressBarAdjuster();
});


var NavHandler=function(){

	this.timer=null;
	this.locations=[0, 612, 1688];
	var that = this;
	$.each($('.mainLink'), function(i, val){
		var link = $(this);
		link.click(function(e){
			e.preventDefault();
			return that.scrollTo(that.locations[i]);
			
		});
	});
};

NavHandler.prototype.scrollTo=function(i){
	$('html, body').animate({scrollTop:i}, 800);

};

var nav = new NavHandler();

if($('#appMessage')[0]!==undefined)
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
if(navigator.appName != 'Microsoft Internet Explorer')
{
	var isOverlay = false;
	$(".project-outer").on('mouseenter', function(){
		var that = $(this);
		var overlay = $("<span>").addClass('overlay');
		if(!isOverlay)
		{
			$(this).append(overlay);
			overlay.fadeIn(300, function(){
				var ol = overlay.width();
				var mTop = '17%';
				if(ol<282)
					mTop=0;
				else if(ol<385)
					mTop="10%";
				if(that.is(':hover'))
				{
					var projectInfo = that.find('.project-info');
					projectInfo.css({display:'', zIndex:50, marginTop:mTop}).slideDown(200);
					if(ol>475)
					{
						if(projectInfo.hasClass('project-info-sm'))
							projectInfo.removeClass('project-info-sm');
						projectInfo.addClass('project-info-bg');

					}
					else if(ol<350)
					{
						projectInfo.addClass('project-info-sm');
					}else{
						if(projectInfo.hasClass('project-info-sm'))
							projectInfo.removeClass('project-info-sm');
						if(projectInfo.hasClass('project-info-bg'))
							projectInfo.removeClass('project-info-bg');
					}
				}
			});
			isOverlay = true;
		}
	}).on('mouseleave', function(){
		isOverlay = false;
		var fin = $(this).find('.overlay');
		$(this).find('.project-info').fadeOut(200);
		fin.fadeOut(300, function(){
			$(this).remove();
			
		});

	});
}else{	//Ie has problem displaying the absolutely positioned elements
		//on top of absolutely positioned elements in some versions
	$.each($('.project-outer'), function(i, val){
		var projectInfo = $(this).children('.project-info');
		var h2 = projectInfo.children('h2').clone();
		var p = projectInfo.children('p').clone();
		var h3 = projectInfo.children('h3').clone();
		var a = projectInfo.children('a');
		h2.css({
			color:'#114242'
		});
		p.css({
			color:'#5D5D5D'
		});
		h3.css({
			color:'#B7B7B7'
		});
		a.css({
			color:'#39CCCC'
		}).hover(
			function(){
				$(this).css('color', '#B7B7B7');
			},
			function(){
				$(this).css('color', '#39CCCC');
			}
		);

		var parent = $(this).parent();
		var infoContainer = $('<div>');
		infoContainer.append(h2).append(p).append(h3).append(a);
		parent.append(infoContainer);

	});
}

});
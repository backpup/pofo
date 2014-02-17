
/*Note to self*/
/*For whatever reason I have row and button ids going form 0 and up
and inuput ids going from 1 and up */

var RowManager = function(){
	var that=this;
	this._counter = 0;
	this._timeList = new Array();
	this.row = $('.new').clone();
	$('.new').remove();
	var newRowFromCopy = this.row.clone();
	this.init(newRowFromCopy);

	$('#addIntervalBtn').click(function(){
		var newRow = that.row.clone();
		that.init(newRow);
		this.blur();
	});
	$('#calculateBtn').click(function(){ return that.calculate(); this.blur(); });
	$('#clearBtn').click(function(){ $('#result').val(''); });

	$('#result').val('');
}

RowManager.prototype.init=function(row){
	var that = this;
	var id = 'rowCount_'+this._counter;
	row.attr('id', id);

	$.each(row.find('input'), function(i, val){
		var input = $(this);
		input.attr('id', id+(i+1));
		input.on('keyup', function(){
			var inputId = input.attr('id');
			return that.validateAndMove(inputId);
		}).on('blur', function(){
			var inpId = input.attr('id');
			return that.validateOnBlur(inpId);
		})
	});
	var closeBtn = row.find('button');
	closeBtn.attr('id', 'btn_'+this._counter);

	closeBtn.on('click', function(){
		var rowId = 'rowCount_'+ $(this).attr('id').slice(-1);
		return that.removeRow(rowId);
	})


	this._timeList.push(row);
	$('.playlist-generator').append(row);
	this._counter++;
}
RowManager.prototype.removeRow=function(id){
	var row = $('#'+id);
	console.log(this._timeList);
	for(var i = 0; i< this._timeList.length; i++)
	{
		if(this._timeList[i].attr('id')==id)
		{
			this._timeList.splice(i, 1);
			this._counter--;
		
		}
	}
	row.remove();
}

RowManager.prototype.validateAndMove=function(id){
	var input = $('#'+id);
	var val = input.val();
	var checker = false;

	if(val=="")
		return;
	if(/^[0-9]+$/.test(val)==false)
		input.val('');
	else
		checker = true;
	if(val.length>2)
	{
		val = val.substr(0,2);
		input.val(val);
	}
	if(val.length==2)
	{
		var newId = parseInt(id.slice(-1))+1;
		var front = id.slice(0, id.length-1);
		if(checker==true && newId<=6)
			$('#'+front+newId).focus();
	}

};

RowManager.prototype.validateOnBlur=function(id){
	var input = $('#'+id);
	var val = input.val();
	if(val.length==1)
	{
		val = '0'+val;
		input.val(val);
	}
};

RowManager.prototype.calculate = function(){
	console.log(this._timeList.length);
	var location = $("#fileLocation").val();
	this.resultPortionB = "";
	this.resultsArray=new Array();
	if(location=="")
		return;
	for(var i = 0; i<this._timeList.length; i++)
	{
		this.getInputs(this._timeList[i]);
	}
	if(this.resultsArray.length>0)
		for(var j = 0; j<this.resultsArray.length; j++)
			this.resultPortionB += this.calculateTime(j, this.resultsArray[j], location);


	this.combineAndOutput();
};

RowManager.prototype.getInputs = function(row){
	
	var isEmpty = true;
	var inputArray = new Array();

	$.each(row.find('input'), function(i, val){
		var input = $(this);
		if(input.val()!="")
		{
			isEmpty = false;
			inputArray.push(parseInt(input.val()));
		}
		else
			inputArray.push(0);

	});
	if(!isEmpty)
	{
		this.resultsArray.push(inputArray);
	}
}

RowManager.prototype.calculateTime=function(j, array, location)
{
	var resultB = "";
	console.log(array);
	var startTime = parseInt(array[0])*3600 + parseInt(array[1])*60 + parseInt(array[2]);
	var startTime = parseInt(startTime).toFixed(3);

	var stopTime = parseInt(array[3])*3600 + parseInt(array[4])*60 + parseInt(array[5]);
	var stopTime = parseInt(stopTime).toFixed(3);

	resultB += '<track>\n';
	resultB += '<location>'+location+'</location>\n';
	resultB += '<duration></duration>\n';
	resultB += '<extension application="http://www.videolan.org/vlc/playlist/0">\n';
	resultB += '<vlc:id>'+j+'</vlc:id>\n';
	resultB += '<vlc:option>file-caching=300</vlc:option>\n';
	resultB += '<vlc:option>start-time='+startTime+'</vlc:option>\n';
	resultB += '<vlc:option>stop-time='+stopTime+'</vlc:option>\n';
	resultB += '</extension>\n';
	resultB += '</track>\n';

	return resultB;
}

RowManager.prototype.combineAndOutput=function(){
	var resultA = "";
	resultA += '<?xml version="1.0" encoding="UTF-8"?>\n';
	resultA += '<playlist xmlns="http://xspf.org/ns/0/" xmlns:vlc="http://www.videolan.org/vlc/playlist/ns/0/" version="1">\n';
	resultA += '<title>Playlist</title>\n';
	resultA += '<trackList>\n';

	resultA += this.resultPortionB;

	resultA += '</trackList>\n';
	resultA += '<extension application="http://www.videolan.org/vlc/playlist/0">\n';

	for(var k = 0; k<this._counter; k++)
		resultA += '<vlc:item tid="'+k+'"/>\n';
	resultA += '</extension>\n';
	resultA += '</playlist>';

	$('#result').val(resultA).select();
}

$(document).ready(function(){
	$('#fileLocation').val('');
	var rowMg = new RowManager();


	$('#instruction').on('click', function(){
		var parent = $('<div>').css('display', 'none').attr('id', 'parent');
		var overlay = $('<div>').addClass("overlay").appendTo($('body'));

		overlay.appendTo(parent);
		var img = $('<img>').attr({
			src:'bootstrap/img/instruction.jpg'
		}).css({position:'absolute', zIndex:99, top:'15%', right:'15%'});
		img.appendTo(parent);
		$('body').append(parent);
		parent.css('display', 'block').click(function(){
			$(this).remove();
		});
		return false;
	})
});
	

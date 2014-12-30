$(function() {
	function generateColor() {
		var r = Math.round(Math.random()*255);
		var g = Math.round(Math.random()*255);
		var b = Math.round(Math.random()*255);
		var color = "rgb("+r+","+g+","+b+")";
		return color;
	}

	$('div').mouseover(function() {
		var top = Math.round(Math.random()*400);
		var left = Math.round(Math.random()*800);
		var a = Math.round(Math.random()*(100-50)+50);
		var time = Math.round(Math.random()*(2000-500)+500);

		$(this).animate({'top':top, 'left':left},2000,'easeOutBack');


		$(this).css('background', generateColor());
		$(this).css('height',a+'px');
		$(this).css('width',a+'px');

	})
})
$(function() {
	function generateColor() {
		var r = Math.round(Math.random()*255);
		var g = Math.round(Math.random()*255);
		var b = Math.round(Math.random()*255);
		var color = "rgb("+r+","+g+","+b+")";
		return color;
	}

	$('li').mouseover(function() {
		$(this).animate({'padding-left':150},1000);
		$(this).css('color','yellow');
		$('body').css('background', generateColor)

	})
	$('li').mouseout(function() {
		$(this).animate({'padding-left':0},1000);
		$(this).css('color','white');
	})
})
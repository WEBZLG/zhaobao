$(function(){
	// 六宫格
	$('.sixbox').find('.six-item').on('mouseenter',function(){
		$(this).find('.over-float').animate({opacity:1})
	}).on('mouseleave',function(){
		$(this).find('.over-float').animate({opacity:0})
	})
	
	
})
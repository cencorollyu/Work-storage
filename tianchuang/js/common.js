//返回顶部
$(function(){
		$(window).scroll(function(){
			if($(window).scrollTop()>120){
				$("#side-bar .gotop").slideDown();	
			}
			else{
				$("#side-bar .gotop").slideUp();
			}
		});
		$("#side-bar .gotop").click(function(){
			$('html,body').animate({'scrollTop':0},500);
		});
});
 
//弹出
$(document).ready(function($){
	$('.weixin').click(function(){
		$('.theme-mask').show();
		$('.theme-mask').height($(document).height());
		$('.popover1').slideDown(200);
	})
	$('.close').click(function(){
		$('.theme-mask').hide();
		$('.popover1').slideUp(200);
		
	})	
	
})
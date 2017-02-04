$(window).ready(function(){
	$('.make_border').hover(function(){
		$(this).addClass('border');	
	}).mouseout(function(){
		$(this).removeClass('border');	
	});	
});
$('.make_border').click(function(){
	alert('Do you want to save this image');
});
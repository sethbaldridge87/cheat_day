$(document).ready(function(){
	// Index
	$("#greeter_slide span").animate({opacity:'1',left:'-100px'}, 1000);
	$("#greeter_slide img").animate({opacity:'1',left:'420px'}, 1000);
	$("#greeter_slide p").animate({opacity:'1', top: '200px'}, 2000);
	// Image Gallery
	$("#image_gallery img").attr('data-toggle','modal');
	$("#image_gallery img").attr('data-target','#gallery_modal');
	$("#image_gallery img").click(function(){
		var source = $(this).attr('src');
		$('#gallery_modal img').attr('src',source);
	});
});	
let didScroll = false

$(document).scroll(function(event) {
	didScroll = true;
})
setInterval(function(){
	let mobile = $(window).width() < 426;
	if(didScroll == true && !mobile){
		let scroll = $(window).scrollTop()
		if(scroll > 80){
			$("#scrolled-menu").css('display', 'flex');
			$("#scrolled-menu").animate({opacity: 1}, 200)
		}else{
			$("#scrolled-menu").animate({opacity: 0}, 100, function (){ $("#scrolled-menu").css('display', 'none'); })
		}
		didScroll = false;
	}
}, 250)
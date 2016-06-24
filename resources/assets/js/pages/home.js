(function(){

	var $window = $(window),
		$more = $('.more'),
		$more_id = $('#more');

	function resizeCheck(){
		var nav = $('.home.nav ul'),
			toggler = $('.home .menu-toggler');

		if($(window).width()<800){
			nav.hide();
			toggler.show();
		}else{
			nav.show();
			toggler.hide();
		}

		if(nav.css('display')!='none'){
			nav.css('background', 'transparent');
			nav.parent('nav').css('background', 'transparent');
		}
	}

	resizeCheck();

	$more.find('a').on('click', function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $more_id.offset().top-35
		},1000);
	});

	$window.on('resize', function(){
		resizeCheck();
	});

	$window.on('scroll', function(){

		if($(this).width() >= 1000){
			if($(this).scrollTop() >= 200){
				$more.fadeOut('slow');
			}else{
				$more.fadeIn('slow');
			}
		}

		if($(this).scrollTop() >= $more_id.offset().top - 300){
			$('.home .content>.main').fadeIn();
		}
	});

	$('.home .menu-toggler').on('click', function(){
		var nav = $('.home.nav ul');

		nav.toggle();
		
		if(nav.css('display')!='none'){
			nav.css('background', 'white');
			nav.parent('nav').css('background', 'white');
		}else{
			nav.css('background', 'transparent');
			nav.parent('nav').css('background', 'transparent');
		}
	});

})();
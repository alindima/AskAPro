(function(){

	var $window = $(window),
		$document = $(document),
		$more = $('.more'),
		$more_id = $('#more');

	$window.on('load', function(){
		$('.home.section1 section')
			.css('visibility', 'visible')
			.animate({
				opacity: 1
			},600);
	});

	$more.find('a').on('click', function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $more_id.offset().top-35
		},1000);
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
			$('.home .content>.main').css('visibility', 'visible').animate({
				opacity: 1
			});
		}
	});

	$('.home .menu-toggler').on('click', function(){
		var nav = $('.home.nav');

		nav.toggleClass('open');
		
	});

})();
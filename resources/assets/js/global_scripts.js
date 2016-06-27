(function(){

	$('.window .titlebar a').on('click', function(e){
		e.preventDefault();
	});

	$('.dashboard .nav-toggler').on('click', function(){
		$(this).animate({
			'right' : '75%'
		},200)
		.siblings('.nav').animate({
			'width' : '75%',
			'right' : 0
		},200)
		.siblings('.main-section').animate({
			'left' : '-75%'
 		},200);
	});

	var animateObject = { duration: 300, queue: false };

	$('.dashboard .main-section').on('click', function(){
		if($(this).siblings('.nav').css('right')=='0px'){
			$(this).siblings('.nav').animate({
				'width' : '25%',
				'right' : '-25%'
			},animateObject);

			$(this).animate({
				'left': 0
			},animateObject);

			$(this).siblings('.nav-toggler').animate({
				'right': 0
			},animateObject);
		}
	});

	$('.dashboard .nav-toggler').on('click', function(){
		if($(this).siblings('.nav').css('right')=='0px'){
			$(this).siblings('.nav').animate({
				'width' : '25%',
				'right' : '-25%'
			},animateObject);

			$(this).siblings('.main-section').animate({
				'left': 0
			},animateObject);

			$(this).animate({
				'right': 0
			},animateObject);
		}
	});

	$(window).on('resize', function(){
		if($('.dashboard .nav').css('right')=='0px'){
			
		}
	});

})();
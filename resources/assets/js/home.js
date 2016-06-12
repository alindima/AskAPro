(function(){
	$('.lang-button').on('click', function(event){
		event.preventDefault();
		$('.lang-list').slideToggle();
	});

	$(window).on('scroll', function(){
		$('.lang-list').addClass('hidden');
	});

})();
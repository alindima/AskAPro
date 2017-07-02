(function(){

	$('.window .titlebar a').on('click', function(e){
		e.preventDefault();
	});

	$('.chosen').chosen();

	$.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
	});

	// $('html').on('click', function(e) {
	// 	if(e.target.className != 'settings-drop' && $('.settings-drop').css('display') != 'none'){
	// 		$('.settings-drop').css('display', 'none !important');
	// 	}
	// });

})();
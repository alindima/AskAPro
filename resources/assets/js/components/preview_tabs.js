$('.tabs.preview-tabs .tab-li a[href="#preview"]').on('click', function() {
	$.post(route, {
		'text' : $('.tabs.preview-tabs textarea').val()
	},function(data){
		$('.preview-tabs #preview').html(data.text);
	});
});
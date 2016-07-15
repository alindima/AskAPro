$('.new-question textarea#body').on('keyup', function() {
	$('.new-question #preview').html(marked(this.value));
});
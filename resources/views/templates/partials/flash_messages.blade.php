@if(Session::has('success'))
	<script>
		swal('Success', "{{ Session::get('success') }}", 'success');
	</script>
@elseif(Session::has('info'))
	<script>
		swal('Info', "{{ Session::get('success') }}", 'info');
	</script>
@elseif(Session::has('error'))
	<script>
		swal('Error', "{{ Session::get('success') }}", 'error');
	</script>
@endif
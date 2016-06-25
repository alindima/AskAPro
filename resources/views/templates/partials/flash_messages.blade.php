@if(Session::has('success'))
	<script>
		swal('Success', "{{ Session::get('success') }}", 'success');
	</script>
@elseif(Session::has('info'))
	<script>
		swal('Info', "{{ Session::get('info') }}", 'info');
	</script>
@elseif(Session::has('error'))
	<script>
		swal('Error', "{{ Session::get('error') }}", 'error');
	</script>
@endif
@extends('templates.auth.master')

@section('title')
	Invoices - AskAPro
@stop

@section('content')
	<div class="invoices">
		<div class="header">
			<h1>Invoices</h1>
		</div>
		<div class="main">
			<table>
				@foreach ($invoices as $invoice)
			        <tr>
			            <td>{{ $invoice->date()->toFormattedDateString() }}</td>
			            <td>{{ $invoice->total() }}</td>
			            <td><a href="{{ route('invoice', $invoice->id) }}" class="button">Download pdf</a></td>
			        </tr>
			    @endforeach
			</table>
		</div>
	</div>
@stop
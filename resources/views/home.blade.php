@extends('templates.master')

@section('title')
	Home - AskAPro
@stop

@section('content')
	<nav class="home nav">
        <div class="logo">
            <a href="{{ route('home') }}">
                <img src="{{ asset('img/logo.png') }}" alt="askapro-logo">
            </a>
        </div>
        <ul>
            <li>
                <a href="#">Sign up</a>
            </li>
            <li>
                <a href="#">Register</a>
            </li>
            <li>
                <a href="#">Questions</a>
            </li>
        </ul>   
    </nav>

    <section class="home section1">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque commodi assumenda aliquid dolorem animi doloribus aliquam repellat id eos est! Laboriosam alias, quae culpa accusantium at assumenda soluta fugiat illum!
	</section>

    <section class="home section2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ex dolorem error aut, assumenda adipisci, autem distinctio iure, aliquam nisi perferendis sapiente aliquid molestiae laborum, vel eum doloribus tenetur! Exercitationem!
    </section>
@stop
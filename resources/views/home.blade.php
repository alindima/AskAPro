@extends('templates.master')

@section('title')
	{{ trans('home.title') }} - AskAPro
@stop

@section('content')
	<div class="home container">
        <nav class="home nav">
            <div class="logo">
                <a href="{{ route('home') }}">
                    <img src="{{ asset('img/logo.png') }}" alt="askapro-logo">
                </a>
            </div>
            <ul>
                <li class="lang-li">
                    <a class="normal-link lang-button" href="#">
                        Lang <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="lang-list hidden">
                        <li>
                            <a href="{{ route('setLang', 'ro') }}">
                                <img src="{{ asset('img/ro.png') }}" alt="romana">
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('setLang', 'en') }}">
                                <img src="{{ asset('img/en.png') }}" alt="english">
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a class="normal-link" href="#">Log in</a>
                </li>
                <li>
                    <a class="normal-link" href="#">Sign up</a>
                </li>
                <li>
                    <a class="normal-link" href="#">Questions</a>
                </li>
            </ul>   
        </nav>

        <section class="home section1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque commodi assumenda aliquid dolorem animi doloribus aliquam repellat id eos est! Laboriosam alias, quae culpa accusantium at assumenda soluta fugiat illum!
        </section>

        <section class="home section2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ex dolorem error aut, assumenda adipisci, autem distinctio iure, aliquam nisi perferendis sapiente aliquid molestiae laborum, vel eum doloribus tenetur! Exercitationem!
        </section>   
    </div>
@stop
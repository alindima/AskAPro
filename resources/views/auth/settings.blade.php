@extends('templates.auth.master')

@section('title')
    Account settings - AskAPro
@stop

@section('content')
    <div class="settings">
        <div class="header">
            <h1>Account Settings</h1>
        </div>
        <div class="main">
            <div class="tabs tabs-url">
                <ul class="tab-list">
                    <li class="tab-li active">
                        <a href="#change_password">Change password</a>
                    </li>
                    
                    @if(Auth::user()->subscribed('main'))
                        
                        @if(Auth::user()->subscription('main')->onGracePeriod())
                            <li class="tab-li">
                                <a href="#resume_subscription">Resume subscription</a>
                            </li>
                        @else
                            <li class="tab-li">
                                <a href="#cancel_subscription">Cancel subscription</a>
                            </li>

                            <li class="tab-li">
                                <a href="#payment_method">Payment method</a>
                            </li>
                        @endif
                    @endif

                    <li class="tab-li">
                        <a href="#delete_account">Delete account</a>
                    </li>
                </ul>

              
                <div class="tab-content">
                    <div class="tab-panel active" id="change_password">
                        <div class="col-sm-6 change_password">
                            <form action="{{ route('password.change') }}" method="post">
                                <div class="fieldset{{ $errors->has('old_password') ? ' error' : '' }}">
                                    <label for="old_password">
                                        Old password
                                    </label>
                                    <input type="password" name="old_password" id="old_password">
                                    @if($errors->has('old_password'))
                                        <span class="error-block">{{ $errors->first('old_password') }}</span>
                                    @endif
                                </div>

                                <div class="fieldset{{ $errors->has('password') ? ' error' : '' }}">
                                    <label for="password">
                                        New password
                                    </label>
                                    <input type="password" name="password" id="password">
                                    @if($errors->has('password'))
                                        <span class="error-block">{{ $errors->first('password') }}</span>
                                    @endif
                                </div>

                                <div class="fieldset">
                                    <label for="password_confirmation">
                                        Confirm password
                                    </label>
                                    <input type="password" name="password_confirmation" id="password_confirmation">
                                </div>

                                <button type="submit" class="button">Change password</button>

                                {{ csrf_field() }}

                            </form>
                        </div>
                    </div>
                    
                    @if(Auth::user()->subscribed('main'))
                        @if(Auth::user()->subscription('main')->onGraceperiod())
                            <div class="tab-panel" id="resume_subscription">
                                <div class="resume_subscription">
                                    <a href="{{ route('subscription.resume') }}" class="button">
                                        Resume Subscription
                                    </a>
                                </div>
                            </div>
                        @else
                            <div class="tab-panel col-sm-6" id="payment_method">
                                <div class="payment_method">
                                    <form action="{{ route('subscription.payment_method') }}" method="post">
                                        <div id="change_payment_method"></div>
                                        
                                        <input type="hidden" name="_method" value="put">
                                        
                                        {{ csrf_field() }}

                                        <button class="button" type="submit">
                                            Change payment method
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-panel" id="cancel_subscription">
                                <div class="cancel_subscription">
                                    <a href="{{ route('subscription.cancel') }}" class="button">
                                        Cancel Subscription
                                    </a>
                                </div>
                            </div>
                        @endif
                    @endif

                    <div class="tab-panel" id="delete_account">
                        <div class="delete_account">
                            <div class="col-sm-6">
                                <h4>
                                We're sorry to see you go.Are you sure?
                                </h4>
                                <form action="{{ route('account.delete') }}" method="post">
                                    <div class="fieldset{{ $errors->has('da_password') ? ' error' : '' }}">
                                        <label for="password">
                                            Password
                                        </label>
                                        <input type="password" name="da_password" id="password">
                                        @if($errors->has('da_password'))
                                            <span class="error-block">{{ $errors->first('da_password') }}</span>
                                        @endif
                                    </div>
                                    
                                    {{ csrf_field() }}

                                    <input type="hidden" name="_method" value="delete">

                                    <button type="submit" class="button">Yes,delete my account</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop

@section('js')
    <script>
        $('.delete_account form').on('submit', function(e){
            e.preventDefault();

            swal({
                title: "Are you sure?",
                text: "<ul><li>Your profile will no longer be accessible.</li><li>All of your questions and answers WILL be kept.</li><li>You CAN reactivate your account by simply logging in.</li></ul>",
                type: "warning",
                html: "true",
                showCancelButton: true,
                confirmButtonText: "Yes, delete my account",
                cancelButtonText: "No, cancel.",
                closeOnConfirm: true,
                closeOnCancel: true 
            },
                function(){
                    $('.delete_account form').unbind('submit');
                    $('.delete_account form').submit();
                }
            );
        });

        braintree.setup(
            "{{ Braintree_ClientToken::generate() }}",
            "dropin",
            {
                container: "change_payment_method"
            }
        );
    </script>
@stop
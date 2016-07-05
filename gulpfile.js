var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss');
    
    mix.scripts([
        '../../../node_modules/jquery/dist/jquery.min.js',
        '../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
        '../../../node_modules/sweetalert/dist/sweetalert.min.js',
        '../../../node_modules/braintree-web/dist/braintree.js',
        'functions.js',
        'global_scripts.js',
        'components/file_input.js',
        'pages/home.js'
    ]);

    mix.version('js/all.js');
});

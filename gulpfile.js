var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss');
    
    mix.scripts([
        '../../../node_modules/jquery/dist/jquery.min.js',
        'functions.js',
        'global_scripts.js',
        'components/nav.js',
        'pages/home.js'
    ]);

    mix.version('js/all.js');
});

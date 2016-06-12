var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss');
    
    mix.scripts([
        '../../../node_modules/jquery/dist/jquery.min.js'
    ]);
});

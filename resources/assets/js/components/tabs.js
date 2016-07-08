(function(){
    if(location.hash != ''){
        var links = $('.tab-li a');

        $('.tab-li.active').removeClass('active');

        Array.prototype.forEach.call(links, function(link) {
            var $link = $(link);

            if($link.attr('href') == location.hash){
                $link.parent('.tab-li').addClass('active');
            }
        });

        $('.tab-panel.active').removeClass('active');
        $('.tab-panel' + location.hash).addClass('active');
    }

    $('.tab-li a').on('click', function(){
        var $this = $(this),
            tab_li = $this.parent('.tab-li');

        if(!tab_li.hasClass('active')){
            $('.tab-panel.active').removeClass('active');
            $('.tab-panel' + $this.attr('href')).addClass('active');
            $('.tab-li.active').removeClass('active');
            tab_li.addClass('active');
        }
    });    
})();
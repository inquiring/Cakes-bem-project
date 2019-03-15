modules.define('scrollingPage', ['jquery', 'i-bem-dom'], function(provide, $, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 750) {
                        $('.new-menu').addClass('new-menu_view_scrolled');
                        $('.new-menu').css({
                            'background-color': '#fff'
                        });
                    } else {
                        $('.new-menu').removeClass('new-menu_view_scrolled');
                        $('.new-menu').css({
                            'background-color': 'inherit'
                        });
                    }
                });
            }
        }
    }
}));

});

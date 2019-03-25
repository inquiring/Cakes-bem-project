modules.define('new-menu', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                document.querySelector('.new-menu__toogle').addEventListener('click', function() {
                    document.querySelector('.new-menu__nav').classList.toggle('new-menu__nav_visibility_hidden');
                    document.querySelector('.icon_name_hamburger').classList.toggle('icon_visibility_hidden');
                    document.querySelector('.icon_name_close').classList.toggle('icon_visibility_hidden');
                }, false);
            },
        },
    }
}));

});

modules.define('decor', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                document.querySelector('.decor__label').addEventListener('click', function() {
                    console.log('fff')
                }, false);
            }
        }
    }
}));

});

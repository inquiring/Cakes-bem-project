modules.define('new-menu', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    beforeSetMod : {
        'opened' : {
            'true' : function() {
                if(this.hasMod('disabled')) return false;
            }
        }
    },
    onSetMod: {
        js: {
            inited: function() {
                console.log('ты сделаешь!');
                document.querySelector('.new-menu__toogle').addEventListener('click',function() {
                    document.querySelector('.new-menu__nav').classList.toggle('new-menu__nav_state_active');
                    document.querySelector('.icon').classList.toggle('icon_name_close');
                }, false);
            },
        },
    }
}));

});

modules.define('radio', function(provide, Radio) {

provide(Radio.declMod({ modName: 'theme', modVal: 'cake' }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});

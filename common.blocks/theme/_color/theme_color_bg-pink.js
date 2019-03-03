modules.define('theme', function(provide, Theme) {

provide(Theme.declMod({ modName: 'color', modVal: 'bg-pink' }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});

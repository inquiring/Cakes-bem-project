modules.define('radio-group', function(provide, RadioGroup) {

provide(RadioGroup.declMod({ modName: 'theme', modVal: 'cake' }, {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});

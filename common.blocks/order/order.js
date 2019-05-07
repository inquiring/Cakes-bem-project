modules.define('order', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                // var fillingInput = document.getElementById("fillingInput");
                // var labelArray = document.querySelectorAll(".filling__block .radio");
                // // console.log(labelArray);
                // var radioArray = document.querySelectorAll('name');
                // console.log(radioArray);
                // var form =  document.querySelectorAll('#order-scroll').attribute('name');
                // console.log(form);

                // function onclick(e) {
                //     console.log(fillingInput.placeholder);
                //     console.log(e.target.value);
                // }
                // for (var i = 0; i < radioArray.length; i++) {
                //     radioArray[i].addEventListener("click", onclick);
                // }
                console.log(this.params);

            }
        }
    }
}));

});

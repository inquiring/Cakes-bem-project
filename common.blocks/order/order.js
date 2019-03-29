modules.define('order', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                function onclickFilingCard(e) {
                    var fillingInput = document.getElementById("fillingInput");
                    var fillingChoice = e.target.value;
                    fillingInput.placeholder = fillingChoice;

                }
                function onclickSizeCard(e) {
                    var sizeInput = document.getElementById("sizeInput");
                    var sizeChoice = e.target.value;
                    sizeInput.placeholder = sizeChoice;
                }
                function onclickDecorCard(e) {
                    var decorInput = document.getElementById("decorInput");
                    var decorChoice = e.target.value;
                    decorInput.placeholder = decorChoice;
                }

                var fillingArray = document.querySelectorAll(".filling__input");
                for (var i = 0; i < fillingArray.length; i++) {
                    fillingArray[i].addEventListener("click", onclickFilingCard);
                }
                //
                var sizeArray = document.querySelectorAll(".size__input");
                for (var i = 0; i < sizeArray.length; i++) {
                    sizeArray[i].addEventListener("click", onclickSizeCard);
                }
                //
                var decorArray = document.querySelectorAll(".decor__input");
                for (var i = 0; i < decorArray.length; i++) {
                    decorArray[i].addEventListener("click", onclickDecorCard);
                }
            }
        }
    }
}));

});

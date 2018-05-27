(function() {
    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');
    var nav = document.querySelector('.nav');
    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            ITVDN.form.open();
        })
    }
    if (form) {
        form.addEventListener('submit', function(e) {
            if (ITVDN.form.isValid()) {
                console.log('Is good');
            } else {
                console.log('Is not valid');
            }
            e.preventDefault();
        })
    }
    document.onkeydown = function(e) {
        if (e.keyCode == 27) { // escape
            ITVDN.form.close();
        }
    }
    if (nav) {
        nav.addEventListener('click', function(e) {
            var target = e.target;
            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }
            e.preventDefault();
            ITVDN.navigation.toogleToActiveLink(target);
        })
    }

}());
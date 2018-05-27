(function() {
    var me = {};

    me.toogleToActiveLink = function(target) {
        var links = document.querySelectorAll('.nav__link');
        var showedSection = target.dataset.link;

        for (var i = 0; i < links.length; i++) {
            if (links[i].classList.contains('nav__link--active')) {
                links[i].classList.remove('nav__link--active');
            }
        }
        target.classList.add('nav__link--active');
        scrollToActiveSection(showedSection);
    }

    function scrollToActiveSection(showedSection) {
        var section = document.querySelector('.' + showedSection);
        var coords = section.getBoundingClientRect();
        var animateTime = 0.5;
        var timerID = setInterval(function() {
            if (document.documentElement.scrollTop < coords.top) {
                scrollBy(0, 10)
            } else {
                clearInterval(timerID);
            }
        }, animateTime || 0.5)
    }

    ITVDN.navigation = me;
}());
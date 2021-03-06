$(document).ready(function () {
    (function () {
        'use strict';
        document.querySelector('.material-design-hamburger__icon').addEventListener(
            'click',
            function () {
                var child;

                $('body').toggleClass('no-scroll', [400]);
                $('.sidebar').toggleClass('menu--on', [400]);
                $('.filter .overlay').toggleClass('on');


                child = this.childNodes[1].classList;
                if (child.contains('material-design-hamburger__icon--to-arrow')) {
                    child.remove('material-design-hamburger__icon--to-arrow');
                    child.add('material-design-hamburger__icon--from-arrow');
                } else {
                    child.remove('material-design-hamburger__icon--from-arrow');
                    child.add('material-design-hamburger__icon--to-arrow');
                }
            });
    })();

    $('.header').on('click touch', function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    })
});


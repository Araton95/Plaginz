$(document).ready(function () {
    $("img.plugin-pic").lazyload();
    (function() {
        'use strict';
        document.querySelector('.material-design-hamburger__icon').addEventListener(
            'click',
            function() {
                var child;
                $('.sidebar').toggleClass('menu--on',[400]);

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
});


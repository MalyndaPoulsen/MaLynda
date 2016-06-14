(function () {
    angular.module('MaLynda')
        .component('mainComponents', {
            templateUrl: 'app/components/main-components.html',
            controller: MainController,
        })

    function MainController() {
        var mc = this;

        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
    $('#me').animateCss('hinge')
    $('#scroller').animateCss('slideInLeft');
    }
} ())
(function () {
    angular.module('MaLynda')
        .component('portfolioComponents', {
            templateUrl: 'app/components/portfolio-components.html',
            controller: PortfolioController,
        })
    function PortfolioController() {
        var pc = this;


       $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
        var waypoint6 = new Waypoint({
            element: document.getElementById('boxes'),
            handler: function (direction) {
                if (direction === 'down') {
                    $('#bookStore').animateCss('bounceInRight');
                     $('#slap').animateCss('bounceInLeft');
                      $('#todo').animateCss('bounceInDown');
                }
            }
        })
    }
}
    ())
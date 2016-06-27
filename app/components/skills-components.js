(function () {
    angular.module('MaLynda')
        .component('skillsComponents', {
            templateUrl: 'app/components/skills-components.html',
            controller: SkillsController
        })

    function SkillsController() {
        this.$onInit = function(){
            $.fn.extend({
                animateCss: function (animationName) {
                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    $(this).addClass('animated ' + animationName).one(animationEnd, function () {
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
                        $('#CSS').animateCss('bounceInDown');
                        $('#musicStore').animateCss('zoomIn');
                        $('#Pop-Up').animateCss('slideInleft');
                        $('#zooKeeper').animateCss('rollIn');
                        $('#Pop-UpDevil').animateCss('zoomInUp');
                    }
                }
            })
        }
    }

} ());











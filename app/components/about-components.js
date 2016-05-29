
(function () {
    angular.module('MaLynda')
        .component('aboutComponents', {
            templateUrl: 'app/components/about-components.html',
            controller: AboutController,
        })


    function AboutController() {
        var ac = this;
        
        ac.moveBar = function (id, num) {
            $("#horse-" + id + "-progress").animate({ 'width': num +'px'}, 3000, 'linear');
        }

        ac.moveHorse = function (id, num) {
            $("#horse-" + id).animate({ left: num +'px'}, 3000, 'linear');
        };

        // ac.moveBar = function (id, num) {
        //     $("#horse-" + id + "-progress").animate({ width: num + 'px' }, 3000, 'linear');
        // }

        // ac.moveHorse = function (id, num) {
        //     $("#horse-" + id).animate({ left: num + 'px' }, 3000, 'linear');
        // };

        var waypoint = new Waypoint({
            element: document.getElementById('about-me'),
            handler: function (direction) {
                ac.moveBar(id, num);
                ac.moveHorse(id, num );
            }
        })

    }
}
    ());

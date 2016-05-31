
(function () {
    angular.module('MaLynda')
        .component('aboutComponents', {
            templateUrl: 'app/components/about-components.html',
            controller: AboutController,
        })

    var paramsArray = [{
        id: 1,
        num: 300,
    },
        {
            id: 2,
            num: 250,
        },
        {
            id: 3,
            num: 350,
        },
        {
            id: 4,
            num: 400,
        }];

    function AboutController() {
        var ac = this;

        var id = x;
        var num = y;

        var tempArray = [];

        var getParams = function () {
            for (var i = 0; i < paramsArray.length; i++) {
                var x = paramsArray[i].id;
                var y = paramsArray[i].num;
                 
                ac.moveBar(x, y);
                ac.moveHorse(x, y);

                }

            }
        }


        ac.moveBar = function (id, num) {
            $("#horse-" + id + "-progress").animate({ 'width': num + 'px' }, 3000, 'linear');
        }

        ac.moveHorse = function (id, num) {
            $("#horse-" + id).animate({ left: num + 'px' }, 3000, 'linear');
        };


        var waypoint = new Waypoint({
            element: document.getElementById('about-me'),
            handler: function (direction) {
                getParams();
            }
        })

    }

    ());


(function () {
    angular.module('MaLynda')
        .component('aboutComponents', {
            templateUrl: 'app/components/about-components.html',
            controller: AboutController,
        })

    function AboutController() {
        var ac = this;
        var num = 0;
        var paramsArray = [{
            id: 1,
            num: 75,
            numb: 75,
        },
            {
                id: 2,
                num: 462,
                numb: 500,
            },
            {
                id: 3,
                num: 357,
                numb: 400,
            },
            {
                id: 4,
                num: 403,
                numb: 447,
            },
            {
                id: 5,
                num: 476,
                numb: 520,
            },
            {
                id: 6,
                num: 356,
                numb: 400,
            },
            {
                id: 7,
                num: 511,
                numb: 580,
            },
         
            ];



        ac.moveBar = function (id, numb) {
            $("#horse-" + id + "-progress").animate({ 'width': numb + '%' }, 3000, 'linear');
        }

        ac.moveHorse = function (id, num) {
            $("#horse-" + id).animate({ left: num + '%' }, 3000, 'linear');
        };


        var getParams = function () {
            for (var i = 0; i < paramsArray.length; i++) {
                var x = paramsArray[i].id;
                var y = paramsArray[i].num;
                var d = paramsArray[i].numb;

                ac.moveBar(x, d);
                ac.moveHorse(x, y);

            }

        }

        var resetParams = function () {
            var y = 0;
            var d = 0;
        }
        // reset horses
        var waypoint5 = new Waypoint({
            element: document.getElementById('big-deal'),
            handler: function (direction) {
                if (direction === 'down') {
                    resetParams()
                    getParams();
            }
            }
        })

        var waypoint = new Waypoint({
            element: document.getElementById('about'),
            handler: function (direction) {
                if (direction === 'down') {
                    getParams();
                } else {
                    resetParams()
                }
            }
        })

        // var waypoint4 = new Waypoint({
        //     element: document.getElementById('horse-4'),
        //     handler: function (direction) {
        //         if (direction === 'up') {
        //             resetParams();
        //         } else {
        //        getParams();
        //         }
        //     }
        // })

    }

}
    ());

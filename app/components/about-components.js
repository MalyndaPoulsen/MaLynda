
(function () {
    angular.module('MaLynda')
        .component('aboutComponents', {
            templateUrl: 'app/components/about-components.html',
            controller: AboutController,
        })

    function AboutController() {
        var ac = this;

    var paramsArray = [{
        id: 1,
        num: 480,
        numb: 400,
    },
        {
            id: 2,
            num: 500,
            numb: 300,
        },
        {
            id: 3,
            num: 350,
            numb: 400,
        },
        {
            id: 4,
            num: 400,
            numb: 200,
        }];



    ac.moveBar = function (id, numb) {
        $("#horse-" + id + "-progress").animate({ 'width': numb + 'px' }, 3000, 'linear');
    }

    ac.moveHorse = function (id, num) {
        $("#horse-" + id).animate({ left: num + 'px' }, 3000, 'linear');
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
    
    var resetParams = function (){
       var y = 0;
       var d = 0;
    }

    var waypoint = new Waypoint({
        element: document.getElementById('about'),
        handler: function (direction) {
            if(direction === 'down'){
                
            getParams();
            }else
            {
             resetParams()
            }
           
        }
    })
    
    var waypoint4 = new Waypoint({
        element: document.getElementById('horse-4'),
        handler: function (direction){
            if(direction === 'up'){
                
            resetParams();
            }else{
                
            getParams();
            }
        }
    })

}

    }
    ());


(function () {
    angular.module('MaLynda')
        .component('aboutComponents', {
            templateUrl: 'app/components/about-components.html',
            controller: AboutController,
        })
        
        
         function AboutController() {
        var ac = this;
        var waypoint = new Waypoint({
  element: document.getElementById('aboutme'),
  handler: function(direction) {
        ac.moveBar = function (id, num) {
            $("#horse-"+id+"-progress").animate({ width: num+'px'}, 3000, 'linear');
            }
        ac.moveHorse = function (id, num) {
            $("#horse-"+id).animate({ left: num+'px'}, 3000, 'linear'); 
    console.log("finished running")
            };
        }
})
  
}
}) ());

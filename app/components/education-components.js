(function(){
    angular.module('MaLynda')
    .component('educationComponents', {
        templateUrl: 'app/components/education-components.html',
          controller: EducationController,
    })
        function EducationController() {
        var ec = this;
        
      ec.changeBackground = function (){
          $('#raccoons').empty();
          $('#educational-experience'+'1')
      }
      ec.changeBackground();
        // var waypoint3 = new Waypoint({
        //     element: document.getElementById('description'),
        //     handler: function (direction){
        //         if(direction === 'down'){
        //             $('#raccoons').empty();
        //             $('#raccoons').append('<img src="app/img/raccoon4.gif" style="position: absolute; right: -180px; background: bottom no-repeat;  background-size: 60%; height: 100%;  margin: 0 0 0 0;">')
        //             setTimeout(function(){
        //                 $('#raccoons').empty();
        //                 $('#raccoons').append('<img src="app/img/raccoon.png" style="position: absolute; right: -180px; background: bottom no-repeat;  background-size: 60%; height: 100%;  margin: 0 0 0 0;">')
        //             }, 2500) 
        //             ec.changeBackground();
        //         }
               
        //     }
        // })
    }

}())

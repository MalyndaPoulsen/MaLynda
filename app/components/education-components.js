(function(){
    angular.module('MaLynda')
    .component('educationComponents', {
        templateUrl: 'app/components/education-components.html',
          controller: EdsController,
    })
        function EdsController() {
        var ec = this;
        
        var once = ''
        var waypoint3 = new Waypoint({
            element: document.getElementById('night'),
            handler: function (direction){
                if(direction === 'down' && !once){
                    $('#night').append('<img class="img-responsive" id="raccoon3.gif"  alt="" src="app/img/raccoon3.gif">')
                    once = 'already appended'
                    setTimeout(function(){
                        $('#night').empty();
                        $('#night').apend('<img src="app/img/raccoon.png">')
                    }, 500)    
                }
                if(direction == 'up'){ 
                    $('#night').empty()
                }
            }
        })
    }

}())
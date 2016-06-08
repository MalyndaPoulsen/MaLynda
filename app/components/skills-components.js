(function () {
    angular.module('MaLynda')
        .component('skillsComponents', {
            templateUrl: 'app/components/skills-components.html',
            controller: SkillsController,
        })

    function SkillsController() {
        var sc = this;
        
        var once = ''
        var waypoint3 = new Waypoint({
            element: document.getElementById('night'),
            handler: function (direction){
                if(direction === 'down' && !once){
                    $('#night').append('<img class="img-responsive" id="raccoon3.gif"  alt="" src="app/img/raccoon3.gif">')
                    once = 'already appended'    
                }
                if(direction == 'up'){ 
                    $('#night').empty()
                }
            }
        })
    }
}());











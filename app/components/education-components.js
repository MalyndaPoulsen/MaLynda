(function () {
    angular.module('MaLynda')
        .component('educationComponents', {
            templateUrl: 'app/components/education-components.html',
            controller: EducationController,
        })

         function EducationController() {
        var ec = this;
 



    var waypoint3 = new Waypoint({
        element: document.getElementById('description'),
        handler: function (direction) {
            if (direction === 'down') {
                $('#raccoons').empty();
                $('#raccoons').append('<img src="app/img/raccoon4.gif" class="raccons">')
                setTimeout(function () {
                    $('#raccoons').empty();
                    $('#raccoons').append('<img src="app/img/raccoon.png" class="raccons">')
                }, 2800)

            }

        }
    })
}
}
    ())

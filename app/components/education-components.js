(function(){
    angular.module('MaLynda')
    .component('educationComponents', {
        templateUrl: 'app/components/education-components.html',
          controller: EducationController,
    })
     $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
document.getElementById("Print").onclick = function () {
    printElement(document.getElementById("printThis"));
};

function printElement(elem) {
    var domClone = elem.cloneNode(true);

    var $printSection = document.getElementById("printSection");

    if (!$printSection) {
        var $printSection = document.createElement("div");
        $printSection.id = "printSection";
        document.body.appendChild($printSection);
    }

    $printSection.innerHTML = "";
    $printSection.appendChild(domClone);
    window.print();
}


        
        var waypoint3 = new Waypoint({
            element: document.getElementById('description'),
            handler: function (direction){
                if(direction === 'down'){
                    $('#raccoons').empty();
                    $('#raccoons').append('<img src="app/img/raccoon4.gif" class="raccons">')
                    setTimeout(function(){
                        $('#raccoons').empty();
                        $('#raccoons').append('<img src="app/img/raccoon.png" class="raccons">')
                    }, 2800) 
                   
                }
               
            }
        })
    }

())

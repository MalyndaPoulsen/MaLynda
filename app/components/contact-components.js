(function () {
    angular.module('MaLynda')
        .component('contactComponents', {
            templateUrl: 'app/components/contact-components.html',
            controller: ContactController,
        })

function ContactController(){
var cc= this;

   $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function () {
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
    }
} ());
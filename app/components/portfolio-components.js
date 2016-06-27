(function () {
    angular.module('MaLynda')
        .component('portfolioComponents', {
            templateUrl: 'app/components/portfolio-components.html',
            controller: PortfolioController,
        })
    function PortfolioController() {
        var pc = this;
    }
}
    ())
angular.module("MyApp", [])
.controller('MyController', function ($scope) {
    $scope.sections = [
        { 
            id : 'about', 
            title : 'About Me',
            html : 'partials/sections/about.html'
        },
        { 
            id : 'work', 
            title: 'Work Experience',
            html : 'partials/sections/work.html'
        },
        { 
            id : 'portfolio', 
            title : 'Portfolio',
            html : 'partials/sections/portfolio.html'
        },
        { 
            id : 'contact', 
            title : 'Contact Me',
            html : 'partials/sections/contact.html'
        }
    ];
    
    $scope.scroll = function (evt) {
        $('html, body').animate({
            scrollTop: $(evt.target.hash).offset().top
        }, 1000);
    };
});
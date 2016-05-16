angular.module('app', [
    'ui.router',
    'firebase',
    'app.landing',
    'app.about',
//    'app.contact',
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider){
    $urlRouterProvider
        .otherwise('');
    
    $stateProvider
        .state('landing', {
            url: '',
            templateUrl: 'app/landing/landing.html',
            controller: 'landingController',
        })
        
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.html',
            controller: 'aboutController',
    })
    
//        .state('contact', {
//            url: '/contact',
//            template: 'coming soon',
//            controller: 'contactController',
//    })
})
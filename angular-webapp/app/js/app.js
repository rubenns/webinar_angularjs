/*global angular*/
(function () {
    'use strict';

    angular.module('webinar', ['core', 'components', 'welcome', 'signup', 'ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            configureRouteProvider($routeProvider);
        }])
        .run(['$rootScope', 'i18nService', function ($rootScope, i18nService) {

            // Make i18n service available in root scope
            $rootScope.i18n = i18nService;

            }]);

    function configureRouteProvider(routeProvider) {
        routeProvider.when('/', {templateUrl:'app/pages/welcome/welcome.html'});
        routeProvider.when('/welcome', {templateUrl: 'app/pages/welcome/welcome.html'});
        routeProvider.when('/signup', {controller: 'signupCtrl' , templateUrl: 'app/pages/signup/signup.html'});
        routeProvider.otherwise({redirectTo: '/welcome'});
    }

}());

/*global angular*/
(function () {
    'use strict';

    angular.module('signup')
        .controller('signupCtrl', ['$scope', 'signupService', 'i18nService', function ($scope, signupService, i18nService) {

            initController($scope);

            function initController(scope){
                scope.signup = {
                    firstname: '',
                    lastname: '',
                    email: ''
                };
                scope.errorSignup = undefined;
                scope.successSignup = undefined;
            }

            $scope.sendContact = function(signup){
                signupService.signup(signup, function(){
                    $scope.message = i18nService("webinar.success");
                    $scope.successSignup = true;
                    $scope.errorSignup = false;
                }, function(){
                    $scope.message = i18nService("webinar.error");
                    $scope.errorSignup = true;
                    $scope.successSignup = false;
                });
            };

        }]);
}());

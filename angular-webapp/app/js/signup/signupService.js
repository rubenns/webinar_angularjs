
/*global angular*/
(function () {
    'use strict';

    angular.module('signup')
        .factory('signupService', ['$http', function ($http) {
        return {
            signup: function (signupForm, successCallback, errorCallback) {
                $http.post('signup/request-signup', {'email': signupForm.email, 'firstname': signupForm.firstname, 'lastname': signupForm.lastname})
                    .success(successCallback)
                    .error(errorCallback);
            }

        };
    }]);
}());

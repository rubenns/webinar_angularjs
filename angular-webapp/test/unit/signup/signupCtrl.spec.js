(function () {
    'use strict';

    describe('signupCtrl', function () {
        var rootScope, scope, newController, signupService;

        beforeEach(module('signup', ['$provide', function ($provide) {
            signupService = jasmine.createSpyObj('signupService', ['signup']);
            $provide.value('signupService', signupService);

        }]));

        beforeEach(inject(['$controller', '$rootScope',
            function ($controller, $rootScope) {
                rootScope = $rootScope;
                scope = rootScope.$new();
                newController = function () {
                    return $controller("signupCtrl", {$scope: scope});
                }
            }]));

        it('should exist when the module has been loaded', function () {
            expect(newController()).toBeTruthy();
            expect(scope.signup).toEqual( {firstname: '',lastname: '',email: ''});
        });

         it('should call to signupService when function to singup is called', function () {
             signupService.signup.andCallFake(function(signup, success, error) {
                expect(signup).toEqual({firstname: 'firstname',lastname: 'lastname',email: 'email@email.com'});
                return false;
            });
             newController();
             scope.signup = {
                 firstname: 'firstname',
                 lastname: 'lastname',
                 email: 'email@email.com'
             };
            scope.sendContact(scope.signup);

            expect(signupService.signup).toHaveBeenCalled();
        });

        it('should set on the scope a success message when signup is success', function () {
            signupService.signup.andCallFake(function(signup, successCallback, errorCallback) {
                expect(signup).toEqual({firstname: 'firstname',lastname: 'lastname',email: 'email@email.com'});
                successCallback();
            });
            newController();
            scope.signup = {
                firstname: 'firstname',
                lastname: 'lastname',
                email: 'email@email.com'
            };

            scope.sendContact(scope.signup);

            expect(scope.message).toEqual('[webinar.success]');
        });
        it('should set on the scope a fail message when signup is error', function () {
            signupService.signup.andCallFake(function(signup, successCallback, errorCallback) {
                expect(signup).toEqual({firstname: 'firstname',lastname: 'lastname',email: 'email@email.com'});
                errorCallback();
            });
            newController();
            scope.signup = {
                firstname: 'firstname',
                lastname: 'lastname',
                email: 'email@email.com'
            };

            scope.sendContact(scope.signup);

            expect(scope.message).toEqual('[webinar.error]');
        });

    });
})();

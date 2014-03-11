(function () {
    'use strict';

    describe('signupService', function () {
        var signupService, httpBackend;

        beforeEach(module('signup'));

        beforeEach(inject(['signupService', '$httpBackend',
            function (signupService_, $httpBackend) {
                signupService = signupService_;
                httpBackend = $httpBackend;
            }]));

        it('should exist when ls module has been loaded', function () {
            expect(signupService).not.toBe(null);
        });

        it('should invoke the signup to post call success', function () {
            var signupData ={
                email: 'email',
                firstname: 'firstname',
                lastname: 'lastname'
            };

            var successCallback = jasmine.createSpy('successCallback');
            var errorCallback = jasmine.createSpy('errorCallback');

            httpBackend.expectPOST('signup/request-signup', signupData)
                .respond(200, {});

            signupService.signup(signupData, successCallback, errorCallback);

            httpBackend.flush();

            expect(successCallback).toHaveBeenCalled();
        });

        it('should invoke the signup to post call error', function () {
            var signupData ={
                email: 'email',
                firstname: 'firstname',
                lastname: 'lastname'
            };

            var successCallback = jasmine.createSpy('successCallback');
            var errorCallback = jasmine.createSpy('errorCallback');

            httpBackend.expectPOST('signup/request-signup', signupData)
                .respond(500, {});

            signupService.signup(signupData, successCallback, errorCallback);

            httpBackend.flush();

            expect(errorCallback).toHaveBeenCalled();
        });




    });
})();

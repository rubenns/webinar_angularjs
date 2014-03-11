(function () {
    'use strict';

    describe('genericDirectives', function () {
        var compileAndLink, scope;

        beforeEach(module('components'));

        beforeEach(inject(['$rootScope', '$compile',
            function ($rootScope, $compile) {
                scope = $rootScope.$new();
                compileAndLink = compileAndLinkFn($compile);
            }])
        );

        describe('activeIf', function () {
            it('it should add active class when expression evaluates to true', function () {
                var template = '<div active-if="true">content</div>';

                var element = compileAndLink(template, scope);

                expect(element.attr('class')).toContain('active');
            });

            it('it should remove active class when expression evaluates to false', function () {
                var template = '<div active-if="false" class="active">content</div>';

                var element = compileAndLink(template, scope);

                expect(element.attr('class')).not.toContain('active');
            });

            it('it should watch change in attributes and remove or add active class', function () {
                var template = '<div active-if="active" >content</div>';
                scope.active = true;

                var element = compileAndLink(template, scope);

                expect(element.attr('class')).toContain('active');

                scope.active = false;
                scope.$digest();

                expect(element.attr('class')).not.toContain('active');
            });

            it('it should watch change in attributes from method and remove or add active class', function () {
                var template = '<div active-if="active()">content</div>';
                scope.active = jasmine.createSpy('active');

                scope.active.andReturn(true);
                var element = compileAndLink(template, scope);

                expect(element.attr('class')).toContain('active');

                scope.active.andReturn(false);
                scope.$digest();

                expect(element.attr('class')).not.toContain('active');
            });
        });

    });
})();

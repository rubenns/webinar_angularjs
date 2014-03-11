(function () {
    'use strict';
    angular.module('components')
        .directive('activeIf', function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    scope.$watch(attrs.activeIf, function (value) {
                        if (value) {
                            element.addClass('active');
                        } else {
                            element.removeClass('active');
                        }
                    });
                }
            };
        })
        .directive('checkEmail', [function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attrs, ngModelCtrl) {
                    function fromUser(text) {
                        var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                        ngModelCtrl.$render();
                        return pattern.test(text);
                    }
                    ngModelCtrl.$parsers.push(fromUser);
                }
            };
        }])

}());



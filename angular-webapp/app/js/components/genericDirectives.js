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

}());

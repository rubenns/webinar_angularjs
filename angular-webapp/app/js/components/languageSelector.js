/*global angular*/
(function () {
    'use strict';
    angular.module('components')
        .directive('languageSelector', ['i18nService', 'ConfigService', function (i18nService, ConfigService) {
            return {
                restrict: 'A',
                replace: true,
                scope: {},
                template: '<ul>' +
                    '<li ng-repeat="language in languages" active-if="lang==language.locale"><a href="" ng-click="setLang(language.locale)">{{language.name}}</a></li>' +
                    '</ul>',
                link: function (scope) {
                    scope.lang = i18nService.getLang();
                    scope.setLang = i18nService.changeLanguage;
                    scope.languages = ConfigService.getLanguages();

                    scope.$watch(function () {
                        scope.lang = i18nService.getLang();
                    });

                }
            };
        }]);



}());

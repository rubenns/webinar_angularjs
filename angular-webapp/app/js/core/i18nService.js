/* global angular,jQuery */
(function ($) {
    angular.module('core')
        .factory('i18nService', function ($http) {

        var settings = {
            name: ['Msgs'],
            path: '../app/lang/',
            mode: 'map',
            language: 'en',
            encoding: 'UTF-8'
        };

        var i18nPlugin = $.i18n;

        //  Initialize the i18n plugin
        if (i18nPlugin) {
            i18nPlugin.properties(settings);
        }

        function i18n(key) {
            return i18nPlugin.prop(key);
        }

        i18n.changeLanguage = function changeLang(lang) {
            $http.defaults.headers.common['Accept-Language'] = lang;
            if (lang !== settings.language) {
                settings.language = lang;
                $.i18n.map = {};
                $.i18n.properties(settings);
            }
        };

        i18n.isCurrentLanguage = function (lang) {
            return settings.language === lang;
        };

        i18n.getLang = function(){
            return settings.language;
        }

        return i18n;
    });
}(jQuery));
/* global angular */
(function () {
    angular.module('core', [])
        .factory('ConfigService',function(){

          function getLanguages(){
              return [
                  {locale: 'de', name: 'DE'},
                  {locale: 'it', name: 'IT'},
                  {locale: 'es', name: 'ES'},
                  {locale: 'en', name: 'EN'}
              ];
          }

            return {
                getLanguages: function () {
                    return getLanguages();
                }
            };

        })

}());

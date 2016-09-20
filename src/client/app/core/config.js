(function() {
  'use strict';

  var core = angular.module('app.core');

  core.config(toastrConfig);

  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  var config = {
    appErrorPrefix: '[RecruitmentApp Error] ',
    appTitle: 'RecruitmentApp'
  };

  core.value('config', config);

  core.config(configure);

  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider', '$httpProvider'];
  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, $httpProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });

    $httpProvider.interceptors.push(function($q) {
      var realEncodeURIComponent = window.encodeURIComponent;
      return {
        'request': function(config) {
           window.encodeURIComponent = function(input) {
             return realEncodeURIComponent(input).split("%2B").join("+"); 
           }; 
           return config || $q.when(config);
        },
        'response': function(config) {
           window.encodeURIComponent = realEncodeURIComponent;
           return config || $q.when(config);
        }
      };
    });
  }

})();

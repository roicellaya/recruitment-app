/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('GITHUB_USERS_URI', 'https://api.github.com/')
    .constant('API_URI', '/api/')
    .constant('_', window._);
})();

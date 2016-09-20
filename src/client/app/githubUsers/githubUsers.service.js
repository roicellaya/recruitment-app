(function() {
  'use strict';

  angular
    .module('app.githubUsers')
    .factory('githubUsersService', githubUsersService);

  githubUsersService.$inject = ['$resource', 'GITHUB_USERS_URI'];

  /* @ngInject */
  function githubUsersService($resource, GITHUB_USERS_URI) {
    var service = $resource(GITHUB_USERS_URI + 'users', {},
    {
      get: {
        method: 'GET',
        isArray: true
      },
      getByQuery: {
        method: 'GET',
        url: GITHUB_USERS_URI + 'search/users'
      }
    });
    return service;
    ////////////////
  }
})();
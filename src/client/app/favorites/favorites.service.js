(function() {
  'use strict';

  angular
    .module('app.favorites')
    .factory('favoritesService', favoritesService);

  favoritesService.$inject = ['$resource', 'API_URI'];

  /* @ngInject */
  function favoritesService($resource, API_URI) {
    var service = $resource(API_URI + 'favorites', {},
    {
      get: {
        method: 'GET',
        isArray: true
      },
      post: {
        method: 'POST'
      }
    });
    return service;
    ////////////////
  }
})();
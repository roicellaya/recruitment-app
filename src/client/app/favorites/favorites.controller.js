(function() {
  'use strict';

  angular
    .module('app.favorites')
    .controller('FavoritesController', FavoritesController);

  FavoritesController.$inject = ['favoritesService'];

  /* @ngInject */
  function FavoritesController(favoritesService) {
    var vm = this;
    vm.title = 'Favoritos';
    vm.favorites = [];

    activate();

    ////////////////

    function activate() {
      console.log('Favoritos activado!');

      favoritesService.get().$promise
      .then(function getFavorites(result) {
        vm.favorites = result.favorites;
      });
    }
  }
})();
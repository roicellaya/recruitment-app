(function() {
  'use strict';

  angular
    .module('app.favorites')
    .controller('FavoritesController', FavoritesController);

  FavoritesController.$inject = [];

  /* @ngInject */
  function FavoritesController() {
    var vm = this;
    vm.title = 'Favoritos';

    activate();

    ////////////////

    function activate() {
      console.log('Favoritos activado!');
    }
  }
})();
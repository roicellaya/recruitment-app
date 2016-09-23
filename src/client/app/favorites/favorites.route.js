(function() {
  'use strict';

  angular
    .module('app.favorites')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'favorites',
        config: {
          url: '/favorites',
          templateUrl: 'app/favorites/templates/list_favorites.html',
          controller: 'FavoritesController',
          controllerAs: 'vm',
          title: 'Favoritos',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Favoritos'
          }
        }
      }
    ];
  }
})();

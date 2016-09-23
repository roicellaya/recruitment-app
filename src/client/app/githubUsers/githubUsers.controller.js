(function() {
  'use strict';

  angular
    .module('app.githubUsers')
    .controller('GithubUsersController', GithubUsersController);

  GithubUsersController.$inject = ['githubUsersService', 'favoritesService'];

  /* @ngInject */
  function GithubUsersController(githubUsersService, favoritesService) {
    var vm = this;
    vm.title = 'Usuarios de github';
    vm.searchUsers = searchUsers;
    vm.addToFavorite = addToFavorite;
    vm.query = {};

    vm.users = [];
    ////////////////

    function activate() {
      githubUsersService.get().$promise
      .then(function getUsers(users) {
        vm.users = users;
      });
    }

    activate();

    function searchUsers() {
      var query = flattenQuery(vm.query);

      githubUsersService.getByQuery({q: query}).$promise
      .then(function byQuery(queries) {
        vm.users = queries.items;
      });
    }

    function flattenQuery(query) {
      var flattened = '';

      for (var keys = Object.keys(query), index = 0, end = keys.length; index < end; index++) {
        var key = keys[index];

        if (query[key].length > 0) {
          flattened = flattened + key + ':' + query[key] + '+';
        }
      }

      flattened = flattened.slice(0, -1);

      return flattened;
    }

    function addToFavorite(user) {
      console.log(user);
      var newUser = {};

      newUser.idGithub = user.id
      newUser.login = user.login;

      favoritesService.post(newUser).$promise
      .then(function result(res) {
        console.log(res);
        if(res.status === 200) {
          toastr.success('Usuario agregado a favoritos correctamente');
        } else {
          toastr.error('Error al agregar usuario');
        }
      });
    }
  }
})();
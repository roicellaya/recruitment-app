(function() {
  'use strict';

  angular
    .module('app.githubUsers')
    .controller('GithubUsersController', GithubUsersController);

  GithubUsersController.$inject = ['githubUsersService'];

  /* @ngInject */
  function GithubUsersController(githubUsersService) {
    var vm = this;
    vm.title = 'Usuarios de github';
    vm.searchUsers = searchUsers;
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
console.log(query);
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
  }
})();
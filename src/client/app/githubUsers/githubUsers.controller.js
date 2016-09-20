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
      githubUsersService.getByQuery({q: 'location:' + vm.query.location}).$promise
      .then(function byQuery(queries) {
        vm.users = queries.items;
      });
    }
  }
})();
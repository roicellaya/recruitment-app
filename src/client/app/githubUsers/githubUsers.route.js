(function() {
  'use strict';

  angular
    .module('app.githubUsers')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'githubUsers',
        config: {
          url: '/github-users',
          templateUrl: 'app/githubUsers/templates/github-users.html',
          controller: 'GithubUsersController',
          controllerAs: 'vm',
          title: 'Usuarios de github',
          settings: {
            nav: 1,
            content: '<i class="fa fa-lock"></i> Usuarios de github'
          }
        }
      }
    ];
  }
})();

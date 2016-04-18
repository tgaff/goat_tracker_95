angular
  .module('goat-tracker', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,   $locationProvider  ) {
  $routeProvider
    .when('/', {redirectTo: '/goats'})
    .when('/goats', {
      templateUrl: '/templates/goats-index.html',
      controllerAs: 'goatsIndexCtrl',
      controller: 'GoatsIndexController'
    })
    .otherwise({redirectTo: '/'});

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

}

angular
  .module('goat-tracker', ['ngRoute'])
  .config(config);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {redirectTo: '/goats'})
    .when('/goats', {
      templateUrl: '/templates/goats-index.html',
      controllerAs: 'goatsIndexCtrl',
      controller: 'GoatsIndexController'
    })
    .when('/goats/:id', {
      templateUrl: '/templates/goats-show.html',
      controllerAs: 'goatsShowCtrl',
      controller: 'GoatsShowController',
    })
    .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}

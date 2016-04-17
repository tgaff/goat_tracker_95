angular
  .module('goat-tracker', ['ngRoute'])
  .config(config);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/goats-index',
      controllerAs: 'goatsIndexCtrl',
      controller: 'GoatsIndexController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}

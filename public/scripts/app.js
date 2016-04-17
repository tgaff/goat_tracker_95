angular
  .module('goat-tracker', ['ngRoute'])
  .config(config);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/goats-index.html',
      controllerAs: 'goatsIndexCtrl',
      controller: 'GoatsIndexController'
    })
    .otherwise('/404', {
      template: "<h1>Oops! this page doesn't exist yet!</h1>"
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}

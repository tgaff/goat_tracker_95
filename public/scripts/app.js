angular
  .module('goat-tracker', ['ngRoute', 'uiGmapgoogle-maps'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider'];
function config(   $routeProvider,   $locationProvider,   uiGmapGoogleMapApiProvider  ) {
  $routeProvider
    .when('/', {redirectTo: '/goats'})
    .when('/goats', {
      templateUrl: '/templates/goats-index.html',
      controllerAs: 'goatsIndexCtrl',
      controller: 'GoatsIndexController'
    })
    .when('/goats/map', {
      templateUrl: '/templates/goats-map.html',
      controller: 'GoatsMapController',
      controllerAs: 'goatsMapCtrl'
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

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg',
    libraries: 'weather,geometry,visualization'
  });

}

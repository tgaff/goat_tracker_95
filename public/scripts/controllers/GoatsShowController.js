angular
  .module('goat-tracker')
  .controller('GoatsShowController', GoatsShowController);

GoatsShowController.$inject = ['$http', '$routeParams'];
function GoatsShowController(   $http ,  $routeParams   ) {
  var vm = this;
  vm.goat = {}; // no goat yet :-(
  var baseUrl = 'http://goats-api.herokuapp.com';
  fetchGoat(); // pass the id

  function fetchGoat(id) {

  }
}

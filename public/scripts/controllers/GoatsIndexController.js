angular
  .module('goat-tracker')
  .controller('GoatsIndexController', GoatsIndexController);

GoatsIndexController.$inject = ['$http'];
function GoatsIndexController(   $http   ) {
  var vm = this;
  vm.goats = [];
  var baseUrl = 'http://goats-api.herokuapp.com';
  fetchAllGoats();  // fetch goats on start

  function fetchAllGoats() {
    // use $http to get baseUrl + /goats
    // store them in vm.goats
  }
}

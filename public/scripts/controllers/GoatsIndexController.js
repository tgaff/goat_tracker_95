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
    $http({
      method: 'GET',
      url: baseUrl + '/api/goats'
    }).then(function successCallback(response) {
      console.log('goats received: ', response);
      vm.goats = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  }
}

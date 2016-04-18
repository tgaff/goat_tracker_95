angular
  .module('goat-tracker')
  .controller('GoatsMapController', GoatsMapController);

GoatsMapController.$inject = ['$http'];
function GoatsMapController(   $http   ) {
  var vm = this;
  console.log('GoatsMapController online');

  // map config
  vm.mapCenter = { latitude: 30.6928686, longitude: -9.8474607 };
  vm.mapZoom = 12;

  // goat retrieval department
  var baseUrl = 'http://goats-api.herokuapp.com';
  vm.goats = [];
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

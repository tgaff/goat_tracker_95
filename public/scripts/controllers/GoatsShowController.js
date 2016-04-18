angular
  .module('goat-tracker')
  .controller('GoatsShowController', GoatsShowController);

GoatsShowController.$inject = ['$http', '$routeParams', '$location', '$timeout'];
function GoatsShowController(   $http ,  $routeParams,   $location,   $timeout  ) {
  var vm = this;
  vm.goat = {};
  vm.deleteGoat = deleteGoat;
  vm.alert = null;

  var baseUrl = 'http://goats-api.herokuapp.com';
  console.log('route', $routeParams.id);
  fetchGoat($routeParams.id);  // fetch goat on start


  function fetchGoat(id) {
    $http({
      method: 'GET',
      url: baseUrl + '/api/goats/' + id
    }).then(function successCallback(response) {
      console.log('goat received: ', response);
      response.data.ageInMonths = calculateAgeInMonths(response.data.birthdate);
      vm.goat = response.data;
    }, function errorCallback(response) {
      console.log('There was an error getting the data', response);
    });
  }

  function calculateAgeInMonths(birthdate) {
    var age = ((Date.now() - Date.parse(birthdate))/1000/60/60/24/12).toFixed();
    console.log('age=', age);
    return age;
  }

  function deleteGoat(goat) {
    console.log('deleting goat', goat.id);
    $http({
      method: 'DELETE',
      url: baseUrl + '/api/goats/' + goat.id
    }).then(function deleteSuccess() {
      console.log('goat #', goat.id, ' destroyed');
      vm.goat = {};
      vm.alert = "Goat " + goat.name + " deleted.";
      // wait 1 second and then change page to index

      $timeout(returnToIndex, 1000);
    });
  }

  function returnToIndex() {
    $location.path('/goats');

  }
}

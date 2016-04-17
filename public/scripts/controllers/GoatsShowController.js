angular
  .module('goat-tracker')
  .controller('GoatsShowController', GoatsShowController);

GoatsShowController.$inject = ['$http', '$routeParams'];
function GoatsShowController(   $http ,  $routeParams   ) {
  var vm = this;
  vm.goat = {};
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
}

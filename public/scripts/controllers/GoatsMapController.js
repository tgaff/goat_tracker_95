angular
  .module('goat-tracker')
  .controller('GoatsMapController', GoatsMapController);

GoatsMapController.$inject = [];
function GoatsMapController(    ) {
  var vm = this;
  console.log('GoatsMapController online');

  vm.mapCenter = { latitude: 30.6928686, longitude: -9.8474607 };
}

angular
  .module('goat-tracker')
  .controller('GoatsMapController', GoatsMapController);

GoatsMapController.$inject = [];
function GoatsMapController(    ) {
  var vm = this;
  vm.goats = [];
}

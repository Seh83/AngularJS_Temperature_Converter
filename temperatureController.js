(function() {
  'use strict';

  angular
    .module('app')
    .controller('TemperatureController', TemperatureController);

  TemperatureController.$inject = ['TemperatureMonitor'];


  function TemperatureController(temperatureMonitor) {

    var vm = this;

    vm.addTemperature = addTemperature;
    vm.calcMedianTempeture = calcMedianTempeture;
    vm.medianTempeture = null;
    vm.inputTemperature = 0;
    vm.recordedTemperatures = temperatureMonitor.temperatures;


    function addTemperature() {
      if (vm.inputTemperature !== undefined) {
        temperatureMonitor.recordTemperature(vm.inputTemperature);
      }

    }

    function calcMedianTempeture() {
      this.medianTempeture = temperatureMonitor.getCurrentMedian();

    }
  }

})();
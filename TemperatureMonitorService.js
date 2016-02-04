(function(){
  'use strict';
  /*jshint -W053 */
  
  angular
    .module('app')
    .service('TemperatureMonitor', TemperatureMonitor);
  
  TemperatureMonitor.$inject = [];
  
  
  function TemperatureMonitor(){
    this.temperatures = [];
  }
  
  TemperatureMonitor.prototype.recordTemperature = function(temperature){
    this.temperatures.push(parseFloat(temperature));
    
  }
  TemperatureMonitor.prototype.getCurrentMedian = function(){
    
    var observations = this._cloneArrayOfNumbers(this.temperatures).sort();
    
    console.log(observations);
    if(observations.length === 0) {
      return null;
    }else if(observations.length === 1) {
      return observations[0]
    }else if(observations.length % 2 === 0){
      return (observations[observations.length/2-1]
              + observations[(observations.length/2)])
              / 2;
    }else{
      return observations[Math.ceil(observations.length/2)-1];
    }
  }
  
  TemperatureMonitor.prototype._cloneArrayOfNumbers = function(arr){
    var clone = [];
    arr.forEach(function(value){
      clone.push(value);
    });
    return clone;
  }
  
})();

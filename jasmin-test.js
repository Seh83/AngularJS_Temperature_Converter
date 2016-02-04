describe('Service: myService', function() {

  var service;

  beforeEach(function() {
    module('app');
  });

  beforeEach(inject(function(TemperatureMonitor) {
    service = TemperatureMonitor;
  }));

  it('is TemperatureMonitor.temperatures.length zero', function() {
    expect(service.temperatures.length).toBe(0);
  });

  it('does TemperatureMonitor accept a correct temperature', function() {
    service.recordTemperature(10)
    expect(service.temperatures[0]).toBe(10);
  });

  it('does TemperatureMonitor accepts an entry thats below zero, and in decimals', function() {
    service.recordTemperature(10);
    service.recordTemperature(-11);
    service.recordTemperature(11.77);
    service.recordTemperature(-0.67);
    expect(service.temperatures.length).toBe(4);
  });

  it('does TemperatureMonitor calcuate the correct medium with even number of observations', function() {
    service.recordTemperature(5);
    service.recordTemperature(1);
    service.recordTemperature(-7);
    service.recordTemperature(7);
    service.recordTemperature(8);
    service.recordTemperature(3);

    expect(service.getCurrentMedian()).toBe(4);
  });

  it('does TemperatureMonitor calcuate the correct medium with odd number of observations', function() {
    service.recordTemperature(5);
    service.recordTemperature(1);
    service.recordTemperature(-7);
    service.recordTemperature(7);
    service.recordTemperature(8);
    service.recordTemperature(3);
    service.recordTemperature(9);

    expect(service.getCurrentMedian()).toBe(5);
  });

});
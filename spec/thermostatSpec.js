describe("A thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat()
  });

  it("Should start at 20 degrees", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });

  it("Should be in powersaving mode by default", function(){
  expect(thermostat.isPowerSaving()).toBe(true);
  });
  

});

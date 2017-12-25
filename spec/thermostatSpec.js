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

  it("Can turn powersaving off", function(){
  thermostat.powerSavingOff();
  expect(thermostat.isPowerSaving()).toBe(false);
})

  it("Can turn powersaving on", function(){
  thermostat.powerSavingOff();
  thermostat.powerSavingOn();
  expect(thermostat.isPowerSaving()).toBe(true);
})


});

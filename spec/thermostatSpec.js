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
  });

  it("Can turn powersaving on", function(){
    thermostat.powerSavingOff();
    thermostat.powerSavingOn();
    expect(thermostat.isPowerSaving()).toBe(true);
  });

  it("Can increase the temperature", function(){
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21)
  });

  it("Can decrease the temperature", function(){
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19)
  });

  it("Should have a reset button that resets temperature to 20", function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

});

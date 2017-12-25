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

  it("Should show message 'low-usage' when energy usage is low", function(){
    for(var i = 0; i < 3; i ++){thermostat.down()}
    expect(thermostat.reportUsage()).toEqual("low-usage");
  });

  it("Should show message 'medium-usage' when energy usage is medium", function(){
    for(var i = 0; i < 4; i ++){thermostat.up()}
    expect(thermostat.reportUsage()).toEqual("medium-usage");
  });

  it("Should show message 'high-usage' when energy usage is high", function(){
    thermostat.powerSavingOff()
    for(var i = 0; i < 6; i++){thermostat.up()}
    expect(thermostat.reportUsage()).toEqual("high-usage");
  });

});

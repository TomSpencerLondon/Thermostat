$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#turn-up').click(function() {
    thermostat.up();
    updateTemperature();
  })
  $('#turn-down').click(function (){
    thermostat.down();
    updateTemperature();
  })
  $('#reset').click(function () {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersave-on').click(function () {
    thermostat.powerSavingOn();
    $('#power-save-status').text('on');
    updateTemperature();
  })

  $('#powersave-off').click(function () {
    thermostat.powerSavingOff();
    $('#power-save-status').text('off');
    updateTemperature();
  })

  function updateTemperature() {
    $('#temp').text(thermostat.getCurrentTemperature());
    $('#temp-box').attr('class', thermostat.reportUsage());
  }

});

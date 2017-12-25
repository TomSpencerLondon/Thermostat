'use strict';

function Thermostat (){
  this.temperature = 20;
  this.powerSaving = true;
};

Thermostat.prototype.isPowerSaving = function(){
  return this.powerSaving;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature
}

Thermostat.prototype.powerSavingOn = function(){
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function(){
  this.powerSaving = false;
};

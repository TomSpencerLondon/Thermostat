const API_KEY = '&appid=14e63a4bb77d231e2bbeb5173100e36c';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='

$(document).ready(function(){

  function getCityWeather(cityName){
    $.get(url + cityName + API_KEY, function(data){
      temperature = (parseInt(parseInt(data.main.temp) - 273.15))
      $('#current-temperature').text('Current temperature: ' + temperature + String.fromCharCode(176) + 'C');
    })
  }
  $("#select-city").submit(function(event){
    event.preventDefault();
    var city = $("input:first").val()
    getCityWeather(city);
  })
})

$( document ).ready(function(){

  var thermostat = new Thermostat();

  $(".up").click(function () {
    thermostat.up();
    $(".temperature").text(thermostat.temperature + " °C");
  });

  $(".down").click(function () {
    thermostat.down();
    $(".temperature").text(thermostat.temperature + " °C");
  });

});

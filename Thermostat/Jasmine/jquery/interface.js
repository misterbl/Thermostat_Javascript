$( document ).ready(function(){

  var thermostat = new Thermostat();

  $("#weather").change(function (event) {
  var city = $("#weather").val();
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=37011bfc69150251e42df386aef58eae", function (result) {
    $(".weather_forcast").text("Current temperature in " + city + ": " + result.main.temp + " °C");
    event.preventDefault();
  });
});

  $(".up").click(function () {
    thermostat.up();
    $(".usage").text(thermostat.energyUsage());
    $(".temperature").text(thermostat.temperature + " °C");
  });

  $(".down").click(function () {
    thermostat.down();
    $(".usage").text(thermostat.energyUsage());
    $(".temperature").text(thermostat.temperature + " °C");
  });

  $(".eco").click(function () {
    thermostat.switchMode();
    if (thermostat.powerSaving == true) {
      $(".power_saving").text("Power Saving mode ON");
    }
    else {
      $(".power_saving").text("Power Saving mode OFF");
    }
  });

  $(".reset").click(function () {
    thermostat.resetTemp();
    $(".temperature").text(thermostat.temperature + " °C");
  });

  $(".power").click(function () {
    alert ("Thermostat is switching off, good bye");
  });
});

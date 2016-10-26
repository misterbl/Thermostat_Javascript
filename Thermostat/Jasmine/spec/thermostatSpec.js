describe ("Thermostat", function() {
var thermostat = new Thermostat ()
    it ('starts at 20°C', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it ('starts with the power saving on by default', function () {
      expect(thermostat.powerSaving).toBe(true);
    });

    it ('raises the temperature by 1°C', function() {
      thermostat.up ();
        expect(thermostat.temperature).toBe(21);
    });

  describe ("Down", function () {
    var thermostat2 = new Thermostat ()
    it ('decreases the temperature by 1°C', function() {
      thermostat2.down ();
        expect(thermostat2.temperature).toBe(19);
    });
  });

  describe ("Minimum temperature", function () {
    var thermostat3 = new Thermostat ()
    it ('can\'t have a lower temperature than 10°C', function (){
        thermostat3.temperature = 10
        expect (function () {thermostat3.down () }).toThrow ('the lowest temperature is 10°C!');
    });
  });

  describe ("Maximum temperature 25°C", function () {
    var thermostat4 = new Thermostat ()
    it ('can\'t have a temperature higher than 25°C if power saving is on', function (){
        thermostat4.temperature = 25;
        expect (function () {thermostat4.up () }).toThrow ('the temperature can\t be higher than 25°C if power saving mode is on!');
    });
  });

  describe ("Maximum temperature 32°C", function () {
    var thermostat5 = new Thermostat ()
    it ('can\'t have a temperature higher than 32°C if power saving is off', function (){
        thermostat5.temperature = 32;
        thermostat5.powerSaving = false;
        expect (function () {thermostat5.up () }).toThrow ('the temperature can\t be higher than 32°C if power saving mode is off!');
    });
  });

  describe ("Maximum temperature 32°C", function () {
    var thermostat5 = new Thermostat ()
    it ('can\'t have a temperature higher than 32°C if power saving is off', function (){
        thermostat5.temperature = 32;
        thermostat5.powerSaving = false;
        expect (function () {thermostat5.up () }).toThrow ('the temperature can\t be higher than 32°C if power saving mode is off!');
    });
  });


  describe ("Reset temperature", function () {
    var thermostat6 = new Thermostat ()
    it ('it resets the temperature to 20°C', function (){
        thermostat6.up ();
        thermostat6.reset ()
        expect(thermostat6.temperature).toBe(20)
    });
  });

  describe ("Ask Energy usage", function () {
    var thermostat7 = new Thermostat ()
    it ('it allows to ask about the current energy usage for low', function (){
      thermostat7.temperature = 12
        expect(thermostat7.energyUsage ()).toEqual("low-usage")
    });
    it ('it allows to ask about the current energy usage for medium', function (){
      thermostat7.temperature = 22
        expect(thermostat7.energyUsage ()).toEqual("medium-usage")
    });
    it ('it allows to ask about the current energy usage for high', function (){
      thermostat7.temperature = 26
        expect(thermostat7.energyUsage ()).toEqual("high-usage")
    });
  });



});

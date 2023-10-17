function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
    }
    const temperatureInCelsius = 25;
    const temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
    console.log(temperatureInFahrenheit);
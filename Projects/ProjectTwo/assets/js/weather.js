document.addEventListener('DOMContentLoaded', function() {
    var apiKey = 'bcef132a81af8fa612719d450035e404'; 
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Sarajevo&appid=' + apiKey;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var weatherData = document.getElementById('weatherData');
            weatherData.innerHTML = `
                <p>Location: ${data.name}</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            var weatherData = document.getElementById('weatherData');
            weatherData.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
        });
});

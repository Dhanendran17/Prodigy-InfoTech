function fetchWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = 'd7930df8508bdcd17ccfc1cd1d7da57f';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                var weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                `;

                
                updateBackground(data.weather[0].main.toLowerCase());
            } else {
                alert(`Error: ${data.message}`);
            }
        })
        .catch(error => {
            alert('An error occurred while fetching weather data.');
            console.error('Error:', error);
        });
}

function updateBackground(weather) {
    const backgroundDiv = document.querySelector('.background');
    backgroundDiv.className = 'background'; 
    switch (weather) {
        case 'clear':
        case 'sunny':
            backgroundDiv.classList.add('sunny');
            break;
        case 'clouds':
        case 'cloudy':
            backgroundDiv.classList.add('cloudy');
            break;
        case 'rain':
        case 'drizzle':
            backgroundDiv.classList.add('rainy');
            break;
        case 'thunderstorm':
            backgroundDiv.classList.add('stormy');
            break;
        default:
            backgroundDiv.classList.add('default');
            break;
    }
}

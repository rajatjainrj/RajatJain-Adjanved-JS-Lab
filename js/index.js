const apiKey = "ae215c3c3d6c9969f9d9e89e759cbb5e";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

const cityInput = document.getElementById("cityInput");
const city = document.getElementById("city");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const minMax = document.getElementById("min-max-temp");

const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

cityInput.addEventListener("keyup", (event) => {
    fetch(url + cityInput.value)
        .then((response) => response.json())
        .then(value => {
            setData(value);
        })
        .catch((error) => console.log(error.message));
});

function setData(response) {

    if (response.name !== undefined) {
        city.innerText = response.name;

        let dateObj = new Date(parseFloat(response.dt) * 1000);
        dateObj.getMonth()
        date.innerText = `${weekdays[dateObj.getDay()]}, ${dateObj.getDate()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
        temp.innerHTML = `${parseInt(response.main.temp)}&deg;c`;
        weather.innerText = `${response.weather[0].main}`;
        minMax.innerHTML = `${parseInt(response.main.temp_min)}&deg;c/${parseInt(response.main.temp_max)}&deg;c`;
    }
}


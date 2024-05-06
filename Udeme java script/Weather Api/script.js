let city = "Bangkok";
const apikey = "1444d22dad293793547f6769d3f95d0f";
const form = document.getElementById("form");
const search = document.getElementById("search");

function setCityForApi(e) {
    e.preventDefault();
    city = search.value
    showWeather();
}

function setData9() {
    showWeather();

};

async function showWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        const response = await fetch(url);
        const data = await response.json();
        showDatatoUi(data);


    } catch (error) {
        alert("ไม่พบเมืองที่คุณค้นหา")
        if(error){
        const newUrl = `https://api.openweathermap.org/data/2.5/weather?q=australia&appid=${apikey}`;
        const response = await fetch(newUrl);
        const data = await response.json();
        showDatatoUi(data);
        }
    }
}

function showDatatoUi(data) {
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const weather = document.getElementById("weather");
    const status = document.getElementById("status");
    const humidity = document.getElementById("humidity");
    const windspeed = document.getElementById("windspeed");

    city.innerText = data.name;
    state.innerText = data.sys.country;
    weather.children[0].innerText = calculate(data.main.temp).toFixed(0) + "°C";
    weather.children[1].innerText = "min:" + calculate(data.main.temp_min).toFixed(0) + " max: " + calculate(data.main.temp_max).toFixed(0);

    status.innerText = data.weather[0].description;
    humidity.innerText = "Humidity:" + data.main.humidity;
    windspeed.innerText = "Windspeed:" + data.wind.speed;
};
function calculate(k) {
    return k - 273.15;
}


form.addEventListener("submit", setCityForApi)

setData9();
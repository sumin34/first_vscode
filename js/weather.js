const api = 'e39f0f39826dac8a30ba8c660d43de0e';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api}`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherTop = document.querySelector("#weather");
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innertext =  data.weather[0].main;
        city.innertext = data.name;
        weatherTop.classList.add();

    });
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
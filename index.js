// http://api.weatherapi.com/v1/current.json?key=e65206e21efc4479b12132046252502&q=mumbai&aqi=no


const temperatureField = document.querySelector('.temperature');
const locationField = document.querySelector('.location');
const dateTime = document.querySelector('.datetime');
const weatherImage = document.querySelector('.image p');
const form = document.querySelector('form');
const searchField = document.querySelector('.searcharea');
const weatherImg = document.querySelector('.image img');

let country = 'mumbai';

const data = async (location) => {
    let API_URL = `https://api.weatherapi.com/v1/current.json?key=e65206e21efc4479b12132046252502&q=${location}&aqi=no`;
    const res = await fetch(API_URL);
    const result = await res.json();
    console.log(result);

    let locationName = result.location.name;
    let time = result.location.localtime;
    let weather = result.current.temp_c;
    let condition = result.current.condition.text;
    let image = result.current.condition.icon;

    updateDetails(weather, condition, time, locationName, image);
}


    function updateDetails(weather, condition, time, locationName, image){
        temperatureField.innerText = weather + '°C';
        locationField.innerText = locationName;
        dateTime.innerText = time;
        weatherImage.innerText = condition;
        weatherImg.src = 'https:'+ image;   
    }

function searchForLocation(e){
    e.preventDefault()

    country = searchField.value;
    data(country);
}


form.addEventListener('submit', searchForLocation);

data(country);


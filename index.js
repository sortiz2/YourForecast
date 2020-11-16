const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName= document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const time = document.querySelector('.card-top img');

const F =(kelvin)=>{
    farh = Math.round((kelvin - 273.15) * 9/5 + 32);
    return farh;
}

const timeOfDay = (icon) => {
    if (icon.includes ('d')) {return true}
    else {return false}
}

updateWeather = (city)=>{
    console.log(city);
    const image = city.weather[0].icon;
    const iconSource = `http://openweathermap.org/img/wn/${image}@2x.png`
    cityName.textContent = city.name;
    cardBody.innerHTML = `
    <div class="card body" > 
        <div class="card-mid row">
                <div class="col text-center temp">
                    <span>${F(city.main.temp)}&deg;F</span>
                </div>
                <div class="col condition-temp">
                    <p class="condition">${city.weather[0].description}</p>
                    <p class="high">${F(city.main.temp_max)}&deg;F</p>
                    <p class="low">${F(city.main.temp_min)}&deg;F</p>
                </div>         
            </div>
            <div class="icon-container card shadow mx-auto">
                <img src=${iconSource} class="card-img-icon" alt=""/>
            </div>
            <div class="card-bottom px-5 py-4 row">
                <div class="col text-center">
                    <p>${F(city.main.feels_like)}&deg;F</p>
                    <span>Feels Like</span>
                </div>
                <div class="col text-center">
                    <p>${(city.main.humidity)}%</p>
                    <span>Humidity</span>
                    </div>
                </div>`;

        if (timeOfDay(image)){
            console.log('day');
            time.setAttribute('src', 'img/day.jpg');
        } else{ 
            console.log('night');
            time.setAttribute('src', 'img/night.jpg');
        }
}

searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    const citySearch = cityValue.value.trim();
    console.log(citySearch);
    searchForm.reset();

    requestCity(citySearch)
        .then((data)=>{
            updateWeather(data);
        }) 
        .catch((error)=>{console.log(error)})
})
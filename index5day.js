const cityValues = document.querySelector('.search-locations input');
const searchForms = document.querySelector('.search-locations');
const cityNames = document.querySelector('.city-names p');
const cardBodys = document.querySelector('.card-bodys');
const hidecardInfo = document.querySelector('.back-card');
const hideWeather = document.querySelector('.container-lg');

fiveDayWeather = (city5Day)=>{
    console.log(city5Day);
    cityNames.textContent = city5Day.city.name;
    cardBodys.innerHTML = `
    <div class="card-bodys text-center">
                    <div class="row">
                      <div class="card col">
                      Date & Time <br>  
                      ${(city5Day.list[0].dt_txt)}
                          <div class = "icon-container card shadow mx-auto">
                            <img src=${iconSources}  class="card-img-icon" alt=""/>
                            <span> . . . </span>
                          </div>
                        <div class = "temp">
                          <p>Temp ${Math.round(city5Day.list[0].main.temp)}</p>
                          <Max>Low:  ${Math.round(city5Day.list[0].main.temp_min)} High: ${Math.round(city5Day.list[0].main.temp_max)}</p>
                        </div>  
                      </div>
                      <div class="card col">
                      Date & Time <br>
                      ${(city5Day.list[4].dt_txt)}
                        <div class = "icon-container card shadow mx-auto">
                            <img src= ${`https://openweathermap.org/img/wn/${city5Day.list[4].weather[0].icon}@2x.png`} class="card-img-icon" alt=""/>
                        <span> . . . </span>
                    </div>
                    <div class = "temp">
                      <p>Temp ${Math.round(city5Day.list[4].main.temp)}</p>
                      <High:>Low: ${Math.round(city5Day.list[4].main.temp_min)} High: ${Math.round(city5Day.list[4].main.temp_max)}</p>
                    </div> 
                    </div>
                    <div class="card col">
                      Date & Time <br>
                      ${(city5Day.list[12].dt_txt)}
                      <div class = "icon-container card shadow mx-auto">
                        <img src= ${`https://openweathermap.org/img/wn/${city5Day.list[12].weather[0].icon}@2x.png`} class="card-img-icon" alt=""/>
                        <span> . . . </span>
                    </div>
                    <div class = "temp">
                      <p>Temp ${Math.round(city5Day.list[12].main.temp)}</p>
                      <High:>Low: ${Math.round(city5Day.list[12].main.temp_min)} High: ${Math.round(city5Day.list[12].main.temp_max)} </p>
                    </div> 
                    </div>
                      <div class="card col">
                      Date & Time <br>
                      ${(city5Day.list[20].dt_txt)}
                      <div class = "icon-container card shadow mx-auto">
                      <img src= ${`https://openweathermap.org/img/wn/${city5Day.list[20].weather[0].icon}@2x.png`} class="card-img-icon" alt=""/>
                      <span> . . . </span>
                    </div>
                    <div clas
                    <div class = "temp">
                      <p>Temp ${Math.round(city5Day.list[20].main.temp)}</p>
                      <High:>Low: ${Math.round(city5Day.list[20].main.temp_min)} High: ${Math.round(city5Day.list[20].main.temp_max)}</p>
                    </div> 
                    </div>
                    <div class="card col">
                      Date & Time <br>
                      ${(city5Day.list[28].dt_txt)}
                      <div class = "icon-container card shadow mx-auto">
                        <img src= ${`https://openweathermap.org/img/wn/${city5Day.list[28].weather[0].icon}@2x.png`} class="card-img-icon" alt=""/>
                      <span> . . . </span>
                    </div>
                  <div clas
                    <div class = "temp">
                      <p>Temp ${Math.round(city5Day.list[28].main.temp)}</p>
                      <High:>Low: ${Math.round(city5Day.list[28].main.temp_min)} High: ${Math.round(city5Day.list[28].main.temp_max)}</p>
                    </div> 
                    </div>
                    </div>`;
    
                    hidecardInfo.classList.remove('d-none');
                    hideWeather.classList.remove('d-none');

}

searchForms.addEventListener('submit' , e =>{
    e.preventDefault();
    const citySearched = cityValues.value.trim();
    console.log(citySearched);
    searchForms.reset();

    fiveDay(citySearched)
        .then((data)=>{
            fiveDayWeather(data);
        })
        .catch((error)=>{console.log(error)})
})


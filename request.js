const key = '594e90ce02964b4bf7d942ed63b3f6ca';

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=imperial&appid=${key}`;

    const response = await fetch(baseURL + query);

    const data = await response.json();
    return data;

}
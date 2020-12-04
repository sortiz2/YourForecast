const key = '594e90ce02964b4bf7d942ed63b3f6ca';

const requestCity = async (city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=imperial&appid=${key}`;

    const response = await fetch(baseURL + query);

    const data = await response.json();
    return data;

}

const fiveDay = async (city5Day) => {
    const baseURL5Day = 'https://api.openweathermap.org/data/2.5/forecast'
    const query5Day = `?q=${city5Day}&units=imperial&appid=${key}`;

    const respond = await fetch(baseURL5Day + query5Day);

    const datas = await respond.json();
    return datas;

}
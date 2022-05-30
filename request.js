const key = 'bc12083e70d2d22298c2df1cec7101d9';

// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=bc12083e70d2d22298c2df1cec7101d9';

// fetch(baseURL)
//     .then((data) => {console.log('response', data.json())})
//     .catch((error) => {
//         console.log(error);
//     });
    

const requestCity = async (city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    const response = await fetch(baseURL + query);

    const data = await response.json();
    return data;
}



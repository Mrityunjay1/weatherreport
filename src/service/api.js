
import axios from 'axios'
const API_URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='0722e4697310534d62a0ffdaacb25635'

export default async function getData(city,country) {
    return await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);

}

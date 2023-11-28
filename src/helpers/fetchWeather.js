const fetchWeather = async (queriedCity) => {
    try {
        const apiKey = "27c534833eeefa8cb0959cb9839cce77";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${queriedCity}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);
        const weather = await res.json();
    
        return weather;
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

export default fetchWeather
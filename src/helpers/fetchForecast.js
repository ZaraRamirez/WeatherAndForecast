const fetchForecast = async (queriedCity) => {
    try {
        const apiKey = "27c534833eeefa8cb0959cb9839cce77";
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${queriedCity}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);
        const forecast = await res.json();
    
        console.log(forecast);
        return forecast;
    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
}

export default fetchForecast
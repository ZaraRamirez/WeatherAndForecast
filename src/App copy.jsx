const App = () => {
    return (
        <>
            <h1>My Weather API</h1>
            <input
                className=""
                type="text"
                placeholder="Enter city"
                onBlur={(e) => setCity(e.target.value)}
            />
            <button
                onClick={() => getWeather()}
            >
                Search
            </button>
            <Card date="Jun 5" icon="" temperature="25" description="Sunny"/>

            {weather && (
                <div>
                    <h2>Current Weather</h2>
                    <h2>{weather.name}</h2>
                    <h3>{weather.main.temp}</h3>
                    <h4>{weather.weather[0].description}</h4>
                </div>
            )}

            {forecast && (
                <div>
                    <h2>Day Forecast</h2>
                    {forecast.list.slice(0,8).map((item, index) => (
                            <div key={index}>
                                <h2>{item.dt_txt}</h2>
                                <h3>{item.main.temp}</h3>
                            </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default App
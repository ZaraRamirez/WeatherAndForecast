import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import fetchWeather from "./helpers/fetchWeather.js";
import fetchForecast from "./helpers/fetchForecast.js";
import ForecastCarousel from "./components/ForecastCarousel.jsx";
import PrincipalCard from "./components/PrincipalCard.jsx";

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const getWeather = () => {
        fetchWeather(city)
            .then((data) => {
                setWeather(data);
            });
    }

    const getForecast = () => {
        fetchForecast(city)
            .then((data) => {
                setForecast(data);
            });
    }

    useEffect(() => {
        if (city) {
            getForecast()
        }
    }, [city]);

    return (
        <>
            <div className="min-h-full 
                            flex 
                            text-white 
                            text-center">
                <div className="containerLeft 
                                flex  h-screen
                                w-2/6 
                                bg-zinc-700">
                    <div className="m-auto">
                        {weather && (
                            <PrincipalCard 
                                icon={weather.weather[0].icon} 
                                temperature={weather.main.temp} 
                                description={weather.weather[0].description} 
                                humidity={weather.main.humidity}
                                wind={weather.wind.speed}

                            />
                        )}
                    </div>
                </div>
                <div className="containerRight 
                                w-4/6 
                                bg-zinc-800
                                flex flex-col flex-grow">
                        <div className="flex-grow my-auto">
                            <h1>WEATHER</h1>
                            <hr className="h-px w-9/12 bg-zinc-600 mx-auto"/>
                            <br/>
                            <input
                                className="py-3 px-5 
                                        w-4/6 
                                        rounded-full 
                                        bg-zinc-700"
                                type="text"
                                placeholder="Write city"
                                onBlur={(e) => setCity(e.target.value)}
                            />
                            <button
                                className="ml-5"
                                onClick={() => getWeather()}
                            >
                                <FaMagnifyingGlass className="text-3xl"/>
                            </button>
                        </div>
                        <div className="flex-grow">
                            <h1>FORECAST</h1>
                            <hr className="h-px w-9/12 bg-zinc-600 mx-auto"/>
                            <br/>
                            {forecast && 
                                <ForecastCarousel forecast={forecast}/>
                            }
                        </div>
                </div>
            </div>
        </>
    )
}

export default App
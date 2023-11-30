import fetchWeather from '../../helpers/fetchWeather';

describe('fetchWeather', () => {
  it('fetches data from OpenWeatherMap API', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({
        weather: [{ description: 'Clear' }],
        main: { temp: 25, humidity: 50 },
        wind: { speed: 5 },
      }),
    });

    const weatherData = await fetchWeather('London');

    console.log('Real API Response:', weatherData);

    expect(weatherData).toBeDefined();
    expect(weatherData.weather).toBeDefined();
    expect(Array.isArray(weatherData.weather)).toBeTruthy();
    expect(weatherData.weather.length).toBeGreaterThan(0);
    expect(weatherData.weather[0].description).toBeDefined();
    expect(weatherData.main).toBeDefined();
    expect(weatherData.main.temp).toBeDefined();
    expect(weatherData.wind).toBeDefined();
    expect(weatherData.wind.speed).toBeDefined();
    expect(weatherData.main.humidity).toBeDefined();
  });
});

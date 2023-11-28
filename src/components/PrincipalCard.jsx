const styles = {
  degree: {
    fontSize: 25,
    position: 'relative',
    left: 12,
    bottom: 20,
  }
}

const PrincipalCard = ({icon, temperature, description, humidity, wind}) => {

  const iconWeather = `https://openweathermap.org/img/wn/${icon}.png`;

  return (
  <>
    <div className="text-center">
      <img src={iconWeather} className="mx-auto w-20"/>
      <p className="text-5xl">
        {temperature}
          <span style={styles.degree}>
            °C
          </span>
      </p>
      <br/>
      <p className="textBody text-2xl">{description}</p>
      <br/>
      <p className="textBody mb-2">Humidity | {humidity} %</p>
      <p className="textBody">Wind Speed | {wind} km/h</p>
    </div>
  </>
  )
}

export default PrincipalCard
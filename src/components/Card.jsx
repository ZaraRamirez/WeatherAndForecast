const styles = {
  degree: {
    fontSize: 18,
    position: 'relative',
    left: 5,
    bottom: 10,
  }
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
  return formattedDate;
}

const formatTime = (dateString) => {
  const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedTime = new Date(dateString).toLocaleTimeString('en-US', options);
  return formattedTime;
}

const Card = ({date, icon, temperature, description}) => {

  const iconWeather = `https://openweathermap.org/img/wn/${icon}.png`;
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);

  return (
    <>
      <div className="flex
                      w-32 h-44
                      bg-zinc-700 
                      rounded-sm">
        <div className="m-auto">
          <p className="text-sm">{formattedDate}</p>
          <p className="text-xs">{formattedTime}</p>
          <img src={iconWeather} className="mx-auto"/>
          <p className="text-2xl">
            {temperature}
              <span style={styles.degree}>
                °C
              </span>
          </p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  )
}

export default Card
import Card from './Card.jsx';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
const ForecastCarousel = ({ forecast }) => {
  return (
    <>
      <div className='mx-24'>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          {forecast &&
            forecast.list.slice(0,40).map((item, index) => (
              <SwiperSlide key={index} className="glide__slide">
                <Card
                  date={item.dt_txt}
                  icon={item.weather[0].icon}
                  temperature={item.main.temp}
                  description={item.weather[0].description}
                />
              </SwiperSlide>
            ))}
      </Swiper>
      </div>
    </>
  );
};

export default ForecastCarousel;
import "./slider.css";
import { EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import styles bundle
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper swiper-container"
      >
        {/* swiper-container */}
        <SwiperSlide className="swiper-slide">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYjU2YzY5NDEtM2M3NC00NGM0LTg3MmItNWQ1OWY2ZmNkZTU0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
            alt="slider-img"
          />
          <h1>Comedy</h1>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYTNiY2Y4MjMtM2MyMi00ODYxLTk4N2MtNjhkYjVkODFjNmRjXkEyXkFqcGdeQXVyNDg0MDgxNQ@@._V1_SX300.jpg"
            alt="slider-img"
          />
          <h1>Drama</h1>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTMxMTU5MTY4MV5BMl5BanBnXkFtZTcwNzgyNjg2NQ@@._V1_SX300.jpg"
            alt="slider-img"
          />
          <h1>Adventure</h1>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZmM2Y2Q3ZjktMmU5Ny00ZmIzLWJjYWEtYTIzZjQyZmM2NjZjXkEyXkFqcGdeQXVyNjUyMzY3MTM@._V1_SX300.jpg"
            alt="slider-img"
          />
          <h1>Romance</h1>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTcxMzE4NDg0NF5BMl5BanBnXkFtZTgwMjg5Mjc1MDE@._V1_SX300.jpg"
            alt="slider-img"
          />
          <h1>Crime</h1>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZTYxYjcyMzgtZTUwYy00MGE2LTljYzItYTNhMzVmNjA2ZDMxXkEyXkFqcGdeQXVyMTA3MTI2ODc5._V1_SX300.jpg"
            alt="slider-img"
          />
          <h1>Animation</h1>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZTE2MDlmYTUtYTQwOC00MzA4LTkwNzQtOTJmMjdhMTdlMTM4XkEyXkFqcGdeQXVyNjQ0MjU4NDM@._V1_SX300.jpg"
            alt="slider-img"
          />
          <h1>War</h1>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
            alt="epic movie"
          />
          <h1>Epic</h1>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_SX300.jpg"
            alt="slider-img"
          />
          <h1>Historical</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

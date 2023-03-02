import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import "./TrendMove.css";

export default function TrendMove({ loading }) {
  const [active, setActive] = useState("panda");
  const trendActive = [
    "iron",
    "balto",
    "avengers",
    "aquaman",
    "lion",
    "frozen",
    "panda",
  ];
  let i = 1;
  function trendSlider(i) {
    setActive(trendActive[i - 1]);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      trendSlider(i);
      // eslint-disable-next-line
      i === trendActive.length ? (i = 1) : i++;
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div data-aos="zoom-in-down" className="trend_wrapper">
      <h1 className="trend_heading">
        These Are The Most Watched Movies in {new Date().getFullYear()}
      </h1>
      <div className="trend_container">
        <div className={`panel ${active === "panda" ? "panel_active" : ""}`}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
            alt="Kung Fu Panda"
          />
          <h3>Kung Fu Panda: 2008</h3>
        </div>
        <div className={`panel ${active === "iron" ? "panel_active" : ""}`}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
            alt="Iron Man 3"
          />
          <h3>Iron Man 3: 2013</h3>
        </div>
        <div className={`panel ${active === "balto" ? "panel_active" : ""}`}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTY1Nzc4MDQ3OF5BMl5BanBnXkFtZTgwOTE3NTAwNzE@._V1_SX300.jpg"
            alt="Balto: Wolf Quest"
          />
          <h3>Balto: Wolf Quest: 2002</h3>
        </div>
        <div className={`panel ${active === "avengers" ? "panel_active" : ""}`}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            alt="The Avengers"
          />
          <h3>The Avengers: 2012</h3>
        </div>
        <div className={`panel ${active === "aquaman" ? "panel_active" : ""}`}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg"
            alt="Aquaman"
          />
          <h3>Aquaman: 2018</h3>
        </div>
        <div className={`panel ${active === "lion" ? "panel_active" : ""}`}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
            alt="The Lion King"
          />
          <h3>The Lion King, 2019</h3>
        </div>
        <div className={`panel ${active === "frozen" ? "panel_active" : ""}`}>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
            alt="Frozen II"
          />
          <h3>Frozen II: 2010</h3>
        </div>
      </div>
      <ol>
        <li data-aos="fade-right" data-aos-delay="0">
          <b>Kung Fu Panda</b> is produced in 2008, since then it has been
          watched 1.5 billion times.
        </li>
        <li data-aos="fade-right" data-aos-delay="300">
          <b>"Iron Man 3"</b> has been in 2nd place for
          {new Date().getFullYear() - 2013} years with 1.3 billion viewers.
        </li>
        <li data-aos="fade-right" data-aos-delay="600">
          <b>Balto: The Wolf Quest</b> took 3rd place and won everyone's
          attention with its excellent screenplay.
        </li>
        <li data-aos="fade-right" data-aos-delay="900">
          <b>The Avengers</b>, with its masterful use of fantastical scenes, was
          applauded by 1.2 billion viewers.
        </li>
        <li data-aos="fade-right" data-aos-delay="1200">
          In 2018, <b>Aquaman</b> in some ways founded a new fantastic genre
          with its scenes.
        </li>
        <li data-aos="fade-right" data-aos-delay="1500">
          <b>The Lion King</b> is loved by all children and adults and has 1.19
          billion viewers. It is in 4th place.
        </li>
        <li data-aos="fade-right" data-aos-delay="1800">
          The most money spent and top-grossing animated film <b>Frozen</b> came
          in last with 1.1 billion views.
        </li>
      </ol>
    </div>
  );
}

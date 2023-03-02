import Nav from "./components/nav/Nav";
import "./app.css";
import Aside from "./components/aside/Aside";
import Right from "./components/right/Right";
import { useEffect, useState } from "react";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Error from "./components/error/Error";
import TrendMove from "./components/trend movie/TrendMove";
import Statistics from "./components/statistics/Statistics";
import Info from "./components/info/Info";
import Works from "./components/works/Works";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [menuBtn, setMenuBtn] = useState(true);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=bc5839e5&s=panda`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setTimeout(() => setLoading(false), 1500);
      });
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 200,
    });
    AOS.refresh();
  }, []);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=bc5839e5&s=${str.length ? str : "panda"
      }${type !== "all" ? `&type=${type}` : ""}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setTimeout(() => setLoading(false), 1500);
      });
  };

  function toggleSidebar(arg) {
    if (!arg.length) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setLoading(true);
      setTimeout(() => setLoading(false), 1500);
    }
    setMenuBtn(!menuBtn);
    document.querySelector("aside").classList.remove("hide");
    document.querySelector("aside").classList.toggle("show");
  }

  return (
    <>
      <Nav
        toggleSidebar={toggleSidebar}
        searchMovies={searchMovies}
        menuBtn={menuBtn}
      />
      <main>
        <Aside toggleSidebar={toggleSidebar} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home movies={movies} loading={loading} />}
          />
          <Route path="/statistic" element={<Statistics loading={loading} />} />
          <Route path="/trend" element={<TrendMove loading={loading} />} />
          <Route path="/info" element={<Info loading={loading} />} />
          <Route path="/works" element={<Works />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Right />
      </main>
      <Footer setLoading={setLoading} />
    </>
  );
}

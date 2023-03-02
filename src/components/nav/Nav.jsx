import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import img from "../../assets/movie.png";
import me from "../../assets/me-square.png";
import CV from "../../assets/Ogabek-Mustafoev-CV.pdf";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav({ toggleSidebar, menuBtn, searchMovies }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [toggleShow, setToggleShow] = useState(false);
  const [toggleTheme, setToggleTheme] = useState("light");
  const [expandProfile, setExpandProfile] = useState(false);
  const [openTalk, setOpenTalk] = useState(false);
  const [search, setSearch] = useState("panda");
  const [type, setType] = useState("all");
  const ref = useRef("");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));
    document.addEventListener("click", handleClick, true);
    if (toggleTheme === "dark") {
      document.body.classList.add("dark-theme");
      document.querySelector(".logo").classList.add("filter");
    } else {
      document.body.classList.remove("dark-theme");
      document.querySelector(".logo").classList.remove("filter");
    }
  }, [toggleTheme]);
  function handleClick(e) {
    if (!ref.current.contains(e.target) && e.target.tagName !== "SPAN") {
      setToggleShow(false);
    } else if (e.target.className === "material-icons-sharp search_icon") {
      ref.current.focus();
    }
  }

  const handleKey = (e) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (e.key === "Enter") {
      setToggleShow(false);
      searchMovies(search, type);
      pathname !== "/" && navigate("/", { replace: true });
      ref.current.blur();
    }
  };
  const handleFilter = (e) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <nav>
      <div className="container">
        <div className="flex">
          <img src={img} alt="logo" className="logo" />
          <h3>
            M
            <span className="material-icons-sharp play">
              play_circle_outline
            </span>
            vie app
          </h3>
        </div>
        <div className="search-bar">
          <span
            className="material-icons-sharp search_icon"
            onClick={() => setToggleShow(!toggleShow)}
          >
            search
          </span>
          <input
            type="search"
            placeholder="Search"
            ref={ref}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
            className={
              windowSize > 700
                ? "up_to-tablet"
                : `up_to-phone ${!toggleShow && "hide"}`
            }
          />
        </div>
        <div className="profile-area">
          <div className="theme-btn">
            <span
              onClick={() => setToggleTheme("light")}
              className={`material-icons-sharp ${
                toggleTheme === "light" && "active"
              }`}
            >
              light_mode
            </span>
            <span
              onClick={() => setToggleTheme("dark")}
              className={`material-icons-sharp ${
                toggleTheme === "dark" && "active"
              }`}
            >
              dark_mode
            </span>
          </div>
          <div
            className="profile"
            onClick={() => setExpandProfile(!expandProfile)}
          >
            <div className="profile-photo">
              <img src={me} alt="my_photo" />
            </div>
            <h5>Og'abek</h5>
            <span className="material-icons-sharp">expand_more</span>
          </div>
          <div className={`profile expand ${!expandProfile ? "hide" : ""}`}>
            <div className="profile-photo">
              <img src={me} alt="my_photo" />
            </div>
            <div className="expand__content">
              <span
                className="material-icons-sharp expand__close"
                onClick={() => setExpandProfile(!expandProfile)}
              >
                close
              </span>
              <h2>Hi there!</h2>
              <h2>I'm Og'abek Mustafoyev</h2>
              <p>
                -junior frontend developer and skilled in JavaScript, ReactJS,
                Redux, Webpack, Postman, Babel, Github, Redux toolkit, Bootstrap
                and MaterializeCSS.{" "}
              </p>
              <a href={CV} className="btn" download>
                {windowSize > 340 ? "Download CV" : "CV"}
              </a>
              <a
                href="#/"
                onClick={() => setOpenTalk(!openTalk)}
                className="btn btn-primary"
              >
                Let's Talk
              </a>
              <div className={`talk ${!openTalk ? "hide" : ""}`}>
                <a
                  target="_blank"
                  href="mailto:mustafoev0806@gmail.com"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a
                  href="https://t.me/Ogabek_Mustafoyev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a
                  href="https://www.instagram.com/mustafoev__ogabek/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/ogabek.mustafoyev.5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <button onClick={() => toggleSidebar("stop")} id="menu-btn">
            <span className="material-icons-sharp menu">
              {menuBtn ? "menu" : "close"}
            </span>
          </button>
        </div>
      </div>
      <div className={`radio_container ${pathname === "/" ? "" : "hide"} `}>
        <div className="selector">
          <div className="selector-item">
            <input
              type="radio"
              id="radio1"
              name="selector"
              className="selector-item_radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === "all"}
            />
            <label htmlFor="radio1" className="selector-item_label">
              All
            </label>
          </div>
          <div className="selector-item">
            <input
              type="radio"
              id="radio2"
              name="selector"
              className="selector-item_radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <label htmlFor="radio2" className="selector-item_label">
              Movies only
            </label>
          </div>
          <div className="selector-item">
            <input
              type="radio"
              id="radio3"
              name="selector"
              className="selector-item_radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === "series"}
            />
            <label htmlFor="radio3" className="selector-item_label">
              Series only
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

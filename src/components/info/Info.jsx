import "./info.scss";
import me1 from "../../assets/me1.png";
import resume from "../../assets/Ogabek-Mustafoev-CV.pdf";
import Loader from "../Loader/Loader";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import js from "../../assets/js.png";

export default function Info({ loading }) {
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="info_container" data-aos="zoom-out-up">
        <div className="details-info_container">
          <div
            className="avatar"
            data-aos="zoom-out-up"
            data-aos-easing="linear"
            data-aos-delay="1000"
            data-aos-duration="1500"
          >
            <img src={me1} className="img-fluid" alt="" />
          </div>
          <div className="about">
            <div className="name">
              <p data-aos="fade-up">Hi There!</p>
              <h1
                data-aos="fade-left"
                data-aos-delay="1000"
                data-aos-duration="1500"
              >
                I'm Og'abek Mustafoyev
              </h1>
            </div>
            <div className="about-content">
              <p data-aos="fade-up" data-aos-delay="500">
                Muslim, from Uzbekistan and {new Date().getFullYear() - 2001}{" "}
                years old Frontend developer experienced on HTML, CSS,
                Bootstrap, Tailwind CSS, SCSS, JavaScript, Webpack, NPM, GitHub,
                Babel JS, React JS, Redux, Redux-toolkit. I'm in programming for
                over one year. During this time I did some projects, this
                website is my 4th work which built with React JS.
              </p>
              <a
                href={resume}
                download
                id="info_btn"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="skills-info_container">
          <div className="skill" data-aos="fade-up" data-aos-delay="900">
            <img src={js} alt="pr-sample23" />
            <h2>85%</h2>
          </div>

          <div className="skill" data-aos="fade-up" data-aos-delay="1200">
            <img src={react} alt="pr-sample24" />
            <h2>80%</h2>
          </div>

          <div className="skill" data-aos="fade-up" data-aos-delay="1500">
            <img src={redux} alt="pr-sample25" />
            <h2>75%</h2>
          </div>
        </div>
        <div className="info_socials" data-aos="fade-up" data-aos-delay="1000">
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
    </>
  );
}

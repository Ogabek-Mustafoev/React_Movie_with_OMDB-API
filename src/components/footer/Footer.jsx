import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer({ setLoading }) {
  function scrollTop() {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <section data-aos="zoom-in-up" data-aos-delay="100" id="footer">
      <Link to="/" className="footer__logo">
        \<b>Mr.BekDev</b>/
      </Link>
      <ul className="permalinks">
        <li>
          <Link onClick={scrollTop} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={scrollTop} to="/statistic">
            Statistics
          </Link>
        </li>
        <li>
          <Link onClick={scrollTop} to="/trend">
            Trend movie
          </Link>
        </li>
        <li>
          <Link onClick={scrollTop} to="/info">
            About App
          </Link>
        </li>
        <li>
          <Link onClick={scrollTop} to="/works">
            Other works
          </Link>
        </li>
      </ul>
      <div className="footer__socials">
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
      <div className="footer__copyright">
        <small>
          &copy;{new Date().getFullYear()} Mr.BekDev. All rights reserved
        </small>
      </div>
    </section>
  );
}

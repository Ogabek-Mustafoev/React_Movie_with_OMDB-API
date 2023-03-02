import React from "react";

export default function Movie({ Title, Year, Type, Poster }) {
  return (
    <div data-aos="zoom-in-up" className="blog-wrapper">
      <div className="blog-wrap">
        <div className="blog-card">
          <div className="blog-img">
            <img src={Poster} alt={Poster} />
          </div>
          <div className="blog-content">
            <h3 className="title-sm">
              {Title.length > 24 ? `${Title.slice(0, 24)}...` : Title}
            </h3>
            <p className="blog-text">
              {Type
                ? `${
                    Type === "series" ? "These" : "This"
                  } ${Type} produced in ${Year}`
                : ""}
            </p>
            <div className="flex">
              <a
                href={`https://www.youtube.com/results?search_query=${Title}`}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                {window.innerWidth < 530 ? "Watch on YouTube " : "YouTube"}
              </a>
              <a
                href={`https://www.google.com/search?q=${Title}`}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Search in Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Announce({ src, title, year, price }) {
  return (
    <div className="blog-wrap" key={price}>
      <div className="blog-card">
        <div className="blog-img">
          <img src={src} alt={src} className="announce_img" />
        </div>
        <div className="blog-content">
          <h3 className="title-sm">{`${title} ${year}`}</h3>
          <p className="blog-text">{`Produced in ${year}, costs ${price}`}</p>
          <div className="flex">
            <a
              href={`https://www.youtube.com/results?search_query=${title}`}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              About {`${title.slice(0, 10)}...`}
            </a>
            <a
              href={`https://www.google.com/search?q=${title}`}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Buy?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

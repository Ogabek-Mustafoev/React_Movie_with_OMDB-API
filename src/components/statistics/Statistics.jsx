import React from "react";
import LineChart from "../chart/LineChart";
import Loader from "../Loader/Loader";
import Slider from "../slider/Slider";
import "./statistics.css";

export default function Statistics({ loading }) {
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <section data-aos="zoom-in-down" className="statistics_wrapper">
        <h1 className="head_title">Oscar-winning top movie genres:</h1>
        <Slider />
        <div className="film_genres">
          <h2>
            The Most Popular Film Genres <i>(sorted by liked)</i>
          </h2>
          <div className="badges">
            <div className="badge" data-aos="flip-up" data-aos-delay="0">
              <span className="bg-success"></span>
              <div>
                <h5>Comedy</h5>
                <h4>
                  <b>★ </b>51<span>mln</span>
                </h4>
              </div>
            </div>
            <div className="badge" data-aos="flip-up" data-aos-delay="200">
              <span className="bg-purple"></span>
              <div>
                <h5>Drama</h5>
                <h4>
                  <b>★ </b>45<span>mln</span>
                </h4>
              </div>
            </div>
            <div className="badge" data-aos="flip-up" data-aos-delay="400">
              <span className="bg-danger"></span>
              <div>
                <h5>Adventure</h5>
                <h4>
                  <b>★ </b>43<span>mln</span>
                </h4>
              </div>
            </div>
            <div className="badge" data-aos="flip-up" data-aos-delay="600">
              <span className="bg-success"></span>
              <div>
                <h5>Romance</h5>
                <h4>
                  <b>★ </b>42<span>mln</span>
                </h4>
              </div>
            </div>
            <div className="badge" data-aos="flip-up" data-aos-delay="800">
              <span className="bg-purple"></span>
              <div>
                <h5>Crime</h5>
                <h4>
                  <b>★ </b>39<span>mln</span>
                </h4>
              </div>
            </div>
            <div className="badge" data-aos="flip-up" data-aos-delay="1000">
              <span className="bg-danger"></span>
              <div>
                <h5>Animation</h5>
                <h4>
                  <b>★ </b>37<span>mln</span>
                </h4>
              </div>
            </div>
            <div className="badge" data-aos="flip-up" data-aos-delay="1200">
              <span className="bg-success"></span>
              <div>
                <h5>War</h5>
                <h4>
                  <b>★ </b>36<span>mln</span>
                </h4>
              </div>
            </div>
            <div className="badge" data-aos="flip-up" data-aos-delay="1400">
              <span className="bg-primary"></span>
              <div>
                <h5>Epic</h5>
                <h4>
                  <b>★ </b>33<span>mln</span>
                </h4>
              </div>
            </div>
            <div className="badge" data-aos="flip-up" data-aos-delay="1600">
              <span className="bg-dark"></span>
              <div>
                <h5>Historical</h5>
                <h4>
                  <b>★ </b>32<span>mln</span>
                </h4>
              </div>
            </div>
          </div>
          <h2>
            Production of Films and Cartoons{" "}
            <i>(as of last {new Date().getFullYear() - 1} year)</i>
          </h2>
        </div>

        <div data-aos="zoom-in-up" id="chart">
          <LineChart />
        </div>
      </section>
    </>
  );
}

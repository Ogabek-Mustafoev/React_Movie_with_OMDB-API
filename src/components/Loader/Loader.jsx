import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <section className="wrapper">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <span>Loading...</span>
    </section>
  );
}

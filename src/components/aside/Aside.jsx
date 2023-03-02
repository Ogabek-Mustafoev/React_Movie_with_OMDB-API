import "./aside.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Aside({ toggleSidebar }) {
  const { pathname } = useLocation();
  return (
    <aside className="aside">
      <button id="close-btn">
        <span
          className="material-icons-sharp close"
          onClick={() => toggleSidebar("stop")}
        >
          close
        </span>
      </button>
      <div className="sidebar">
        <Link
          to="/"
          className={pathname === "/" ? "active" : ""}
          onClick={toggleSidebar}
        >
          <span className="material-icons-sharp">home</span>
          <h4>Home</h4>
        </Link>
        <Link
          to="/statistic"
          className={pathname === "/statistic" ? "active" : ""}
          onClick={toggleSidebar}
        >
          <span className="material-icons-sharp">insights</span>
          <h4>Statistics</h4>
        </Link>
        <Link
          to="/trend"
          className={pathname === "/trend" ? "active" : ""}
          onClick={toggleSidebar}
        >
          <span className="material-icons-sharp">trending_up</span>
          <h4>Trend movie</h4>
        </Link>
        <Link
          to="/info"
          className={pathname === "/info" ? "active" : ""}
          onClick={toggleSidebar}
        >
          <span className="material-icons-sharp">info</span>
          <h4>Info / About</h4>
        </Link>
        <Link
          to="/works"
          className={pathname === "/works" ? "active" : ""}
          onClick={toggleSidebar}
        >
          <span className="material-icons-sharp">home_repair_service</span>
          <h4>Other works</h4>
        </Link>
      </div>
      <div className="updates">
        <span className="material-icons-sharp">error</span>
        <h4>Went Wrong?</h4>
        <small>Don't worry, Just refresh the feed!</small>
        <Link to="" refresh="true" onClick={toggleSidebar}>
          Refresh Now
        </Link>
      </div>
    </aside>
  );
}

import React from "react";
import Announce from "./Announce";
import "./right.css";
const announce = [
  {
    src: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1658251546-hp-pavilion-plus-14-1658251519.jpg",
    title: "HP Laptop",
    year: "2022",
    price: "$1200",
  },
  {
    src: "https://gagadget.com/media/cache/a1/d9/a1d9b4fcc3f34d12bd44a7dd234e41c8.jpg",
    title: "Galaxy Watch 5 pro",
    year: "2022",
    price: "$530",
  },
  {
    src: "https://images.indianexpress.com/2022/07/OnePlus-2T-03072022.jpg",
    title: "OnePlus",
    year: "2021",
    price: "$820",
  },
];

export default function Right() {
  return (
    <section className="right">
      <div className="right_wrapper">
        <h3>Announcement...</h3>
        {announce.map((item) => (
          <Announce key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

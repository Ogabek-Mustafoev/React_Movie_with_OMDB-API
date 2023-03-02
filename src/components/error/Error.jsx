import React from "react";
import "./error.css";

export default function Error() {
  return (
    <section data-aos="fade-up" className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div
                className="content_box_404"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h3 className="h2">Look like you're lost.</h3>
                <p>The movie you are looking for is not found!</p>

                <a href="/" className="link_404">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { Component } from "react";
import vietnam from '../image/vietnam.jpg';
import computer from '../image/computer.jpg';
import book from '../image/book.jpg';

class About extends Component {
  render() {
    return (
      <div className="container-fluid page" id="about">
        <div
          id="myCarousel"
          className="carousel slide center-div"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={vietnam}
                className="d-block w-100"
                alt="First Slide"
              />
              <div className="carousel-caption">
                <h3>Vietnam</h3>
                <p>
                  I was born and raised in Vietnam but moved to the U.S. in
                  2011. As a result, I am influence by both Eastern/Western
                  culture as well as fluent in Vietnamese and English
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={computer}
                className="d-block w-100"
                alt="Second Slide"
              />
              <div className="carousel-caption">
                <h3>Computer</h3>
                <p>
                  I am interested in anything computer and technology related
                  and worked on different projects in my freetime
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={book}
                className="d-block w-100"
                alt="Third Slide"
              />
              <div className="carousel-caption">
                <h3>Hobby</h3>
                <p>
                  Beside computer, I also enjoy reading books and watch history
                  documentary
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default About;

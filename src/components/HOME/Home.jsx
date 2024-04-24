import React from "react";
import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import slide1 from "../../assets/images/sliderone.jpg";
import slide2 from "../../assets/images/slidertwo.jpg";
import slider1 from "../../assets/images/sliderone.jpg";
import Slider from "react-slick";
import slick1 from "../../assets/images/slick1.png";
import slick2 from "../../assets/images/slick2.png";
import slick3 from "../../assets/images/slick3.png";
import slick4 from "../../assets/images/slick4.png";
import slick5 from "../../assets/images/slick5.png";
import slick6 from "../../assets/images/slick6.png";
import slick7 from "../../assets/images/slick7.png";
const Home = () => {
  const slicks = [
    {
      img: slick1,
    },
    {
      img: slick2,
    },
    {
      img: slick3,
    },
    {
      img: slick4,
    },
    {
      img: slick5,
    },
    {
      img: slick6,
    },
    {
      img: slick7,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Navbar/>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider1} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Slider {...settings}>
        {slicks.map((items,index) => (
          <div className="px-2">
            <div className="card mt-4 " key={index}>
            <div className="card-body">
             <img src={items.img} className="w-100" alt="img"/>
            </div>
          </div>
          </div>
          
        ))}
      </Slider>
      <div className="container-fluid mt-5">
         <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15065.877872342107!2d84.88746028484823!3d19.26193996833755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d59aac56a755f%3A0xa6147c6cfb21109c!2sBoxipalli%2C%20Odisha%20761002!5e0!3m2!1sen!2sin!4v1713513689502!5m2!1sen!2sin" className="w-100" height="250 "allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
         </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

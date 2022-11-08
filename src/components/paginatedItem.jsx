import React from "react";
import "../styles/loader.css";
import "../styles/itemSlider.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import Cardloader from "./cardloader";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const showUsers = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(
          "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
        )
        .then((res) => {
          setUserList(res.data);
          setIsLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    setIsLoading(true);
    showUsers();
  }, []);

  //slider setting
  //==================================//
  const slider = React.useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        NEXT
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        BACK
      </div>
    );
  }
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="App">
        {isLoading === true && <Cardloader />}
        <Slider ref={slider} {...settings}>
          {isLoading === false &&
            userList.map((user) => (
              <div className="card">
                <img
                  className="card-img"
                  src={"https://joeschmoe.io/api/v1/" + user.first}
                  alt={user.first}
                />
                <span className="username">{user.first + user.last}</span>
                <br />
                <span className="useremail">{user.email}</span>
                <br />
                <span className="useraddress">{user.address}</span>
              </div>
            ))}
        </Slider>
        {isLoading === false && (
          <div style={{ margin: 20 }}>
            <button
              className=" btns prev-button"
              onClick={() => slider?.current?.slickPrev()}
            >
              Prev
            </button>
            <button
              className=" btns next-button"
              style={{ marginLeft: 20 }}
              onClick={() => slider?.current?.slickNext()}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

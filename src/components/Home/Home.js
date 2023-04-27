import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./home.css";
import axios from "axios";
import map from "../../assets/Pickup_Illustration.png";
import mobile from "../../assets/picku service.png";
import { useRef } from "react";

const Home = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const { name, email } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    reset();
  };
  const form = useRef();
  const { reset } = useForm();
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://openauto-919f9-default-rtdb.firebaseio.com/register.json",
        data
      )
      .then(() => alert("Submitted Successfully"));
  };
  return (
    <>
      <div className="home-container">
        <div className="text-container">
          <h1 className="title">
            Vehicle Maintenance From the Comfort of Your Home
          </h1>
          <p className="paragraph">
            Open Auto Soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free
          </p>
          <form ref={form} onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={changeHandler}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={changeHandler}
            />
            <input type="submit" name="submit" />
          </form>
        </div>
        <div className="img-container">
          <img src={map} alt="" className="map-img" />
        </div>
      </div>
      <hr className="hr-1" />
      <div className="home-container">
        <div className="img-container">
          <img src={mobile} alt="" className="map-img" />
        </div>
        <div className="bottom-text-container">
          <h1 className="title">Focused on Time saving</h1>
          <p className="paragraph">
            Lorem ipsumis simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy texrt
            ever since the 1500s, when an unkown printer took a galley of type
            and scrambled it to make a type specimen bok. It has survived not
            only five centuries, but also the leap inito electronic type setting
            remaining essentially unchanged. it was
          </p>
          <button className="download-mobile-btn">
            Download the Mobile App
          </button>
        </div>
      </div>
      {/* <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">
            Vehicle Maintenance From the Comfort of Your Home
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes to be noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            Open Auto Soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free
          </p>
          <form ref={form} onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={changeHandler}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={changeHandler}
            />
            <input type="submit" name="submit" />
          </form>
        </div>
        <img
          src={map}
          alt="dresses to be noticed"
          className="map-img"
        />
        <hr className="hr1" />
      </div> */}

      {/* <div className="home-container">
        <img
          src={mobile}
          alt="dresses to be noticed"
          className="home-dsk-img"
        />
        <div className="home-content">
          <h1 className="home-heading">Focused on Time saving</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes to be noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            Lorem ipsumis simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy texrt
            ever since the 1500s, when an unkown printer took a galley of type
            and scrambled it to make a type specimen bok. It has survived not
            only five centuries, but also the leap inito electronic type setting
            remaining essentially unchanged. it was
          </p>
          <button className="download-mobile-btn">
            Download the Mobile App
          </button>
        </div>
      </div> */}
      <hr className="hr-2" />
    </>
  );
};

export default Home;

import React from "react";
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <h2>Open Auto</h2>
      <div className="box">
        <div className="call">
          <MdCall className="caller-icon" />
          <h6>+769 586 4558</h6>
        </div>
        <div className="call">
          <MdOutlineEmail className="caller-icon" />
          <h6 className="service">service@openauto.ca</h6>
        </div>
        <div>
          <button className="button">Download the mobile app</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

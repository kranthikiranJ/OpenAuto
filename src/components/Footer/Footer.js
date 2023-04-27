import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container">
      <div>
        <h2>Open Auto </h2>
        <div className="footer_copyright">
          <small> Open Auto @ All rights reserved.</small>
        </div>
      </div>
      <div className="contact-container">
        <div>
          <ul className="permalinks">
            <li>
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                <MdCall />
                +769 586 4558
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                <MdOutlineEmail />
                service@openauto.ca
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer__socials">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://facebook.com"
            >
              <BsFacebook />
            </a>

            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://twitter.com"
            >
              <AiOutlineTwitter />
            </a>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://twitter.com"
            >
              <BsYoutube />
            </a>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://twitter.com"
            >
              <BsLinkedin />
            </a>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://instagram.com"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
    // <footer className="footer-container">
    //   <div>
    //     <h1>Open Auto</h1>
    //     <div className="footer_copyright">
    //       <small> Open Auto @ All rights reserved.</small>
    //     </div>
    //   </div>

    //   <div className="mailing-container">
    // <div>
    //   <ul className="permalinks">
    //     <li>
    //       <a href="">
    //         <MdCall />
    //         +769 586 4558
    //       </a>
    //     </li>
    //     <li>
    //       <a href="">
    //         <MdOutlineEmail />
    //         service@openauto.ca
    //       </a>
    //     </li>
    //   </ul>
    // </div>
    // <div className="footer__socials">
    //   <a href="https://facebook.com">
    //     <BsFacebook />
    //   </a>

    //   <a href="https://twitter.com">
    //     <AiOutlineTwitter />
    //   </a>
    //   <a href="https://twitter.com">
    //     <BsYoutube />
    //   </a>
    //   <a href="https://twitter.com">
    //     <BsLinkedin />
    //   </a>
    //   <a href="https://instagram.com">
    //     <AiOutlineInstagram />
    //   </a>
    // </div>
    //   </div>
    // </footer>
  );
};

export default Footer;

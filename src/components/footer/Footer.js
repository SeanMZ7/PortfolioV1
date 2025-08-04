import React from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* Footer intentionally left blank or you can add custom footer content here */}
      </div>
    </Fade>
  );
}
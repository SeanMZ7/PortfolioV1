import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {/* Phone number (optional) */}
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}

              {/* Email */}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />

              {/* Location (if provided) */}
              {contactInfo.location && (
                <div className="location-div">
                  <span className="desc-prof">
                    <i className="fas fa-map-marker-alt"></i> {contactInfo.location}
                  </span>
                </div>
              )}

              {/* Hireable status (if true) */}
              {contactInfo.isHireable && (
                <div className="opp-div">
                  <span className="desc-prof">
                    Open for opportunities: Yes
                  </span>
                </div>
              )}

              <br />
              <SocialMedia />
            </div>
          </div>

          <div className="contact-image-div">
            <img
              alt="Sean"
              src={require("../../assets/images/sean.png")}
              className="contact-sean-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}

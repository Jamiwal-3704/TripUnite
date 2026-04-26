import React from "react";
import "./Footer.css";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BrandLogo from "./common/BrandLogo";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="Footer">
      <div className="footer-inner">

        {/* ── Brand column ── */}
        <div className="footer-brand">
          <Link to="/" style={{ textDecoration: "none" }}>
            <BrandLogo />
          </Link>
          <p className="footer-tagline">{t("discoverwith")}</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/Jamiwal3704" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-icon"><FaInstagram /></a>
            <a href="https://x.com/IttanSahil88270" target="_blank" rel="noopener noreferrer" aria-label="X" className="footer-icon"><BsTwitterX /></a>
            <a href="https://www.linkedin.com/in/sahilittan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon"><FaLinkedin /></a>
          </div>
        </div>

        {/* ── Help column ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">{t("help")}</h4>
          <ul className="footer-links">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">{t("contactus")}</a></li>
            <li><a href="#">{t("getassistance")}</a></li>
          </ul>
        </div>

        {/* ── More column ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">{t("more")}</h4>
          <ul className="footer-links">
            <li><Link to="/about">{t("about")}</Link></li>
            <li><a href="#">{t("Destinationfoot")}</a></li>
            <li><a href="#">{t("tripsfoot")}</a></li>
          </ul>
        </div>

        {/* ── Contact column ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">{t("contactus")}</h4>
          <ul className="footer-links">
            <li><a href="mailto:ittansahil@gmail.com">ittansahil@gmail.com</a></li>
            <li><a href="tel:8780064871">+91 87800 64871</a></li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TripUnite. All rights reserved.</span>
        <span className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

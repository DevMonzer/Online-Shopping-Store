import React from "react";
import { Link } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 item">
              <h3>Pages</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Shopping Store</h3>
              <p>
                Here you can find modern fashion products, and you can easily
                add cards to your shopping cart. <br /> Don't forget to visit
                our social media platforms to see the latest news.
              </p>
            </div>
            <div className="col item social">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/devmonzer/"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a target="_blank" href="https://github.com/DevMonzer">
                <GitHubIcon />
              </a>
              <a target="_blank" href="https://twitter.com/DevMonzer">
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100075721583290"
              >
                <FacebookOutlinedIcon />
              </a>
            </div>
          </div>
          <p className="copyright">
            All rights reserved © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

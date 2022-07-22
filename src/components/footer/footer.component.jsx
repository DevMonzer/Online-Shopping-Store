import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import "./footer.styles.css";

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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            {/* <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div> */}
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

// <!DOCTYPE html>
// <html>

// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Untitled</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
//     <link rel="stylesheet" href="assets/css/style.css">
// </head>

// <body>

//     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
// </body>

// </html>

// <!-- Credit to https://epicbootstrap.com/snippets/footer-dark --></link>

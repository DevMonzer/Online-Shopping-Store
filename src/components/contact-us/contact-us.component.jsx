import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { ReactComponent as ContactIcon } from "../../assets/undraw-contact.svg";

import "./bootstrap.min.css";
import "./contact-us.styles.css";

const Results = () => {
  return (
    <p style={{ color: "green", fontWeight: "bold" }}>
      &gt; Your message has been successfully sent
    </p>
  );
};

const ContactUs = () => {
  const [results, setResults] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_12a673s",
        "template_s0kk4g9",
        form.current,
        "MDaoH8yGvOU2JIVdR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setResults(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="contact-us-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h3 className="heading mb-4">Let's talk about everything!</h3>
                <p>
                  Pleese feel free to talk about everything you can think of
                </p>

                <p>
                  <ContactIcon className="img-fluid" />
                </p>
              </div>
              <div className="col-md-6">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <textarea
                        className="form-control"
                        type="text"
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        placeholder="Write your message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="submit"
                        // value=""
                        className="btn btn-primary rounded-0 py-2 px-4"
                      >
                        Send Message
                      </button>
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
                {/* <div> {results ? <Results /> : null}</div> */}
                <div>
                  {results ? (
                    <div id="form-message-success">
                      Your message was sent, thank you!
                    </div>
                  ) : (
                    <div id="form-message-warning mt-4">
                      Something went wrong. Please try again.
                    </div>
                  )}
                </div>
                <div id="form-message-warning mt-4"></div>
                <div id="form-message-success">
                  Your message was sent, thank you!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

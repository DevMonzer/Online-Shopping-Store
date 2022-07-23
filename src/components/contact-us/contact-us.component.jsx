import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { ReactComponent as ContactIcon } from "../../assets/undraw-contact.svg";

import "./bootstrap.min.css";
import "./contact-us.styles.scss";

// AlertDialog
const SuccessDialog = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Success"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your message has been sent successfully
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
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
                        className="btn btn-primary rounded-0 py-2 px-4"
                      >
                        Send Message
                      </button>
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
                <div> {results ? <SuccessDialog /> : null}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

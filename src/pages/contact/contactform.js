import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./contactform.css";
import swal from "sweetalert";

export default class ContactForm extends Component {
  render() {
    var flag = 0;
    function sendEmail(e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_9r05fgj",
          "template_0nn6dva",
          e.target,
          "user_gfDwVVfxclGN8gJp0Uiak"
        )
        .then(
          (result) => {  
            swal(
              "Email Send Sucessfully!",
              "I will replay to you as soon as i possible",
              "success"
            );
          },
          (error) => {
            swal("Error!", "Try After Some Time!", "error");
          }
        );
      e.target.reset();
    }
    return (
      <>
        <div class="contact-section">
        Please feel free to contact me
          <div class="border"></div>
          <form class="contact-form" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              class="contact-form-text"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              class="contact-form-text"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="subject"
              class="contact-form-text"
              placeholder="Subject"
              required
            />
            <textarea
              class="contact-form-text"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <input type="submit" class="contact-form-btn" value="Send" />
          </form>
        
        </div>
      </>
    );
  }
}

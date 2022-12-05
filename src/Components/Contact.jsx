import React, { useRef, useState } from "react";
import contactStyle from "../Styles/Contact.module.css";
import CustomButton from "./CustomButton";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// https://dashboard.emailjs.com/admin

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      // alert("Please fill the form");
      // console.log(name, email, message);
      toast.warn("Please fill all the input-boxs", {
        autoClose: 5000,
      });
      return;
    }
    emailjs
      .sendForm(
        "service_8enbpxp",
        "template_wq7b3k7",
        form.current,
        "3nZuHpEYrD10oFQ98"
      )
      .then(
        (result) => {
          // alert(
          //   `Thank you for submitting the form \n I will get back to you as soon as possible`
          // );
          toast.success(
            "Thank you for submitting the form. \n I will get back to you as soon as possible"
          );
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("ERROR");
          console.log(error.text);
        }
      );
  };

  return (
    <div name="contact" className={contactStyle.contact}>
      <p className={contactStyle.title}>CONTACT</p>
      <p style={{ fontSize: "26px" }}>Say Hello</p>
      <div className={contactStyle.container}>
        <div className={contactStyle.leftCol}>
          <p>
            Submit the form below so I can get back to you as soon as possible
          </p>
          <form ref={form} onSubmit={sendEmail} action="">
            <div className={contactStyle.inputDiv}>
              <p className={contactStyle.label}>Name</p>
              <input
                className={contactStyle.inputArea}
                name="user_name"
                placeholder="Enter Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={contactStyle.inputDiv}>
              <p className={contactStyle.label}>Email</p>
              <input
                className={contactStyle.inputArea}
                name="user_email"
                placeholder="Enter Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={contactStyle.inputDiv}>
              <p className={contactStyle.label}>Message</p>
              <textarea
                className={contactStyle.inputArea}
                name="message"
                placeholder="Enter Message"
                style={{ height: "100px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <CustomButton title={"Submit"} value="Send" />
            </div>
          </form>
        </div>
        <div className={contactStyle.rightCol}>
          <div className={contactStyle.rightCol1}>
            {/* phone */}
            <div className={contactStyle.contactPhoneDiv}>
              <img src="./images/contact/phone.png" alt="" />
              <p>+91-7022812353</p>
            </div>
            {/* email */}
            <div className={contactStyle.contactLinkDiv}>
              <a href="mailto:sathyaprasad650@gmail.com?body=My custom mail body">
                <img src="./images/contact/email.png" alt="" />
                <p>sathyaprasad650@gmail.com</p>
              </a>
            </div>
          </div>
          <div className={contactStyle.rightCol2}>
            {/* linkedIn */}
            <div className={contactStyle.contactLinkDiv}>
              <a
                href="https://www.linkedin.com/in/sathya-prasad-s/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/contact/linkedin.png" alt="" />
                <p>sathya-prasad-s</p>
              </a>
            </div>
            {/* .github */}
            <div className={contactStyle.contactLinkDiv}>
              <a
                href="https://github.com/sathyaPrasad650/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/contact/github.png" alt="" />
                <p>sathyaPrasad650</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
};

export default Contact;

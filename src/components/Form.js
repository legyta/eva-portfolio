import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../stylesheets/form.scss";
import leaf from "../images/leaf.svg";

export default function Form() {
  const [message, setMessage] = useState("");
  const { register, errors, handleSubmit, reset } = useForm();

  function onSubmit(event) {
    const templateParams = {
      from_name: event.name + " (" + event.email + ")",
      to_name: "legyta@gmail.com",
      feedback: event.feedback,
    };

    window.emailjs
      .send("default_service", "contact_me", templateParams)
      .then(
        setMessage(`Thank you for your message! I will get back to you soon.`),
        reset()
      );
  }

  return (
    <div className="form">
      <form
        id="contactForm"
        className="form-info"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Leave me a message</h2>

        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && "Please enter your name"}

        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email?.type === "required" && "Please enter your email"}

        <label>Your message</label>
        <textarea
          type="text"
          id="feedback"
          name="feedback"
          ref={register({ required: true })}
          style={{ height: "150px" }}
        />
        {errors.feedback && "Please leave a message"}

        {errors.errorMessage?.message}
        <div className="button-clients">
          <button className="button" type="submit">
            Send{" "}
          </button>
        </div>
        <div className="submit-message">{message}</div>
      </form>
    </div>
  );
}

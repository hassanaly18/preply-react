import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const service_id = "service_jn23it8";
  const template_id = "template_ksbrgkc";
  const public_key = "IVNT2NxhW_DkPIEQ8";

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   const stopRefresh = (e) => {
  //     e.preventDefault();
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(formData.fName + formData.lName + formData.email + formData.message);
    setFormData({
      fName: "",
      lName: "",
      email: "",
      message: "",
    });
  };

  var templateParams = {
    fName: formData.fName,
    lName: formData.lName,
    email: formData.email,
    message: formData.message,
  };

  emailjs.send(service_id, template_id, templateParams, public_key).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          className="first"
          placeholder="First Name"
          name="fName"
          required
          onChange={handleChange}
          value={formData.fName}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lName"
          required
          onChange={handleChange}
          value={formData.lName}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={handleChange}
          value={formData.email}
        />
        <textarea
          name="message"
          required
          onChange={handleChange}
          value={formData.message}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;

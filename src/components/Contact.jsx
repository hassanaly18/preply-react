import React, { useState } from "react";

const Contact = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const service_id = "service_bi3l8"
  const template_id = "template_tgysgfl"
  const public_key = "t3k67kA3DxJ52RvcS"


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

  const handleSubmit=(e)=>{
    e.preventDefault();

    alert(formData.fName + formData.lName + formData.email + formData.message)
    
  }

  // const firstN=() =>{
  //     setFirst(e.target.value);
  // }

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input type="text" className="first" placeholder="First Name" name="fName" required onChange={handleChange}/>
        <input type="text" placeholder="Last Name" name="lName" required onChange={handleChange}/>
        <input type="email" placeholder="Email" name="email" required onChange={handleChange}/>
        <textarea name="message" required onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;

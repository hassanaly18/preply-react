import React, { useState } from "react";
import supabase from "../utils/supabase";

const Create = () => {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");

  async function handlersubmit(e) {
    e.preventDefault();
    if (!Name || !Age || !Email) {
      alert("kindly Fill out the Form");
      return;
    }
    const { error } = await supabase
      .from("students")
      .insert({ name: Name, age: Age, email: Email });
    if (error) {
      alert(error.message);
    } else {
      alert("data inserted successflly");
    }

    setAge("");
    setEmail("");
    setName("");
  }

  function namehandler(e) {
    setName(e.target.value);
  }

  function agehandler(e) {
    setAge(e.target.value);
  }

  function Emailhandler(e) {
    setEmail(e.target.value);
  }
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={namehandler}
        />
        <input
          type="text"
          placeholder="Emai"
          value={Email}
          onChange={Emailhandler}
        />
        <input
          type="number"
          placeholder="Age"
          value={Age}
          onChange={agehandler}
        />
        <button onClick={handlersubmit}>Add Student</button>
      </form>
    </div>
  );
};

export default Create;

import React, { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import "../../public/Style/Form.css";

const Supabase = () => {
  const [student, setstudent] = useState([]);
  const [editingid, seteditingid] = useState(null);
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [search, setsearch] = useState("");

  function namehandler(e) {
    setName(e.target.value);
  }

  function agehandler(e) {
    setAge(e.target.value);
  }

  function Emailhandler(e) {
    setEmail(e.target.value);
  }
  function searchs(e) {
    setsearch(e.target.value);
  }
  useEffect(() => {
    fetchstudents();
  }, []);
  const fetchstudents = async () => {
    const { data, error } = await supabase.from("students").select("*");
    if (error) {
      alert(error.message);
      return;
    } else {
      setstudent(data);
      console.log(data);
    }
  };

  async function handledelete(deleteid) {
    const { error } = await supabase
      .from("students")
      .delete()
      .eq("id", deleteid);
    if (error) {
      alert(error.message);
      return;
    } else {
      alert("student delete succesfuly");
    }
    fetchstudents();
  }
  //handle edit
  const handleupdate = (student) => {
    setName(student.name); //fill
    setAge(student.age); //
    setEmail(student.email);
    seteditingid(student.id);
  };

  async function handlesubmit(e) {
    e.preventDefault();
    if (editingid) {
      const { error } = await supabase
        .from("students")
        .update({ name: Name, email: Email, age: Age })
        .eq("id", editingid);
      if (error) {
        alert(error.message);
      } else {
        alert("student updated successfully");
      }
      setAge("");
      setEmail("");
      setName("");
      fetchstudents(); //updating tbale fetch
      return;
    }
    alert("kindly select a student");
  }
  const filteredStudents = student.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );
  ///smallest to large
  function sortByAgeAsc() {
    const sort = student.slice().sort((a, b) => a.age - b.age);
    setstudent(sort);
  }
  //largest to smallest
  function sortByAgeDesc() {
    const sort = student.slice().sort((a, b) => b.age - a.age);
    setstudent(sort);
  }
  return (
    <div>
      {/* {student.map((allele) => (
        <div>
          <p> {allele.name}</p>
          <p> {allele.age}</p>
          <p> {allele.email}</p>
        </div>
      ))} */}
      <button onClick={fetchstudents}>fetch</button>
      <form action="">
        <input
          type="text"
          placeholder="SEARCH"
          onChange={searchs}
          value={search}
        />
      </form>
      {filteredStudents.map((allele) => (
        <div>{allele.name}</div>
      ))}
      <h3> Students List</h3>
      <button onClick={sortByAgeAsc}>Sort by Age ↑</button>{" "}
      <button onClick={sortByAgeDesc}>Sort by Age ↓</button>
      <table border="1" cellPadding="10">
        <thead style={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>DeleteRow</th>
            <th>UpdateRow</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>
                <button
                  onClick={() => {
                    handledelete(student.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleupdate(student);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
          <button onClick={handlesubmit}>Update Student</button>
        </form>
      </div>
    </div>
  );
};

export default Supabase;

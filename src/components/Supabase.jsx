import React, { useEffect, useState } from "react";
import supabase from "../utils/supabase";

const Supabase = () => {
  const [student, setstudent] = useState([]);
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
      <h3> Students List</h3>
      <table border="1" cellPadding="10">
        <thead style={{ backgroundColor: "black", color: "white" }}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>DeleteRow</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Supabase;

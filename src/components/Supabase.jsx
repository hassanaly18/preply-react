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
    }
  };
  return (
    <div>
      {student.map((allele) => (
        <div>
          <p> {allele.name}</p>
          <p> {allele.age}</p>
          <p> {allele.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Supabase;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

interface Data {
  id: number;
  firstname: string;
  email: string;
}
function Read() {
  const { id } = useParams();
  const [student, setStudent] = useState<any>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setStudent(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
          <h2>Student Details</h2>
          <h2>{student.id}</h2>
          <h2>{student.firstname}</h2>
          <h2>{student.email}</h2>
        </div>
        <Link to="/" className="btn btn-primary me-2">
          Back
        </Link>
        <Link to={`/edit/${student.id}`} className="btn btn-primary">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default Read;

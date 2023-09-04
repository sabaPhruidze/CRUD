import React, { useState, useEffect } from "react";
import axios from "axios";

interface Data {
  id: string;
  firstname: string;
  email: string;
}

export default function Home() {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student: Data, index) => {
              return (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.firstname}</td>
                  <td>{student.email}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

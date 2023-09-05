import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
interface Form {
  name: string;
  email: string;
}

function Update() {
  const { register, handleSubmit } = useForm<Form>();
  const navigate = useNavigate();
  const { id } = useParams();

  //

  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          name: res.data[0].firstname,
          email: res.data[0].email,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState<Form>({
    name: "",
    email: "",
  });
  const onSubmit = (data: Form) => {
    console.log(data);
    axios
      .put("http://localhost:8081/update/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  //
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Update Student</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter Name"
              {...register("name")}
              id="name"
              className="form-control"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Email"
              {...register("email")}
              id="email"
              className="form-control"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;

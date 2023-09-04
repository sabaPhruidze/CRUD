import { useForm } from "react-hook-form";
import axios from "axios";
interface Form {
  name: string;
  email: string;
}

const onSubmit = (data: Form) => {
  // console.log(data);
  axios
    .post("http://localhost:8081/student", data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default function Create() {
  const { register, handleSubmit } = useForm<Form>();
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter Name"
              {...register("name")}
              id="name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter Email"
              {...register("email")}
              id="email"
              className="form-control"
            />
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const RestPassword = () => {
  const router = useNavigate();
  let { resetToken } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log({
    //   password: formData.get("password"),
    //   resetToken,
    // });
    axios
      .post(`${import.meta.env.VITE_API_URL}/reset-password/${resetToken}`, {
        password: formData.get("password"),
      })
      .then((res) => {
        // console.log(res);
        alert(res.statusText);
        router("/login");
      })
      .catch((err) => {
        // console.log(err);
        alert(err.response.data);
      });
  };
  return (
    <div>
      <h1>Rest Password</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="password"
          placeholder="enter new password"
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RestPassword;

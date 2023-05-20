import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const router = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({
      email: formData.get("email"),
    });

    axios
      .post("http://localhost:1337/forgot-password", {
        email: formData.get("email"),
      })
      .then((res) => {
        console.log(res);
        alert(res.statusText);
        router(`/rest-password/${res.data.resetToken}`);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };
  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" placeholder="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const router = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    axios
      .post("http://localhost:1337/login", {
        email: formData.get("email"),
        password: formData.get("password"),
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        alert(res.statusText);
        router("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit">login</button>
      </form>
      <ul style={{ listStyle: "✨" }}>
        <Link to={"/signup"}>
          <li>signup</li>
        </Link>
        <Link to={"/forgot-password"}>
          <li>forgotpassword?</li>
        </Link>
      </ul>
    </>
  );
};

export default Login;

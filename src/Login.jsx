import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    // console.log({
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    // });

    axios
      .post(`${import.meta.env.VITE_API_URL}/login`, {
        email: formData.get("email"),
        password: formData.get("password"),
      })
      .then((res) => {
        // console.log(res);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        setIsLoading(false);
        alert(res.statusText);
        router("/");
      })
      .catch((err) => {
        // console.log(err);
        setIsLoading(false);
        alert(err.response.data);
      });
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "login..." : "login"}
        </button>
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

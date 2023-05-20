import axios from "axios";
import React from "react";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
    });

    axios
      .post("http://localhost:1337/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
      })
      .then((res) => {
        console.log(res);
        alert(res.statusText);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input placeholder="email" type="email" name="email" />
      <input placeholder="name" type="text" name="name" />
      <input placeholder="password" type="password" name="password" />
      <button type="submit">signup</button>
    </form>
  );
};

export default Signup;

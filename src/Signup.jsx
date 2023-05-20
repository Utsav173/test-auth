import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    // console.log({
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    //   name: formData.get("name"),
    // });

    axios
      .post(`${import.meta.env.VITE_API_URL}/signup`, {
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
      })
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        alert(res.statusText);
      })
      .catch((err) => {
        // console.log(err);
        setIsLoading(false);
        alert(err.response.data);
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input placeholder="email" type="email" name="email" />
      <input placeholder="name" type="text" name="name" />
      <input placeholder="password" type="password" name="password" />
      <button type="submit" disabled={isLoading}>
    {isLoading ? 'Signing up...' : 'Signup'}
  </button>
    </form>
  );
};

export default Signup;

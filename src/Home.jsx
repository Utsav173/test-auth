import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
      {user && (
        <div>
          <h1>{user.user.email}</h1>
          <h1>{user.user.name}</h1>
        </div>
      )}
    </div>
  );
};

export default Home;

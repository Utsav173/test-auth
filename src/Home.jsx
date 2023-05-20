import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState();
  const router = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setUser(JSON.parse(localStorage.getItem("userInfo")));
    } else {
      router("/login");
    }
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
        <li>
          <button
            onClick={() => {
              localStorage.removeItem("userInfo");
              setUser(null);
              router("/login");
            }}
          >
            logout
          </button>
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

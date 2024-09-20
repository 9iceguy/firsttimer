// import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function SignUpForm(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      toast("Please fill in all fields", {
        position: "bottom-center",
        draggable: true,
        draggableDirection: "x",

        progressStyle: { background: "red" },
      });
      return;
    }
    navigate("/");
    console.log(email, password);
  }
  return (
    <div className="h-[80vh] flex items-center justify-center w-full">
      <form
        action=""
        className="flex flex-col shadow h-[40vh] w-[30vw] gap-4 items-center justify-center p-4 py-4"
      >
        <h2 className="text-2xl font-bold">Register</h2>
        <label htmlFor="email">Email:</label>
        <input
          className="border border-gray-400 p-2 w-4/5"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="border border-gray-400 p-2 w-4/5"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          required
        />
        <button
          className="py-2 px-6 rounded bg-blue-400 text-white hover:bg-blue-600"
          type="submit"
          onClick={(e) => SignUpForm(e)}
        >
          Sign Up
        </button>

        <p className="pb-8">
          {"Already"} have an account?{" "}
          <Link to="/login">
            <span className="text-purple-500 cursor-pointer hover:text-purple-900">
              Login
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

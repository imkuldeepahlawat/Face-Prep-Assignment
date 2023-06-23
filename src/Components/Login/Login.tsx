<<<<<<< HEAD
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useSnackbar } from "notistack";
import { userDetails } from "../Data/Data";
import Header from "../Header/Header";
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { userDetails } from '../Data/Data';
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3

/**
 * The login component.
 * @returns {React.ReactElement} - The rendered login component.
 */
const Login = (): React.ReactElement => {
<<<<<<< HEAD
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [logincheck, setLoginCheck] = useState<string>("");
  useEffect(() => {
    const username = localStorage.getItem("username") ?? "";
    setLoginCheck(username);
  }, []);
=======
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3

  /**
   * Handle form submission.
   */
  const handleSubmit = (): void => {
    const { username, password } = userData;
<<<<<<< HEAD
    if (
      username === userDetails.username &&
      password === userDetails.password
    ) {
      enqueueSnackbar("Login Successful", {
        variant: "success",
      });
      localStorage.setItem("username", "foo");
      localStorage.setItem("password", "bar");
      router.push("/Posts");
    } else {
      enqueueSnackbar("Password or Username is Wrong", {
        variant: "error",
=======
    if (username === userDetails.username && password === userDetails.password) {
      enqueueSnackbar('Login Successful', {
        variant: 'success',
      });
      localStorage.setItem('username', 'foo');
      localStorage.setItem('password', 'bar');
      navigate('/userauth');
    } else {
      enqueueSnackbar('Password or Username is Wrong', {
        variant: 'error',
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3
      });
    }
  };

  /**
   * Handle input change.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
<<<<<<< HEAD
    <div className="w-full flex flex-col">
      <Header login={Boolean(logincheck)} />
      <div className="w-full flex justify-center items-center">
        <div className="border border-indigo-500 w-[550px] flex flex-col md:h-[400px] m-1 p-10 rounded-lg">
          *foo *bar
          <div className="flex flex-col justify-center items-center mt-10 gap-10">
            <input
              type="text"
              name="username"
              className="size outline-none text-Left text-sm md:text-lg border-b-4 border-indigo-500"
              placeholder="Username"
              onChange={handleInputChange}
            />

            <input
              type="password"
              name="password"
              className="outline-none text-sm md:text-lg border-b-4 border-indigo-500"
              placeholder="Password"
              onChange={handleInputChange}
            />
            <button
              onClick={handleSubmit}
              className="text-sm md:text-lg rounded-md px-5 bg-indigo-500"
            >
              Login
            </button>
          </div>
=======
    <div className="w-full flex justify-center items-center">
      <div className="border border-indigo-500 w-[550px] flex flex-col md:h-[400px] m-1 p-10 rounded-lg">
        *foo *bar
        <div className="flex flex-col justify-center items-center mt-10 gap-10">
          <input
            type="text"
            name="username"
            className="size outline-none text-Left text-sm md:text-lg border-b-4 border-indigo-500"
            placeholder="Username"
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            className="outline-none text-sm md:text-lg border-b-4 border-indigo-500"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <button
            onClick={handleSubmit}
            className="text-sm md:text-lg rounded-md px-5 bg-indigo-500"
          >
            Login
          </button>
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3
        </div>
      </div>
    </div>
  );
};

export default Login;

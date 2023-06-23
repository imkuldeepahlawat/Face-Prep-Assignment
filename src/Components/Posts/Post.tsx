"use client";
import React, { useEffect, useState } from "react";
import { getUserData } from "../Axios/FetchData";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "../Card/Card";
import Tooltip from "@mui/material/Tooltip";
import Header from "../Header/Header";

/**
 * Post Component
 *
 * The Post component fetches user data from an API and displays a button to load more data.
 */
const Post = () => {
  const [userData, setUserData] = useState<any[]>([]); // Specify the type as 'empty array'
  const [userPage, setUserPage] = useState<number>(0); // Specify the type as 'number'
  const [processBar, setProcessbar] = useState<boolean>(false); // Specify the type as 'number'
  const [logincheck, setLoginCheck] = useState<string>('');

  useEffect(() => {
    const username = localStorage.getItem("username") ?? '';
    setLoginCheck(username);
  }, []);

  /**
   * useEffect Hook
   *
   * Fetches user data when the component mounts or userPage state changes.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await getUserData({ pageNumber: userPage });
        if (value != null) {
          setUserData((prevUserData: any[]) => [...prevUserData, ...value]); // Use a callback in setUserData
        }
        console.log(value);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userPage]);
  const handleOnScroll = () => {
    setUserPage(userPage + 1);
    setProcessbar(true);
    setTimeout(() => {
      setProcessbar(false);
    }, 1000);
  };
  window.addEventListener("scroll", handleOnScroll);
  return (
    <div className="flex flex-col">
      <Header login={Boolean(logincheck)} />
      <div className="flex ml-6 md:ml-0 flex-col md:flex-row md:flex-wrap gap-5 md:justify-center">
        {userData.map((user, inx) => {
          return (
            <Tooltip title={user.name.first} key={user.login.uuid}>
              <div className="">
                <Card {...user} />
              </div>
            </Tooltip>
          );
        })}
      </div>
      <div className=" flex justify-center items-center m-5 p-5">
        {!processBar ? (
          <div className="flex justify-center items-center h-20">
            <CircularProgress />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Post;

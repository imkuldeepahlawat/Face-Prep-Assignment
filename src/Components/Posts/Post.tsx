"use client";
import React, { useEffect, useState } from "react";
import { getUserData } from "../Axios/FetchData";
import CircularProgress from "@mui/material/CircularProgress";

/**
 * Post Component
 *
 * The Post component fetches user data from an API and displays a button to load more data.
 */
const Post = () => {
  const [userData, setUserData] = useState<any[]>([]); // Specify the type as 'empty array'
  const [userPage, setUserPage] = useState<number>(0); // Specify the type as 'number'
  const [processBar, setProcessbar] = useState<boolean>(false); // Specify the type as 'number'

  /**
   * useEffect Hook
   *
   * Fetches user data when the component mounts or userPage state changes.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await getUserData({ pageNumber: userPage });
        setUserData((prevUserData: any[]) => [...prevUserData, ...value]); // Use a callback in setUserData
        console.log(value);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userPage]);
  const handleOnScroll =() =>{
    // setUserPage(userPage+1);
    setProcessbar(true);
    setTimeout(() => {
      setProcessbar(false);
    }, 1000);
  }
  window.addEventListener("scroll", handleOnScroll);
  return (
    <div
      onScroll={() => {
        console.log("Scroll event happen");
      }}
    >
      <div className="">
        {userData.map((user, inx) => {
          return (
            <div key={inx}>
              <h4>hello</h4>
            </div>
          );
        })}
        {processBar ? <CircularProgress /> : <></>}
      </div>
    </div>
  );
};

export default Post;

"use client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import HomePage from "../Components/Home/HomePage";
import Header from "../Components/Header/Header";
import Post from "../Components/Posts/Post";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[100vw]">
      <Router>
        <SnackbarProvider>
          
          {/* <Post/> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/userauth" element={<Post />} />
          </Routes>
        </SnackbarProvider>
      </Router>
    </div>
  );
}

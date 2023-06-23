"use client";
<<<<<<< HEAD

import { SnackbarProvider } from "notistack";


import Header from "../Components/Header/Header";
import Post from "./Posts/page";
import Link from "next/link";
import Login from "@/Components/Login/Login";
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import HomePage from "../Components/Home/HomePage";
import Header from "../Components/Header/Header";
import Post from "../Components/Posts/Post";
import Link from "next/link";
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3

export default function Home() {
  return (
    <div className="w-[100vw]">
<<<<<<< HEAD
      
        <SnackbarProvider>
          
          
          <Login/>
          {/* <Post/> */}
         
        </SnackbarProvider>
      
    </div>
  );
}
=======
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
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3

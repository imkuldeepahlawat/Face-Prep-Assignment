"use client";

import { SnackbarProvider } from "notistack";


import Header from "../Components/Header/Header";
import Post from "./Posts/page";
import Link from "next/link";
import Login from "@/Components/Login/Login";

export default function Home() {
  return (
    <div className="w-[100vw]">
      
        <SnackbarProvider>
          
          
          <Login/>
          {/* <Post/> */}
         
        </SnackbarProvider>
      
    </div>
  );
}
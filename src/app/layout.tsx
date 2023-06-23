"use client";
import Header from "@/Components/Header/Header";
import "./globals.css";


export const metadata = {
  title: "Face Prep Assignment",
  description: "Created By Kuldeep Ahlawat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
        

        {children}
      </body>
    </html>
  );
}

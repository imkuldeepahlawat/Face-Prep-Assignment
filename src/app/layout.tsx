<<<<<<< HEAD
"use client";
import Header from "@/Components/Header/Header";
import "./globals.css";


export const metadata = {
  title: "Face Prep Assignment",
  description: "Created By Kuldeep Ahlawat",
};
=======
import './globals.css'




export const metadata = {
  title: 'Face Prep Assignment',
  description: 'Created By Kuldeep Ahlawat',
}
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3

export default function RootLayout({
  children,
}: {
<<<<<<< HEAD
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
        

        {children}
      </body>
    </html>
  );
=======
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3
}

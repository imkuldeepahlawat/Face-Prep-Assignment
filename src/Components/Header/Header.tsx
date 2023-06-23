<<<<<<< HEAD
"use client";
import { useRouter } from "next/navigation";
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3

type HeaderProps = {
  login: boolean;
};

/**
 * The header component that displays the navigation and login/logout functionality.
 * @param {HeaderProps} props - The properties of the header component.
 * @returns {React.ReactElement} - The rendered header component.
 */
const Header = (props: HeaderProps): React.ReactElement => {
<<<<<<< HEAD
  const { login } = props;
  const router = useRouter();
=======
  const navigate = useNavigate();

  const { login } = props;
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3

  /**
   * Handles the logout functionality.
   */
  const handleLogout = (): void => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
<<<<<<< HEAD
    <div className="w-full mb-5">
=======
    <div className="w-full">
>>>>>>> e80da20fd47709694cf5306c779c6eb7d47088e3
      <div className="flex max-w-full justify-between pl-20 pr-20 pt-5 text-lg font-bold">
        {login ? (
          <>
            <h3>Welcome</h3>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <h3 className="uppercase text-center">Please login to see posts</h3>
        )}
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  login: boolean;
};

/**
 * The header component that displays the navigation and login/logout functionality.
 * @param {HeaderProps} props - The properties of the header component.
 * @returns {React.ReactElement} - The rendered header component.
 */
const Header = (props: HeaderProps): React.ReactElement => {
  const navigate = useNavigate();

  const { login } = props;

  /**
   * Handles the logout functionality.
   */
  const handleLogout = (): void => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="w-full">
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

import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';

/**
 * The home page component.
 * @returns {React.ReactElement} - The rendered home page component.
 */
const HomePage = (): React.ReactElement => {
  const [logincheck, setLoginCheck] = useState<string>('');

  useEffect(() => {
    localStorage.clear();
    const username = localStorage.getItem('username') ?? '';
    setLoginCheck(username);
  }, []);

  return (
    <div>
      <Header login={Boolean(logincheck)} />
      <Login />
    </div>
  );
};

export default HomePage;

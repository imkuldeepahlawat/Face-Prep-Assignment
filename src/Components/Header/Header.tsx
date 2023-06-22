"use client";
import { useEffect } from 'react';

const Header = () => {
  let user;

  useEffect(() => {
    user = localStorage.getItem('userName');
  }, []);

  return (
    <div className='w-full'>
      <h3>{user ? (
        <div className="flex max-w-full justify-between pl-20 pr-20 pt-5 text-lg font-bold">
            <h3>Welcome</h3>
            <button>Log Out</button>
        </div>
      ) :(
        <div className="flex max-w-full justify-between pl-20 pr-20 pt-5 text-lg font-bold">
            <h3 className='uppercase text-center'>Login please to see post</h3>
            <></>
        </div>
      )}</h3>
    </div>
  );
};

export default Header;

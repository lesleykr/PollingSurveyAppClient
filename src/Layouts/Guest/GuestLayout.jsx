import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../Common/Library';
import NavMenu from '../../Components/Navbar/NavMenu';



const GuestLayout = (props) => {
  return (
    <>
     <NavMenu />
      {isLoggedIn() ? (
        <Redirect to="/signout" />
      ) : (
        <>
          {props.children}
        </>
      )}
    </>
  );
};

export default GuestLayout;

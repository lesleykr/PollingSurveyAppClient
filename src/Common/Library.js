import { Redirect } from 'react-router-dom';
import React from 'react';


export const clearSession = () => 
  localStorage.clear()
 

export const withAuth = (Component) => {
  return () => {
    if (isLoggedIn()) {
      return <Component />;
    } else {
      <Redirect to="/signin" />;
    }
  };
};
export const SignInUser = (token, id) => {
  localStorage.setItem('token', 'token'); 
  localStorage.setItem('userId', id)
}

// export const SignInUser = ({ history }) => {
//   localStorage.setItem('token', 'same-login-token');  //first param is key, Hard coded for right now, needs to be token
  // history.push('/profile/mansa'); //redirect user to a particular page, refers to browser history only can use for local
// };

export const createAuthIdentity = (userInfo) => {   //grabs user info and stores in localstorage, and once user logs out clears everything
  clearSession();
  localStorage.setItem('token', userInfo.sessionToken);
  localStorage.setItem('email', userInfo.user.email);
  localStorage.setItem('isAdmin', userInfo.user.isAdmin);
  localStorage.setItem('userId', userInfo.user.id);
};

export const getIsAdmin = () => localStorage.getItem('isAdmin');

export const defaultHomePage = `/signin`;
export const adminHomePage = `/adminWelcomPage/:name`;

export const getHomePage = () =>
  getIsAdmin() ? adminHomePage : defaultHomePage;

export const isLoggedIn = () => !!localStorage.getItem('token');  //if logged in get the token for that user



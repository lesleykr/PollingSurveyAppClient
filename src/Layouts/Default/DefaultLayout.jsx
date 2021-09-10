import React from 'react';
// import TopNavBar from './TopNavBar';
import Footer from '../../Components/Footer';
import { isLoggedIn } from '../../Common/Library';
import { Redirect } from 'react-router-dom';
import NavMenu from '../../Components/Navbar/NavMenu';

const DefaultLayout = (props) => {
  // const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      {isLoggedIn() ? (
        <>
        <NavMenu />
          {/* <div collapsed={collapsed} toggleNavbar={toggleNavbar} /> */}
          {props.children}
          <Footer />
        </>
      ) : (
        <>
          <Redirect to="/signin" />
        </>
      )}
    </>
  );
};

export default DefaultLayout;

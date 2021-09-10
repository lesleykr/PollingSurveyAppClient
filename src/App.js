import React, {useEffect,useState} from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import SignUp from "../src/Components/User/SignUp";
import SignIn from "../src/Components/User/SignIn";
import AdminWelcomePage from "./Components/Polling/AdminWelcomePage";
import UserProfilePage from "./Components/Polling/UserProfilePage";
import ViewCurrentPoll from "./Components/Polling/ViewCurrentPoll";
import CreatePollQuestions from "./Components/Polling/CreatePollQuestions";
import { getHomePage, getIsAdmin, isLoggedIn } from "./Common/Library";
import AdminLayout from "./Layouts/Admin/AdminLayout";
import GuestLayout from "./Layouts/Guest/GuestLayout";
import DefaultLayout from "./Layouts/Default/DefaultLayout";
import NotFound from "./Common/NotFound";
import AppRoute from "./Layouts/AppRoute";
import Footer from "./Components/Footer";
import ForgotPassword from "./Components/User/ForgotPassword";
import NavMenu from "./Components/Navbar/NavMenu";
import LogOut from "./Components/User/LogOut";



function App () {
   const getUserLayout = () => (!isLoggedIn() ? GuestLayout : getIsAdmin() ? AdminLayout : DefaultLayout);
  //If not logged in view app as guest, or if logged in as admin display admin, if not admin display default layout(employee)
  //



  return (
    <main className = "container text-center">
      <div>
        {/* <Switch>
          <AppRoute
            exact
            path="/signin"
            component={SignIn}
            layout={GuestLayout}
          />
          <AppRoute
            exact
            path="/signup"
            component={SignUp}
            layout={GuestLayout}
          />
          <Route exact 
          path="/forogotPassword" 
          component={ForgotPassword} 
          layout = {GuestLayout}
          /> */}
        {/* grab user's name using route parameters */}
        {/* <AppRoute
            exact
            path="/userProfile/:name"
            component={UserProfilePage}
            layout={GuestLayout}
          />
          <AppRoute
            exact
            path="/adminWelcomePage/:name"
            component={AdminWelcomePage}
            layout={GuestLayout}
          />
          <AppRoute
            exact
            path="/pollingQuestions"
            component={ViewCurrentPoll}
            layout={GuestLayout}
          />
          <AppRoute
            exact
            path="/createPoll"
            component={CreatePollQuestions}
            layout={AdminLayout}
          />
          <AppRoute
            path="/notFound"
            component={NotFound}
            layout={getUserLayout()}
          />
          <Redirect from="/" exact to={getHomePage()} />
          <Redirect to="/notFound" />
        </Switch> */}
        
     
        <Router>
          <div className = "App">
         <NavMenu />

         <div className = "auth-wrapper">
           <div className = "auth-innner">
          <Switch>
          <Route exact path="/signin" component={SignIn} />
      
            <Route exact path="/signup" component={SignUp} />

            <Route exact path="/forogotPassword" component={ForgotPassword} />
            
            <Route exact path = "/logout" component = {LogOut} />

            <Route
              exact
              path="/userProfilePage/:name"
              component={UserProfilePage}
            />

            <Route
              exact
              path="/adminWelcomPage/:name"
              component={AdminWelcomePage}
            />

            <Route exact path="/pollingQuestions" component={ViewCurrentPoll} />

            <Route exact path="/createPoll" component={CreatePollQuestions} />

            <Route exact path="/notFound" component={NotFound} />

            <Redirect from="/" exact to={getHomePage()} />
          </Switch>
          </div>
          </div>
          </div>
        </Router>
      </div>
      <Footer />
    </main>
  );
}

export default App;

import React, { useState } from "react";
import { Button } from "reactstrap";
import { GiKeyLock } from "react-icons/gi";
import "./ForgotPassword.css"
import { API_URL } from "../../Common/Environment";


const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const url = "http://pollsurveyapp-env.eba-jk6fyvwy.us-east-2.elasticbeanstalk.com/Api/Account/SetPassword"
    const url = `${API_URL}/Account/SetPassword`

    const reqBody ={
      newPassword: newPassword,
      confirmPassword: confirmPassword
    }

    fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody),
    })
    .then((r) => r.json())
    .then((data)=>{
      //code needs to go here
    })
    .catch((error) =>{
      console.log("Password reset failed", error)
    })
  };

  return (
<div className="mainDiv App-header">
      <header className="sub-title">Reset Password</header>
      <br />
      <div>
        <form className="signin">
          {/* <h2>Register Form</h2> */}

          <div className="input-container">
            <i className="fa fa-user icon">
              {" "}
              <GiKeyLock />
            </i>
            <input
              className="input-field"
              type="password"
              placeholder="New Password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-key icon">
              {" "}
              <GiKeyLock />
            </i>
            <input
              className="input-field"
              type="password"
              placeholder=" Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <Button
                  className="btn btn-default btn-lg btn-submit mb-2"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
                <br />
                <div className="flex-container">
                  <h6> Return to</h6>
                  <p className="createLink"><a href ="/signin">Login Page</a></p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

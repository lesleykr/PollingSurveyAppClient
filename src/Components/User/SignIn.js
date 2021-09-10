import React, { useState } from "react";
import "./SignIn.css";
import { Button } from "reactstrap";
import { FaUserCircle, FaLock } from "react-icons/fa";
import GoogleButton from "react-google-button";
import { useHistory } from "react-router-dom";
import axios from "axios";


const SignIn = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

 const history = useHistory();

  const handleSubmit = (e) => {
    history.push('/userProfilePage/:name');
    e.preventDefault();
    console.log("button clicked")

    const url = "https://localhost:44303/token";

    // const url = "https://pollsurveyapp-env.eba-jk6fyvwy.us-east-2.elasticbeanstalk.com/token";

    //add header to axios application/x-www-form-urlencoded
    //send grant_type with data value as password


    const reqData = {
      username: username,
      password: password,
      grant_type:password
    };
    console.log(reqData);

 const config = {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}

  const bodyData =
    "username=" +
    username+
    "&password=" +
    password +
    "&grant_type=password";

    axios.post(url, bodyData, config)
    .then(res => {
      console.log(res)
    }).catch(
      err => {
        console.log(err)
      }
    )
}
  return (
    <div className="mainDiv App-header">
      <header className="sub-title">Login</header>
      <br />
      <div>
        <form className="signin">
          {/* <h2>Register Form</h2> */}

          <div className="input-container">
            <i className="fa fa-user icon">
              {" "}
              <FaUserCircle />
            </i>
            <input
              className="input-field"
              type="text"
              placeholder="Email"
              name="Email"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-key icon">
              {" "}
              <FaLock />
            </i>
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex-containerone">
            <div className="checkbox">
              <input type="checkbox" id="checkbox" name="checkbox" value="" />
              <label htmlFor="checkbox"> Remember Me</label>
              <span className="forgotPass">
                <a href="/forogotPassword">RESET PASSWORD?</a>
              </span>
            </div>
          </div>
          <br />

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
                <div className="flex-containertwo">
                  <div className="lines">
                    <p className="or">or</p>
                  </div>
                </div>
                <span className="googlebtn">
                  <GoogleButton
                    onClick={() => {
                      console.log("Google button clicked");
                    }}
                  />
                </span>
                <div className="flex-container">
                  <h6> Don't Have An Account? </h6>
                  <p className="createLink">
                    <a href="/signup">Create Account</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

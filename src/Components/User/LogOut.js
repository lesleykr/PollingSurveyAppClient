import React, { Component } from "react";
import { clearSession } from "../../Common/Library";
import { NavLink, NavItem} from "reactstrap";

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  signOutUser = () => {
    if (this.state.user) {
      clearSession();
      this.history.replace("/signin");
    }
  };
  render() {
    return (
      <>
        {!!localStorage.getItem("token") ? (
          <div>
          <NavItem>
            <NavLink className="navbar-brand" href="#">
              Logout
            </NavLink>
          </NavItem>
          </div>
        ) : null}
      </>
    );
  }
}


  export default LogOut;
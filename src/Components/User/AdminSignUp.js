import React, { Component } from 'react';
import { Button, FormGroup, Input, InputGroup, Label } from 'reactstrap';
import {withAuth} from '../../Common/Library'

class AdminSignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: '',
      adminCode: '',
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="dropdown">
            <p className="text-center">
          Polling App
        </p>
              <button
                className="btn btn-secondary dropdown-toggle w-100 d-block my-4"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Department
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  CEO
                </a>

                <a className="dropdown-item" href="#">
                  DIRECTOR
                </a>

                <a className="dropdown-item" href="#">
                  MANAGER
                </a>

                <a className="dropdown-item" href="#">
                  SUPPORT
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col small-text">Create 4-digit Admin Code :</div>
          <div className="col">
            <input size="4" max="9999" className="w-100" ></input>
          </div>
        </div>
        <div className="row">
            <div className="col">
            <Button className="btn btn-default btn-lg btn-submit mb-5
            mx-auto d-block my-5">Submit</Button>
            </div>
        </div>
      </div>
    );
  }
}

export default withAuth(AdminSignUP);

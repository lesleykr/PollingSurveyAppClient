import React, { Component } from 'react';
import { Button } from 'reactstrap';
class CreatePollQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Create a Poll</h2>
        <input placeholder="Title"></input>

        <Button
          className="btn btn-default btn-lg btn-submit mb-5
            mx-auto d-block my-5"
        >
          Submit
        </Button>
      </div>
    );
  }
}

export default (CreatePollQuestions);

import React from "react";
// import { withAuth } from "../../Common/Utility";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const ViewCurrentPoll = (props) => {
  return (
    // <div>
    //   <ol><li>{props.survey.surveyTitle}</li></ol>
    //   <p>{props.survey.description}</p>
    // </div>
    <div className="VCP">
      <h2>ICP's Current Poll</h2>
      <br />
      <Form>
        <FormGroup tag="fieldset">
          <legend>June Poll Questions</legend>
          <FormGroup check>
            <p>
              1. Would you like to participate in a co-worker's sporting event?
            </p>
            <Label check>
              <Input type="checkbox" name="radio1" /> Yes, I'd love to try!
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="radio1" /> Not sure if I'm sure
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="checkbox" name="radio1" /> Sports? Not my cup of tea
            </Label>
          </FormGroup>

          <br />
          <FormGroup check>
            <p>2. What outdoor space would you like to see in the courtyard?</p>
            <Label check>
              <Input type="checkbox" name="radio1" /> Flower garden and walking
              path
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="radio1" /> Koi pond and tables
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="checkbox" name="radio1" /> Zen rock garden and
              benches
            </Label>
          </FormGroup>

          <br />
          <FormGroup check>
            <p>3. What snacks are preferred for the break room?</p>
            <Label check>
              <Input type="checkbox" name="radio1" /> Crunchy and salty are my
              bag!
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="radio1" /> Sweet treats for me!
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="checkbox" name="radio1" /> Healthy and organic
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
      <br />

      <Button
        className="btn btn-default btn-lg btn-submit mb-2"
        type="submit"
        // onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default ViewCurrentPoll;

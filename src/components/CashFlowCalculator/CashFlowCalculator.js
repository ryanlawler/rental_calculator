import React from "react";
import PropTypes from "prop-types";
import StateForm from "../StateForm";

import { Form, Col, Button, InputGroup, Container } from "react-bootstrap";

class CashFlowCalculator extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="exampleForm.ControlInput1">
              <Form.Label>Property Price</Form.Label>
              <InputGroup classname="InputGroup$">
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control type="number" placeholder="100000" />
                </InputGroup.Prepend>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="exampleForm.ControlInput1">
              <Form.Label>Mortgage Term</Form.Label>
              <Form.Control type="number" placeholder="30" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="exampleForm.ControlInput1">
              <Form.Label>Down Payment</Form.Label>
              <Form.Control type="number" placeholder="100000" />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect1">
              <StateForm></StateForm>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Expected Monthly Rent</Form.Label>
            <InputGroup classname="InputGroup$">
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control type="number" placeholder="1000" />
              </InputGroup.Prepend>
            </InputGroup>
          </Form.Group>
        </Form>
        <Button variant="primary">Submit</Button>
      </Container>
    );
  }
}

const CashFlowCalculatorPropTypes = {
  // always use prop types!
};

CashFlowCalculator.propTypes = CashFlowCalculatorPropTypes;

export default CashFlowCalculator;

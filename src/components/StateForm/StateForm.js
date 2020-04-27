import React from "react";
import PropTypes from "prop-types";
import styles from "./StateForm.scss";
import { Form } from "react-bootstrap";

let stateMap = {};

class StateForm extends React.Component {
  render() {
    return (
      <>
        <Form.Label>State</Form.Label>
        <Form.Control as="select">{keysToList()}</Form.Control>
      </>
    );
  }
}

function keysToList() {
  var rows = [];
  const states = Array.from(stateMap.keys());
  for (var i = 0; i < states.length; i++) {
    rows.push(<option>{states[i]}</option>);
  }
  return rows;
}

const StateFormPropTypes = {
  // always use prop types!
};

StateForm.propTypes = StateFormPropTypes;

stateMap = new Map([
  ["Alabama", "0.0033"],
  ["Alaska", "0.0104"],
  ["Arizona", "0.0072"],
  ["Arkansas", "0.0052"],
  ["California", "0.0074"],
  ["Colorado", "0.0060"],
  ["Connecticut", "0.0163"],
  ["Delaware", "0.0043"],
  ["District of Columbia", "0.0046"],
  ["Florida", "0.0097"],
  ["Georgia", "0.0083"],
  ["Hawaii", "0.0026"],
  ["Idaho", "0.0069"],
  ["Illinois", "0.0173"],
  ["Indiana", "0.0085"],
  ["Iowa", "0.0129"],
  ["Kansas", "0.0129"],
  ["Kentucky", "0.0072"],
  ["Louisiana", "0.0018"],
  ["Maine", "0.0109"],
  ["Maryland", "0.0087"],
  ["Massachusetts", "0.0104"],
  ["Michigan", "0.0162"],
  ["Minnesota", "0.0105"],
  ["Mississippi", "0.0052"],
  ["Missouri", "0.0091"],
  ["Montana", "0.0083"],
  ["Nebraska", "0.0176"],
  ["Nevada", "0.0084"],
  ["New Hampshire", "0.0186"],
  ["New Jersey", "0.0189"],
  ["New Mexico", "0.0055"],
  ["New York", "0.0123"],
  ["North Carolina", "0.0078"],
  ["North Dakota", "0.0142"],
  ["Ohio", "0.0136"],
  ["Oklahoma", "0.0074"],
  ["Oregon", "0.0087"],
  ["Pennsylvania", "0.0135"],
  ["Rhode Island", "0.0135"],
  ["South Carolina", "0.0050"],
  ["South Dakota", "0.0128"],
  ["Tennessee", "0.0068"],
  ["Texas", "0.0181"],
  ["Utah", "0.0060"],
  ["Vermont", "0.0159"],
  ["Virginia", "0.0074"],
  ["Washington", "0.0092"],
  ["West Virginia", "0.0049"],
  ["Wisconsin", "0.0176"],
  ["Wyoming", "0.0058"]
]);

export default StateForm;

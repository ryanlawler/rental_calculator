import React from 'react';
import { shallow, render, mount } from 'enzyme';
import CashFlowCalculator from './CashFlowCalculator';

describe('CashFlowCalculator', () => {
  let props;
  let shallowCashFlowCalculator;
  let renderedCashFlowCalculator;
  let mountedCashFlowCalculator;

  const shallowTestComponent = () => {
    if (!shallowCashFlowCalculator) {
      shallowCashFlowCalculator = shallow(<CashFlowCalculator {...props} />);
    }
    return shallowCashFlowCalculator;
  };

  const renderTestComponent = () => {
    if (!renderedCashFlowCalculator) {
      renderedCashFlowCalculator = render(<CashFlowCalculator {...props} />);
    }
    return renderedCashFlowCalculator;
  };

  const mountTestComponent = () => {
    if (!mountedCashFlowCalculator) {
      mountedCashFlowCalculator = mount(<CashFlowCalculator {...props} />);
    }
    return mountedCashFlowCalculator;
  };  

  beforeEach(() => {
    props = {};
    shallowCashFlowCalculator = undefined;
    renderedCashFlowCalculator = undefined;
    mountedCashFlowCalculator = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

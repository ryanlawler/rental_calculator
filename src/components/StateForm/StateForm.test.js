import React from 'react';
import { shallow, render, mount } from 'enzyme';
import StateForm from './StateForm';

describe('StateForm', () => {
  let props;
  let shallowStateForm;
  let renderedStateForm;
  let mountedStateForm;

  const shallowTestComponent = () => {
    if (!shallowStateForm) {
      shallowStateForm = shallow(<StateForm {...props} />);
    }
    return shallowStateForm;
  };

  const renderTestComponent = () => {
    if (!renderedStateForm) {
      renderedStateForm = render(<StateForm {...props} />);
    }
    return renderedStateForm;
  };

  const mountTestComponent = () => {
    if (!mountedStateForm) {
      mountedStateForm = mount(<StateForm {...props} />);
    }
    return mountedStateForm;
  };  

  beforeEach(() => {
    props = {};
    shallowStateForm = undefined;
    renderedStateForm = undefined;
    mountedStateForm = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

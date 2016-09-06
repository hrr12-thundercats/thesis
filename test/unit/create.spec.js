'use strict';
// React Native component dependencies
import React, {
  View,
  Text,
  Image,
  Navigator,
} from 'react-native';
// Create components
import {
  Create,
  TextField,
  SubmitButton,
} from '../../app/components/Create';
// Create container
import CreateContainer from '../../app/containers/CreateContainer';
// Custom components
import Button from 'react-native-button';
// Testing dependencies
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
// Wrappers
let createWrapper = shallow(
  <Create
    fields={{ action: 'foo' }}
    handleClick={() => {}}
  />
);
let createContainerWrapper = shallow(
  <CreateContainer
    token={{}}
    profile={{}}
    navigator={{}}
    onboard={false}
    resetToTabs={{}}
  />
);

describe('Create Container', () => {
  it('should ', () => {

  });
});

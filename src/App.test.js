import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

import './setupTests.js'

describe('App', () => {
  describe('render', () => {
    test('renders without crashing', () => (
      shallow(<App />)
    ));
  })
})

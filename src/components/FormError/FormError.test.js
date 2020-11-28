import React from 'react';
import { shallow } from 'enzyme';
import FormError from './FormError';

describe('FormError', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<FormError />);
    expect(wrapper).toMatchSnapshot();
  });
});

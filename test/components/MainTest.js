import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../src/components/Main';

describe('<Main />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Main />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "index"', () => {
      expect(component.hasClass('index')).to.equal(true);
    });
  });
});

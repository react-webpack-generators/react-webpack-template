import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';

describe('<App />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "index"', () => {
      expect(component.hasClass('index')).to.equal(true);
    });
  });
});

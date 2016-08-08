import React from 'react';
import { shallow } from 'enzyme';
import YeomanImage from 'components/YeomanImage';

describe('<YeomanImage />', () => {

  it('should render an image tag', () => {

    const component = shallow(<YeomanImage />);
    expect(component.find('img').length).to.equal(1);
  });
});

require('normalize.css');
require('styles/App.css');

import React from 'react/addons';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        Content
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

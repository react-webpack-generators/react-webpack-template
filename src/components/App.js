import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './app.cssmodule.css';

const yeomanImage = require('../images/yeoman.png');

@cssmodules(styles)
class AppComponent extends React.Component {

  render() {
    return (
      <div className="index" styleName="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
          Please edit <code>src/components/App.js</code> to get started!
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

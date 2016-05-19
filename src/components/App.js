import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './app.css';

const yeomanImage = require('../images/yeoman.png');

@cssmodules(styles)
class AppComponent extends React.Component {

  handleClick() {
    return true;
  }

  render() {
    return (
      <div className="index" styleName="index" onClick={this.handleClick.bind(this)}>
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

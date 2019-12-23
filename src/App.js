import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import {providers, firebaseAppAuth} from './firebase-init';
import LayoutHandler from './layouts/LayoutHandler';
class App extends Component {
  render() {
    return (
      <LayoutHandler {...this.props}/>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,  
}) (App);


import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import {providers, firebaseAppAuth} from './firebase-init';
import Modal from './components/modal';
import Nav from './layouts/nav';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <>
        <Nav {...this.props}/>
        <div className="container mx-auto mt-10">
          <div className="flex mb-4">
              <div className="w-1/2 bg-gray-400 h-12"></div>
              <div className="w-1/2 bg-gray-500 h-12"></div>
          </div>
        </div>
        <Modal {...this.props}/>
        <ToastContainer/>
      </>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,  
}) (App);


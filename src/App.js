import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import {providers, firebaseAppAuth} from './firebase-init';
import Modal from './components/modal';
import HomePage from './layouts/index';
import Nav from './layouts/nav';
import TopHeader from './layouts/top-header';
import './styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Search from './layouts/search-bar';

class App extends Component {
  render() {
    return (
      <>
        <TopHeader/>
        <Nav {...this.props}/>
        <HomePage/>
        <Search />
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


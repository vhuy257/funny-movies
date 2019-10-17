import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import {providers, firebaseAppAuth} from './firebase-init';
import Modal from './components/modal';
import ModalShareMovie from './components/modal-share-movies';
import SliderLayout from './layouts/slider';
import ListMovies from './layouts/listMovies';
import Nav from './layouts/nav';
import './styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


class App extends Component {
  render() {
    return (
      <>
        <Nav {...this.props}/>
        <SliderLayout/>
        <div className="container mx-auto mt-10">
          <div className="flex mb-4">
            <ListMovies/>
          </div>
        </div>
        <ModalShareMovie {...this.props}/>
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


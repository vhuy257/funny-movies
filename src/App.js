import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import {providers, firebaseAppAuth} from './firebase-init';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './layouts/footer';
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
      <Router>
        <TopHeader/>
        <Nav {...this.props}/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer/>
        <Search />
        <Modal {...this.props}/>
        <ToastContainer/>
      </Router>
    );
  }
}

function About() {
  return (
    <div>
        <h2>About</h2>
    </div>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,  
}) (App);


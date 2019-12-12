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
import HomePage from './screens/Home/index';
import Header from './layouts/header';
import './styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Search from './layouts/search-bar';
import About from './screens/About';
import ProductDetail from './screens/Product/Detail';
import ProductList from './screens/Product/List';

class App extends Component {
  render() {
    return (
      <Router>
        <Header {...this.props}/>
        
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route exact path="/products">
            <ProductList/>
          </Route>
          <Route path="/:id" children={<ProductDetail/>}/>
        </Switch>

        <Footer/>
        <Search />
        <Modal {...this.props}/>
        <ToastContainer/>
      </Router>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,  
}) (App);


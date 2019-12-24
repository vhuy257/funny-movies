import React, {Component} from 'react';
import { ToastContainer } from 'react-toastify';
import Search from './search-bar';
import About from '../screens/About';
import ProductDetail from '../screens/Product/Detail';
import ProductList from '../screens/Product/List';
import Cart from '../screens/Checkout/Cart';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Footer from './footer';
import Modal from '../components/modal';
import HomePage from '../screens/Home/index';
import Header from './header';
import '../styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../store/actions/cart';

class LayoutHandler extends Component {
    componentDidMount() {
        this.props.initCart();
        this.props.initTotalAmount();
    }

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
                <Route exact path="/cart">
                    <Cart {...this.props}/>
                </Route>
                <Route path="/:id" children={<ProductDetail/>}/>
                </Switch>
                <Footer/>
                <Search />
                <Modal {...this.props}/>
                <ToastContainer/>
            </Router>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initCart: cartActions.initCart,
        initTotalAmount: cartActions.totalAmountFromCart,
    }, dispatch)
}

function mapStateToProps({cart}) {
    return {
        cartData: cart.all.cartList,
        totalAmount: cart.all.totalAmount
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutHandler);
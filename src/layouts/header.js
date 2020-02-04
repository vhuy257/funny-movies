import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as modalActions from '../store/actions/alerts';
import {bindActionCreators} from 'redux';
import { toast } from 'react-toastify';
import Menu from './Menu';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
          canSubmit : false,
          email     : '',
          password  : '',
        }
        this.showModalRegister = this.showModalRegister.bind(this);
    }
    
    componentDidMount() {
      window.onscroll = function() {
        if(window.pageYOffset > 150) {
          this.document.body.classList.add("nav-fixed");
        } else {
          this.document.body.classList.remove("nav-fixed");
        }
      };
    }

    componentWillUnmount() {
      window.onscroll = null;
    }

    changeField(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    showModalRegister() {
        this.props.showMd();
    }

    hideModalRegister() {
        this.props.hideMd();
    }
    
    showFormSearch() {      
      document.body.classList.add('show-search--form');
    }

    login(e) {
        e.preventDefault();
        try {
            this.props.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
              toast.success('You login successfully!!', {
                  position: toast.POSITION.BOTTOM_RIGHT
              });
            })
            .catch(error => {
              toast.error(error.message, {
                  position: toast.POSITION.BOTTOM_RIGHT
              });
            })
        } catch (error) {}
    }

    render() {    
      return (
        <header className="navigation relative">
            <div className="bg-teal-600 p-1">
                <div className="container m-auto pl-3 pr-3 flex justify-between flex-wrap">
                    <div className="w-1/2 py-1">
                        <span className="text-white"><i className="icon-phone mr-2"></i>Phone number: (84) 7562 561</span>
                    </div>
                    <div className="w-1/2 text-right text-white">
                        <button  
                            className="ml-2focus:outline-none py-1 px-2" 
                            type="submit">
                        Login
                        </button>
                        /
                        <button 
                            type="button"
                            className="ml-2 focus:outline-none py-1">
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
            <nav className="flex content-center items-center justify-between flex-wrap relative">
              <div className="flex items-center flex-shrink-0 mr-6">
                <Link to="/" className="flex flex-shrink-0 items-center">
                  <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                  <span className="font-semibold text-xl tracking-tight">Hommie</span>
                </Link>
              </div>
              <div className="w-full block lg:flex lg:items-center lg:w-auto p-3">
                <Menu/>
              </div>
              <div className="w-full block lg:flex lg:items-center lg:w-auto">
                <div className="ml-4 md:flex items-center cart-item">
                  <button className="focus:outline-none" onClick={() => {this.showFormSearch()}}><i className="icon-magnifier icons"></i></button>  
                </div>
                <div className="ml-4 md:flex items-center cart-item">
                  <button className="focus:outline-none"><i className="icon-heart icons"></i></button>
                </div>
                <div className="ml-4 md:flex items-center cart-item minicart p-3">
                  <Link to="/cart">
                    <button className="focus:outline-none">
                      <i className="icon-basket icons"></i>
                      <span className="item-in-cart mx-2 bg-orange-400 text-sm px-2 py-1 text-white text-center leading-normal">{this.props.cartData.length || 0}</span>
                      /
                      <span className="leading-normal font-bold text-sm px-2 py-1">${this.props.totalAmount}</span>
                    </button>
                  </Link>
                  <div className="dropdown mini-cart p3">
                    <ul>
                      {this.props.cartData.map((item, k) => (
                        <li 
                        key={k}
                        className="flex justify-between items-center p-3">
                          <div className="info-product flex flex-start items-center">
                            <img src={`./images/product/${item.image}`} className="w-12 h-12 object-fit mr-5" alt=""/>
                            <h2 className="text-base">{item.name}</h2>
                          </div>
                          <span className="font-bold text-xl price ml-5">${item.price}</span>
                        </li>
                      ))}
                    </ul>
                    {this.props.cartData.length !== 0 && (
                      <div className="options text-center mx-auto">
                        <h2 className="text-base text-gray-700">Total:<strong className="text-teal-700 text-xl ml-4">${this.props.totalAmount}</strong></h2>
                        <Link to="/cart">
                          <button className="bg-teal-500 mt-2 hover:bg-teal-700 text-white font-bold py-2 px-4 mx-auto">
                              View and edit cart
                          </button>
                        </Link>
                      </div>
                    )}
                    {this.props.cartData.length === 0 && (
                      <h2 className="text-center">Your cart is empty!</h2>
                    )}
                  </div>
                </div>
              </div>
            </nav>
            </div>
        </header>
      )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showMd: modalActions.showModal,
        hideMd: modalActions.hideModal,
        showMdMovies: modalActions.showModalMovies,
    }, dispatch);
}

function mapStateToProps({alerts}) {
    return {
        modalFlag: alerts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
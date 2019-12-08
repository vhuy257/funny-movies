import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as modalActions from '../store/actions/alerts/';
import {bindActionCreators} from 'redux';
import { toast } from 'react-toastify';
import SearchBar from '../layouts/search-bar';

class NavWrapper extends Component {
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
        <header className="navigation">
            <div className="container mx-auto">
            <nav className="flex content-center items-center justify-between flex-wrap  p-3">
              <div className="flex items-center flex-shrink-0 mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span className="font-semibold text-xl tracking-tight">Hommie</span>
              </div>
              <div className="w-full block lg:flex lg:items-center lg:w-auto">
                <SearchBar/>
              </div>
              <div className="w-full block lg:flex lg:items-center lg:w-auto">
                <form onSubmit={(e) => this.login(e)}>
                  <div className="md:flex md:items-center">
                    {!this.props.user && 
                      <>
                          <button 
                            className="ml-8 focus:shadow-outline focus:outline-none py-1 px-2" 
                            type="submit"
                          >
                            Login
                          </button>
                          /
                          <button 
                            type="button"
                            onClick={this.showModalRegister}
                            className="ml-2 focus:shadow-outline focus:outline-none py-1 px-2"
                          >
                              Register
                          </button>
                      </>
                    }
                    {
                      this.props.user &&
                      <>
                        <span className="">
                          Welcome, <span className="font-bold">{this.props.user.email}</span>
                        </span>
                        <button 
                          type="button"
                          onClick={this.props.signOut}
                          className="ml-2 hover:bg-red-400 hover:text-white focus:shadow-outline focus:outline-none text-black py-1 px-2">
                          Logout
                        </button>
                      </>
                    }
                  </div>
                </form>
                <div className="ml-10 md:flex cart-item">
                <i className="icon-heart icons"></i>
                </div>
                <div className="ml-4 md:flex items-center cart-item">
                  <i className="icon-basket icons"></i>
                  <span className="item-in-cart mx-2 bg-orange-400 text-xs px-2 py-1 text-white text-center leading-normal">20</span>
                  /
                  <span className="leading-normal font-bold text-xs px-2 py-1">$40</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavWrapper);
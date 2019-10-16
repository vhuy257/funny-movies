import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as modalActions from '../store/actions/alerts/';
import {bindActionCreators} from 'redux';
import { toast } from 'react-toastify';

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
        <nav className="flex items-center justify-between flex-wrap bg-indigo-600 p-3">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span className="font-semibold text-xl tracking-tight">Youtube embed</span>
          </div>
          <div className="w-full block lg:flex lg:items-center lg:w-auto">
            <form onSubmit={(e) => this.login(e)}>
              <div className="md:flex md:items-center">
                {!this.props.user && 
                  <>
                      <div className="md:w-1/3">
                          <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Email
                          </label>
                      </div>
                      <div className="md:w-2/3">
                        <input 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        type="email" 
                        placeholder="Your email"
                        name="email" value={this.state.email} 
                        onChange={(e) => {this.changeField(e)}} required/>
                      </div>
                      <div className="md:w-1/3">
                          <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Password
                          </label>
                      </div>
                      <div className="md:w-2/3">
                        <input  
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        value={this.state.password} 
                        onChange={(e) => {this.changeField(e)}} required/>
                      </div>
                      <button className="ml-8 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Login
                      </button>
                      <button 
                      type="button"
                      onClick={this.showModalRegister}
                      className="ml-8 shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      >
                          Register
                      </button>
                  </>
                }

                {
                  this.props.user &&
                  <>
                    <span className="text-white">
                      Welcome, <span className="font-bold">{this.props.user.email}</span>
                    </span>
                    <button 
                      onClick={() => {this.props.showMdMovies()}}
                      type="button"
                      className="ml-8 shadow bg-blue-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                      Share a movies 
                    </button>
                    <button 
                      type="button"
                      onClick={this.props.signOut}
                      className="ml-8 shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                      Logout
                    </button>
                  </>
                }
              </div>
            </form>
          </div>
        </nav>
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
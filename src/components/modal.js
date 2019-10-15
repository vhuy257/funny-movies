import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as modalActions from '../store/actions/alerts/';
import {bindActionCreators} from 'redux';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.hideModalRegister = this.hideModalRegister.bind(this);
        this.changeField = this.changeField.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    changeField(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp() {
        
    }

    hideModalRegister() {
        this.props.hideMd();
    }

    render() {
        console.log(this.props);
        return (
            <>
            <div className={this.props.showModal ? "modal fixed w-full h-full top-0 left-0 flex items-center justify-center" : "modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"}>
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold">Register user</p>
                    <div className="modal-close cursor-pointer z-50" onClick={this.hideModalRegister}>
                        <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                    </div>
                    </div>
                    <form className="" onSubmit={this.signUp}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input 
                            value={this.state.email}
                            onChange={(e) => {this.changeField(e)}}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            name="email" 
                            type="text" 
                            placeholder="Username" 
                            required/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input 
                            value={this.state.password}
                            onChange={(e) => {this.changeField(e)}}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            name="password"
                            type="password" 
                            placeholder="******************" 
                            required/>
                        </div>
                        <div className="flex items-center flex-start">
                            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showMd: modalActions.showModal,
        hideMd: modalActions.hideModal,
    }, dispatch);
}

function mapStateToProps({alerts}) {
    return {
        showModal: alerts.modals.open,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
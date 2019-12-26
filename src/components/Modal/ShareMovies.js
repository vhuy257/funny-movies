import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as modalActions from '../../store/actions/alerts';
import {bindActionCreators} from 'redux';
import firebase from 'firebase/app';
import 'firebase/database'; 
import { toast } from 'react-toastify';
const uuid = require('uuid');
const axios = require('axios');

class ModalShareMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: uuid.v1(),
            youtube_url: '',
        };
    }

    changeField(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    shareMovie(e) {
        e.preventDefault();
        var _youtubeId = this.state.youtube_url.split('v=')[1];
        var _urlApi = `https://www.googleapis.com/youtube/v3/videos?id=${_youtubeId}&key=AIzaSyBcPx2cJMk1foanXM7bFbXThMZ1ccWvXAo&part=snippet`;

        axios.get(_urlApi).then(res => {
            firebase
            .database()
            .ref(`moviesId/${this.state.uid}`)
            .set({
                _idVid: _youtubeId,
                _titleVid: res.data.items[0].snippet.title,
                _descriptionVid: res.data.items[0].snippet.description,
                _shareBy: this.props.user && this.props.user.email,
            })
            .then(() => {
                toast.success('You movie share successfully!!', {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
                this.setState({
                    uid: uuid.v1()
                });
                this.props.hideMd();
            })
            .catch(error => {
                toast.error(`${error}`, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            }); 
        }).catch(err => {
            toast.error(`${err}`, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        });
    }

    render() {
        return (
            <>
            <div className={this.props.showModalShareMovies ? "modal fixed w-full h-full top-0 left-0 flex items-center justify-center" : "modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center"}>
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                    <p className="text-2xl font-bold">Share movies</p>
                    <div className="modal-close cursor-pointer z-50" onClick={this.hideModalRegister}>
                        <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                    </div>
                    </div>
                    <form className="" onSubmit={(e) => {this.shareMovie(e)}}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Youtube URL
                            </label>
                            <input 
                            value={this.state.youtube_url}
                            onChange={(e) => {this.changeField(e)}}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            name="youtube_url" 
                            type="url" 
                            placeholder="Url" 
                            required/>
                        </div>
                        <div className="flex items-center flex-start">
                            <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Share
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
        showMd: modalActions.showModalMovies,
        hideMd: modalActions.hideModalMovies,
    }, dispatch);
}

function mapStateToProps({alerts}) {
    return {
        showModalShareMovies: alerts.modals.openShareMovies,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalShareMovies);
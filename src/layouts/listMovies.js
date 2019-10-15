import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database'; 


class ListMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        firebase
          .database()
          .ref(`moviesId`)
          .on('value', (snap) => {
              const listMovies = snap.val();
              if(listMovies) {
                const messageList = Object.keys(listMovies).map(key => ({
                     ...listMovies[key]
                }));          
                this.setState({
                    list: messageList
                });
              }
        });
    }

    render() {
        return (
            <>
                <div className="flex flex-col justify-center">
                    {   this.state.list &&
                        this.state.list.map((item, key) => (
                            <div className="item flex flex-start border-b border-gray-400 pb-8 pt-8"
                                key={key}>
                                <div className="iframe-wrapper">
                                    <iframe width="560" height="315" 
                                    src={`https://www.youtube.com/embed/${item._idVid}`} 
                                    frameBorder="0" 
                                    title="iframe-yt"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen></iframe>
                                </div>
                                <div className="ml-8 content-_idVid">
                                    <span className="text-red-400 font-bold">{item._titleVid}</span>
                                    <h5 className="mt-2"><span className="font-bold">Share by: </span>{item._shareBy}</h5>
                                    <h5 className="font-bold">Desciption:</h5>
                                    <p className="whitespace-pre-wrap">
                                        {item._descriptionVid}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default ListMovies;
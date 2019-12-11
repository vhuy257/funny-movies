import React, {Component} from 'react';

class List extends Component {
    render() {
        return (
            <div className="bg-orange-400 text-white">
                <div className="container p-3">
                    <div className="breadcrumbs text-center">
                        <span className="item">
                            Home
                        </span>
                        <span>
                            Categories
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default List;
import React, {Component} from 'react';
import ListProducts from '../../data/products';
import Item from '../../components/Product/index';
import Pagination from "react-js-pagination";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 1
        };
    }
    
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    render() {
        return (
            <>
                <div className="breadcrumbs bg-orange-400 text-white">
                    <div className="container p-3">
                        <div className="text-center">
                            <span className="item">
                                Home
                            </span>
                            <span>
                                Categories
                            </span>
                        </div>
                        
                    </div>
                </div>
                <div className="flex container flex-row p-3 mt-5">
                    <div className="sidebar w-1/4">
                        <h2 className="text-2xl">Filter</h2>
                    </div>
                    <div className="main-content w-3/4">
                        <ul className="flex w-full flex-auto flex-wrap">
                        {
                            ListProducts.map((item, key) => (
                                <Item item={item} key={key}/>
                            ))
                        }
                        </ul>
                        <div>
                            <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={10}
                            activeClass="active"
                            totalItemsCount={ListProducts.length}
                            pageRangeDisplayed={5}
                            hideDisabled={true}
                            itemClass="inline-block bg-teal-400 px-4 py-2  mx-2 text-white"
                            itemClassPrev="first-item"
                            itemClassNext="last-item"
                            hideFirstLastPages={true}
                            onChange={(pageNumber) => { this.handlePageChange(pageNumber) }}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default List;
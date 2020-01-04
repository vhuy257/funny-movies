import React, { Component } from 'react';
import ListProducts from '../../data/Products';
import Item from '../../components/Product/index';
import Pagination from "react-js-pagination";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider  from 'rc-slider';
import Tooltip from 'rc-tooltip';
import StarRatings from 'react-star-ratings';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class List extends Component {
    constructor (props) {
        super(props);
        this.state = {
          activePage: 1,
          filter: [],
          ListProducts: ListProducts,
          temptListProduct: ListProducts,
        };
    }
    
    handleChange (value) {
        let _arr = this.state.temptListProduct.filter((item) => {
            return parseInt(item.price) >= value[0] && parseInt(item.price) <= value[1];
        });

        this.setState({
            ListProducts: _arr
        });
    }

    handle(props) {
        const { value, dragging, index, ...restProps } = props;
        return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
        );
    }

    handlePageChange (pageNumber) {        
        this.setState({activePage: pageNumber});
    }

    filterListProducts (item) {
        var _arr = this.state.filter;
        if(_arr.some(z => z.categories === item.categories)) {
            _arr.splice(_arr.indexOf(item), 1);
        } else {
            _arr.push(item);
        }
        
        this.setState({
            filter: _arr,
            ListProducts: ListProducts
        });
        
        var temptArr = [];
        _arr.map((i) => {
            var arr = this.state.temptListProduct.filter(k => {
                return k.type === i.categories;
            });
            return temptArr = temptArr.concat(arr);
        });

        if(_arr.length) {
            this.setState({
                ListProducts: temptArr,
            });    
        } else {
            this.setState({
                ListProducts: this.state.temptListProduct
            });
        }
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
                    <div className="sidebar w-1/5 pr-10">
                        <h2 className="text-2xl">Filter</h2>
                        <h2 className="mb-2 font-bold mt-5">
                            Categories
                        </h2>
                        <div className="filter-group checkbox-input" onChange={() => { this.filterListProducts({categories: 'bag'}) }}>
                            <input type="checkbox"/>
                            <label htmlFor="checkbox" className="label text-base">
                               <span>Bags</span>
                            </label>
                        </div>
                        <div className="filter-group checkbox-input" onChange={() => { this.filterListProducts({categories: 'watches'}) }}>
                            <input type="checkbox"/>
                            <label htmlFor="checkbox" className="label text-base">
                                <span>Watches</span>
                            </label>
                        </div>
                        <div className="filter-group checkbox-input" onChange={() => { this.filterListProducts({categories: 'eyewear'}) }}>
                            <input type="checkbox"/>
                            <label htmlFor="checkbox" className="label text-base">
                                <span>Eyewear</span>
                            </label>
                        </div>
                        <h2 className="mb-2 font-bold mt-5">
                            Rate
                        </h2>
                        {
                            [
                                {
                                    start: 0,
                                    count: 43
                                },{
                                    star: 1,
                                    count: 67,
                                },{
                                    star: 2,
                                    count: 8,
                                },{
                                    star: 3,
                                    count: 11,
                                },{
                                    star: 4,
                                    count: 23
                                },{
                                    star: 5,
                                    count: 35
                                }
                            ].map((item, key) => (
                                <div key={key}>
                                    <StarRatings 
                                        starRatedColor="#319795"
                                        starDimension="16px"
                                        rating={item.star}  
                                        starSpacing="4px"
                                    />
                                    <span className="text-xs ml-2 text-gray-500">{item.count}</span>
                                </div>
                            ))
                        }
                        <h2 className="mb-2 font-bold mt-5">Price</h2>
                        <Range min={0} max={1550} onChange={(val) => this.handleChange(val)} handle={this.handle} />
                    </div>
                    <div className="main-content w-4/5">
                        <div className="text-right p-3 text-sm text-gray-500">
                            Show 1-5 of {ListProducts.length} result
                        </div>
                        <ul className="flex w-full grid products flex-auto flex-wrap">
                        {
                            this.state.ListProducts.map((item, key) => (
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
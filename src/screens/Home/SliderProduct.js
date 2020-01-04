import React, {Component} from 'react';
import dataProduct from '../../data/Products';
import Item from '../../components/Product/index';

class SliderProduct extends Component {
    render() {
        return (
            <div className="special-wrapper container px-2">
                <div className="text-center w-full my-10">
                    <h2 className="title-sections text-lg uppercase font-bold text-teal-600">Special</h2>
                </div>
                <ul className="flex w-full grid products flex-auto flex-wrap">
                    {dataProduct.slice(0,8).map((item, key) => (
                        <Item item={item} key={key} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default SliderProduct;
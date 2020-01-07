import React from 'react';
import { useParams } from 'react-router-dom';
import ListProducts from '../../data/Products';

const Detail = (props) => {
    let {id} = useParams();

    let product = ListProducts.filter(item => {
        return item.id === parseInt(id);
    });

    return (
        <>
            <div className="breadcrumbs bg-orange-400 text-white">
                <div className="container p-3">
                    <div className="text-center">
                        <span className="item">
                            Home
                        </span>
                        <span>
                            {product[0].name}
                        </span>
                    </div>
                </div>
            </div>
            <div className="container pt-5">
                <img src={`../images/product/${product[0].image}`} alt=""/>
            </div>
        </>
    )
}

export default Detail;
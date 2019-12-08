import React, {Component} from 'react';

const dataProduct = [
    {
        image: 'balenciaga-explorer-backpack-graffiti-5032210fe35-1080.jpg',
        name: 'BALENCIAGA Explorer Backpack Graffiti',
        price: '1,550.00'
    },
    {
        image: 'burberry-giant-tote-in-knitted-archive-crest-8006521.jpg',
        name: 'BURBERRY Giant Tote in Knitted Archive Crest- Black/Iris Yellow',
        price: '895.00'
    },
    {
        image: 'burberry-men_s-backpack-rucksack-green-beast-print-rucksack-4051931.jpg',
        name: 'BURBERRY Men\'s Backpack Rucksack Green Beast Print Rucksack',
        price: '899.00'
    },
    {
        image: 'burberry-men_s-briefcase-london-leather-dark-blue-slim-briefcase-4063115.jpg',
        name: 'BURBERRY Men\'s Briefcase London Leather Dark Blue Slim',
        price: '755.00'
    },
    {
        image: 'burberry-large-giant-tote-in-colour-block-check--antique-yellow-golden-yellow-8006585.jpg',
        name: 'BURBERRY Large\'s Giant tote in colour block check antique yellow golden yellow',
        price: '699.00'
    },
    {
        image: 'chloe-drew-bijou-calfskin-clutch--black-chc18as115h1z001.jpg',
        name: 'Chloe Drew Bijou Calfskin Clutch Black',
        price: '1,200.00'
    },
    {
        image: 'hamilton-khaki-king-series-automatic-mens-watch-h64455533.jpg',
        name: 'Hamilton Khaki king series automatic mens watch',
        price: '500.00'
    },
    {
        image: 'ray-ban-aviator-58mm-classic-green-sunglasses-rb3025-l0205-58-14.jpg',
        name: 'Rayban aviator 58mm classic green sunglasses',
        price: '120'
    }
]

class SliderProduct extends Component {
    render() {
        return (
            <div className="special-wrapper container px-2">
                <div className="text-center w-full my-10">
                    <h2 className="title-sections text-lg uppercase font-bold text-teal-600">Special</h2>
                </div>
                <ul className="flex w-full flex-auto flex-wrap">
                    {dataProduct.map((item, key) => (
                        <li 
                        key={key}
                        className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-10 product-item-wrapper">
                            <div className="product-item text-center border-grey p-2 border ">
                                <img alt={item.name} src={`./images/product/${item.image}`} className="mx-auto" />
                                <h2 className="mt-4 h-8 truncate" alt={item.name}>{item.name}</h2>
                                <h4 className="font-bold text-teal-600 text-xl">$ {item.price}</h4>
                            </div>
                            <div className="product-toolbars text-center flex flex-col items-center justify-start pt-5">
                                <button className="quick-view outline-none mb-2 items-center flex tooltip tooltip-right">
                                    <i className="icon-magnifier icons h4 mx-3 d-block"></i>
                                    <span className="text-tooltip text-xs text-white whitespace-no-wrap bg-teal-500 p-1">Quick view</span>
                                </button>
                                <button className="addto-wishlist outline-none mb-2 flex items-center tooltip tooltip-right">
                                    <i className="icon-heart icons h4 mx-3 d-block"></i>
                                    <span className="text-tooltip text-xs text-white whitespace-no-wrap bg-teal-500 p-1">Add to wishlist</span>
                                </button>
                                <button className="add-to-cart outline-none flex mb-2 items-center tooltip tooltip-right">
                                    <i className="icon-basket icons h4 mx-3 d-block"></i>
                                    <span className="text-tooltip text-xs text-white whitespace-no-wrap bg-teal-500 p-1">Add to cart</span>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SliderProduct;
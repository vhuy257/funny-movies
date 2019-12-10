import React from 'react';

const Menu = () => {
    return (
        <nav className="menu-wrapper">
            <ul className="flex">
                <li className="mx-5 has-child">
                    <span>Product</span>
                    <div className="dropdown-menu-child shadow-md">
                        <div className="container flex flex-wrap p-2">
                            <ul className="p-4 w-1/5">
                                <li className="title m-2">
                                    <span className="font-bold text-600">Special</span>
                                </li>
                                <li className="m-2">
                                    Women
                                </li>
                                <li className="m-2">
                                    Men
                                </li>
                                <li className="m-2">
                                    Watches
                                </li>
                                <li className="m-2">
                                    Perfume
                                </li>
                                <li className="m-2">
                                    Shoes
                                </li>
                                <li className="m-2">
                                    Bags
                                </li>
                            </ul>
                            <ul className="p-4 w-1/5">
                                <li className="title m-2">
                                    <span className="font-bold text-600">Special</span>
                                </li>
                                <li className="m-2">
                                    Women
                                </li>
                                <li className="m-2">
                                    Men
                                </li>
                                <li className="m-2">
                                    Watches
                                </li>
                                <li className="m-2">
                                    Perfume
                                </li>
                                <li className="m-2">
                                    Shoes
                                </li>
                                <li className="m-2">
                                    Bags
                                </li>
                            </ul>
                            <ul className="p-4 w-1/5">
                                <li className="title m-2">
                                    <span className="font-bold text-600">On Sale</span>
                                </li>
                                <li className="m-2">
                                    Women
                                </li>
                                <li className="m-2">
                                    Men
                                </li>
                                <li className="m-2">
                                    Watches
                                </li>
                                <li className="m-2">
                                    Perfume
                                </li>
                                <li className="m-2">
                                    Shoes
                                </li>
                                <li className="m-2">
                                    Bags
                                </li>
                            </ul>
                            <ul className="p-4 w-1/5">
                                <li className="title m-2">
                                    <span className="font-bold text-600">On Sale</span>
                                </li>
                                <li className="m-2">
                                    Women
                                </li>
                                <li className="m-2">
                                    Men
                                </li>
                                <li className="m-2">
                                    Watches
                                </li>
                                <li className="m-2">
                                    Perfume
                                </li>
                                <li className="m-2">
                                    Shoes
                                </li>
                                <li className="m-2">
                                    Bags
                                </li>
                            </ul>
                            <div className="image-menu w-1/5">
                                <img src="./images/menu-marketing-image.jpg" alt="" className="object-cover w-full h-full"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="mx-5">
                    <span>About</span>
                </li>
                <li className="mx-5">
                    <span>Service</span>
                </li>
                <li className="mx-5">
                    <span>Contact us</span>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
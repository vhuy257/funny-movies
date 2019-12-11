import React    from 'react';
import { Link } from 'react-router-dom';
import MenuList from '../data/menu-item';

const Menu = () => {
    return (
        <nav className="menu-wrapper">
            <ul className="flex">
                {
                    MenuList.map((item) => (
                        <li className={item.childItems ? "mx-5 has-child" : "mx-5"}>
                            <Link to={item.link}>
                                <span>{item.title}</span>
                            </Link>
                            {
                                item.childItems &&
                                item.childItems.map(item => (
                                    <div className="dropdown-menu-child shadow-md">
                                        <div className="container flex flex-wrap p-2">
                                            <ul className="w-1/2 m-5">
                                                <li className="font-bold">{item.title}</li>
                                                {item.listItems.map(item => (
                                                    <li>{item.name}</li>
                                                ))}
                                            </ul>
                                            <div className="image-menu w-1/5">
                                                <img src="./images/menu-marketing-image.jpg" alt="" className="object-cover w-full h-full"/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </li>              
                    ))
                }
            </ul>
        </nav>
    )
}

export default Menu;
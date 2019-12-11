import React    from 'react';
import { Link } from 'react-router-dom';
import MenuList from '../data/menu-item';

const Menu = () => {
    return (
        <nav className="menu-wrapper">
            <ul className="flex">
                {
                    MenuList.map((item, i) => (
                        <li 
                            key={i}
                            className={item.childItems ? "mx-5 has-child" : "mx-5"}>
                            <Link to={item.link}>
                                <span>{item.title}</span>
                            </Link>
                            {
                                item.childItems && 
                                (
                                    <div className="dropdown-menu-child shadow-md">
                                        <div className="container flex flex-wrap p-2">
                                        <div className="w-4/5 flex flex-wrap">
                                        {
                                            item.childItems.map((item, key) => (
                                                <ul className="w-1/5 m-5" key={key}>
                                                    <li className="font-bold uppercase">{item.title}</li>
                                                    {item.listItems.map((item, key) => (
                                                        <li key={key}>
                                                            {item.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ))
                                        }
                                        </div>
                                        <div className="image-menu w-1/5">
                                            <img src="./images/menu-marketing-image.jpg" alt="" className="object-cover w-full h-full"/>
                                        </div>
                                        </div>
                                    </div>
                                )
                            }
                        </li>              
                    ))
                }
            </ul>
        </nav>
    )
}

export default Menu;
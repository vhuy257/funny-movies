import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import ListProducts from '../../data/Products';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1020/1000/600/',
      thumbnail: 'https://picsum.photos/id/1020/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1021/1000/600/',
      thumbnail: 'https://picsum.photos/id/1021/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1022/1000/600/',
      thumbnail: 'https://picsum.photos/id/1022/250/150/',
    },
];
   
const Detail = (props) => {
    let {id} = useParams();

    let product = ListProducts.filter(item => {
        return item.id === parseInt(id);
    });

    const [qty, setQty] = useState({value: 1});

    const setQuantity = (newvalue) => {
        if(!parseInt(newvalue.target.value) > 0) {
            return false;
        }
        setQty({value: parseInt(newvalue.target.value)})
    }

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
            <div className="container mt-5">   
                <div className="flex -mx-4">
                    <div className="w-3/6 px-4">
                        <ImageGallery 
                            autoPlay={true}
                            showNav={true}
                            lazyLoad={true}
                            items={images} 
                            showPlayButton={false}
                            showFullscreenButton={false}
                        />
                    </div>
                    <div className="w-3/6 px-4">
                        <h2 className="text-2xl">
                            { product[0].name }
                        </h2>
                        <h3 className="text-2xl text-orange-600 font-bold">
                            $ { product[0].price }
                        </h3>
                        <div className="list-attribute text-base my-4">
                            <ul>
                                <li className="my-1">
                                    <i className="icon-layers"></i> <span className="ml-3 text-sm font-bold">M</span>
                                </li>
                                <li className="my-1">
                                    <i className="icon-pie-chart"></i> <span className="ml-3 text-sm font-bold">Blue</span>
                                </li>
                                <li className="my-1">
                                    <i className="icon-cursor"></i> <span className="ml-3 text-sm font-bold">Free shipping</span>
                                </li>
                            </ul>
                            <p className="mt-2">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat molestias dolorum maiores voluptatibus itaque aspernatur eius non architecto, accusantium maxime iure cum libero placeat tenetur ad sapiente, at voluptatem tempore!
                            </p>
                        </div>
                        <div className="flex items-center content-center border-t border-gray-200">
                            <div className="quantity">
                                <button className="minus outline-none"><i className="icon-minus"></i></button>
                                <input type="number" value={qty.value} onChange={(value) => {setQuantity(value)}} className="border px-2 py-1 outline-none w-12 m-4 text-center"/>
                                <button className="plus outline-none"><i className="icon-plus"></i></button>
                            </div>
                            <button className="add-to-cart bg-red-500 text-white p-4 py-2 ml-2 hover:bg-red-600">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;
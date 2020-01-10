import React from 'react';
import { useParams } from 'react-router-dom';
import ListProducts from '../../data/Products';
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
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];
   
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
                <ImageGallery items={images} />
            </div>
        </>
    )
}

export default Detail;
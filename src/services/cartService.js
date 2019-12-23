import {toast} from 'react-toastify';
import EventEmitter from '../utils/EventEmitter';

class cartService extends EventEmitter {

    addProductToCart = ({product}) => {
        var _cartArr = JSON.parse(localStorage.getItem('cart')) || [];
        
        var _result = _cartArr.filter(item => {
            return item.id === product.id;
        });

        if(_result.length === 0) {
            _cartArr.push(product); 
            toast.success(`${product.name} added to cart successfully!!`);
        } else {
            toast.info(`${product.name} is existing in cart!`);
        }
        
        localStorage.setItem('cart', JSON.stringify(_cartArr));
        return _cartArr;
    }

    updateCartByItem = ({item_id, quantity}) => {
        
    }

    deleteCart = ({cart_id}) => {
        
    }

    totalAmountFromCart = ({cart_id}) => {
        
    }

    removeProductFromCart = ({item_id}) => {
        
    }
}

const instance = new cartService();

export default instance;
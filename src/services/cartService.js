import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';

class cartService extends EventEmitter {

    constructor() {
        super();

        this.setDefaults();
    }

    setDefaults = () => {
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Accept'] = 'application/json';
    };

    initCart = () => {
        
    }

    addProductToCart = ({product}) => {
        var _cartArr = JSON.parse(localStorage.getItem('cart')) || [];
        
        var _result = _cartArr.filter(item => {
            return item.name === product.name;
        });

        if(_result.length === 0) {
            _cartArr.push(product); 
        } 
        
        localStorage.setItem('cart', JSON.stringify(_cartArr));
        return _cartArr;
    }

    getListProductInShoppingCart = ({cart_id}) => {
        
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
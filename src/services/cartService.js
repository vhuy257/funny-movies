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
        return product;
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
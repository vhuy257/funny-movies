export const INIT_CART = "INIT_CART";
export const INIT_CART_SUCCESS = "INIT_CART_SUCCESS";
export const INIT_CART_ERROR = "INIT_CART_ERROR";
export const INIT_CART_FROM_LOCALSTORAGE = "INIT_CART_FROM_LOCALSTORAGE";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const ADD_PRODUCT_TO_CART_ERROR = "ADD_PRODUCT_TO_CART_ERROR";

export const GET_LIST_PRODUCT_IN_CART = "GET_LIST_PRODUCT_IN_CART";
export const GET_LIST_PRODUCT_IN_CART_SUCCESS = "GET_LIST_PRODUCT_IN_CART_SUCCESS";
export const GET_LIST_PRODUCT_IN_CART_ERROR = "GET_LIST_PRODUCT_IN_CART_ERROR";

export const LOAD_TOTAL_AMOUNT_FROM_CART = "LOAD_TOTAL_AMOUNT_FROM_CART";
export const LOAD_TOTAL_AMOUNT_FROM_CART_SUCCESS = "LOAD_TOTAL_AMOUNT_FROM_CART_SUCCESS";
export const LOAD_TOTAL_AMOUNT_FROM_CART_ERROR = "LOAD_TOTAL_AMOUNT_FROM_CART_ERROR";

export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const REMOVE_ITEM_FROM_CART_SUCCESS = "REMOVE_ITEM_FROM_CART_SUCCESS";
export const REMOVE_ITEM_FROM_CART_ERROR = "REMOVE_ITEM_FROM_CART_ERROR";

export function initCart (data) {
    return {
        type: INIT_CART,
        payload: data
    }
}

export function addProductToCart (data) {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: data
    }
}

export function getListProductInShoppingCart (data) {
    return {
        type: GET_LIST_PRODUCT_IN_CART,
        payload: data
    }
}

export function totalAmountFromCart (data) {
    return {
        type: LOAD_TOTAL_AMOUNT_FROM_CART,
        payload: data
    }
}

export function removeItemFromCart (data) {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: data
    }
}
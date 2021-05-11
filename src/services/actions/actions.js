import { ADD_TO_CART, REMOVE_TO_CART } from '../constants';
export const addToCart = (data) => {
    console.warn("Add to Cart Action", data);
    return {
        data: data,
        type: ADD_TO_CART
    }
}
export const removeToCart = (data) => {
    console.warn("Remove from Cart Action", data);
    return {
        data: data,
        type: REMOVE_TO_CART
    }
}
import {ADD_TO_CART,REMOVE_TO_CART} from '../constants';



export const addToCart=(data)=>
{

    console.warn("action",data);


    return {
        data:data,
        type: ADD_TO_CART
    }
}
export const removeToCart=(data)=>
{
    return {
        data:data,
        type: REMOVE_TO_CART
    }
}
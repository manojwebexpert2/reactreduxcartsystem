import { ADD_TO_CART, REMOVE_TO_CART } from '../constants';

const intialState = {
    cartData: []
}

export default function cartItems(state = [], action) {

    switch (action.type) {
        case ADD_TO_CART:
            
        console.warn("reducer",action);

            return [
                ...state,
               { cartData: action.data}
            ]
        case REMOVE_TO_CART:
            state.pop();
            return [

                ...state
            ]
            break;
        default: return state;
    }
}

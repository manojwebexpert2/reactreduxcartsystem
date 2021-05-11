import Home from '../components/Home';

import {connect} from 'react-redux';
import {addToCart,removeToCart} from '../services/actions/actions';

const mapDispatchToPros=dispatch=>({

  //this event name will be use in view as event name addToCartHandler, means our add to cart event will call action with using data which we will dispatch
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
  

})
//return data object which will set current state of rootreducer name, where cartData is object return after reducer action perform
const mapStateToPros=state=>({

  data:state.cartItems

})

export default connect(mapStateToPros,mapDispatchToPros)(Home);

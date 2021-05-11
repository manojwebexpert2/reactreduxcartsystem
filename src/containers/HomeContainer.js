import Home from '../components/Home';

import {connect} from 'react-redux';
import {addToCart} from '../services/actions/actions';

const mapDispatchToPros=dispatch=>({

  //this event name will be use in view as event name addToCartHandler, means our add to cart event will call action with using data which we will dispatch
    addToCartHandler:data=>dispatch(addToCart(data))
  

})

const mapStateToPros=state=>({

    //cartData:state

})

export default connect(mapStateToPros,mapDispatchToPros)(Home);

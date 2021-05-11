import Header from '../components/Header';

import { connect } from 'react-redux';


const mapDispatchToPros = dispatch => ({

})
//return data object which will set current state of rootreducer name, where cartData is object return after reducer action perform
const mapStateToPros = state => ({

  data: state.cartItems

})

export default connect(mapStateToPros, mapDispatchToPros)(Header);

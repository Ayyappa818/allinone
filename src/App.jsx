import logo from './logo.svg';
import './App.css';
import products from './features/products/products.json'
import ProductList from './features/products/ProductList';
import { useSelector } from 'react-redux';
import Nav from './Nav'
import { Outlet } from 'react-router-dom';
function App() {
  var {cartItems}= useSelector(state=>state.productReducer)
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      {/* <h2>CartItemsCount: {cartItems?.length}</h2>
      <ProductList></ProductList> */}
    </div>
  );
}

export default App;

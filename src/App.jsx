import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import products from './features/products/products.json'
import ProductList from './features/products/ProductList';
import { useSelector } from 'react-redux';
function App() {
  var {cartItems}= useSelector(state=>state.productReducer)
  return (
    <div>
      <Counter></Counter>
      <h2>CartItemsCount: {cartItems?.length}</h2>
      <ProductList></ProductList>
    </div>
  );
}

export default App;

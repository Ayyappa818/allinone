import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import products from './features/products/products.json'
import ProductList from './features/products/ProductList';
function App() {
  return (
    <div>
      <Counter></Counter>
      <ProductList></ProductList>
    </div>
  );
}

export default App;

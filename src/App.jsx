import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import products from './features/products/products.json'
import Productlist from './features/products/Productlist';
function App() {
  return (
    <div>
      <Counter></Counter>
      <Productlist></Productlist>
    </div>
  );
}

export default App;

import { Outlet } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
  <div>
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
}

export default App;

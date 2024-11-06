import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h1>Ayyappa</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
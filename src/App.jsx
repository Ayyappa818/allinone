import { Outlet } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import React from 'react';


function App() {
  var [col,setCol]=React.useState(true);
  function color(){
    setCol(!col)
  }
  return (
    <div className="App w-100 "  style={col?{backgroundColor:"white",height:'700px',color:"blueviolet"}:{backgroundColor:"black",height:'700px',color:"darkgoldenrod"}}>
      <Nav></Nav>
      <div className='position-relative'>
      <i className={col?"fs-1 bi bi-toggle-on position-absolute top-0 end-0":"fs-1 bi bi-toggle-off position-absolute top-0 end-0"} style={col?{color:"black"}:{color:"white"}} onClick={()=>{color()}}></i>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;

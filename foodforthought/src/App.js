import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function App() {
  return (
    <div style={{backgroundColor: "#e3e3e3"}}>
      <Navbar style={{ backgroundColor: 'white', color: 'black' }}>
        <Navbar.Brand >Food For Thought</Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
      <text>
        hello
      </text>



    </div>
  );
}

export default App;

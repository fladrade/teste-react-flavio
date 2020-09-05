import React from 'react';
import './components/navbar';
import NavBar from './components/navbar';
import Rotas from './routes';

function App() {
  return (
    <>
    <div className="container">
      <NavBar />
      <Rotas/>
    </div>   
    </>
  );
}

export default App;

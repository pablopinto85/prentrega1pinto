import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carro from './components/Carritocompra';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  const welcomeMessage = "Bienvenido(a) a Joyas Magnolia";
  return (
    <div>
      <Navbar/>
      <Carro/>
      <ItemListContainer welcomeMessage={welcomeMessage} />
      <Footer/>
    </div>
  );
}

export default App;

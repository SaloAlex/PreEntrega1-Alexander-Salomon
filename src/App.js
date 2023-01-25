import React from 'react';
import NavBar from './components/NavBar.jsx';
import Libro from './components/Libro.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Libro title="Book Store" />
      <ItemListContainer greeting= "Lista de Productos"/>

    </>
  );
}

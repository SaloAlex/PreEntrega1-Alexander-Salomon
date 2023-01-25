import React from 'react';

import './styles/Libro.css';

const Libro = ({ title }) => {
  return (
    <section className="libro libro-slide-1">
      <div className="libro-container">
        <article className="libro-container__text-box">
          <h1>{title}</h1>
          <p>
         <strong>Books Store</strong>  Todos los libros que buscas en un solo lugar.
          </p>
          <p>Aca podes encontrar y descargar todos los libros que mas te gustan</p>
          <button className="button-primary">Comprar</button>
        </article>
      </div>
    </section>
  );
};

export default Libro;

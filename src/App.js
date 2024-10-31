import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="intro">
        <h2>Benvenuti su Filocake</h2>
        <p>La tua pasticceria online con articoli da bar e dolci per feste!</p>
      </section>

      <section className="products">
        <h3>Prodotti disponibili</h3>
        <div className="product-list">
          <div className="product">
            <h4>Articoli da Bar</h4>
            <p>Cornetti, pasticcini, e altre delizie per il tuo bar.</p>
          </div>
          <div className="product">
            <h4>Dolci per Feste</h4>
            <p>Torte personalizzate per compleanni, anniversari e altre occasioni speciali.</p>
          </div>
        </div>
      </section>

      <section className="order">
        <h3>Effettua un Ordine</h3>
        <p>Ordina i tuoi dolci preferiti con un semplice click!</p>
        <button className="order-button">Ordina Ora</button>
      </section>

      <footer className="footer">
        <p>© 2024 Filocake. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

export default App;

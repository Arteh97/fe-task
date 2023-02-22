import './App.css'
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList/ProductList';

function App() {

  return (
    <div>
      <div>
      <Header />
      </div>
      <main>
      <ProductList />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import Filter from '../Filter/Filter';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ price: '', type: '', color: '' });

  useEffect(() => {
    // fetch data and set products state
    fetch('https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: 'toilets',
        pageNumber: 0,
        size: 0,
        additionalPages: 0,
        sort: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.products);
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch(error => console.log(error));
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    let filteredData = products;

    if (filters.price) {
      filteredData = filteredData.filter(product => {
        const [min, max] = filters.price.split('-');
        return product.price.priceIncTax >= parseFloat(min) && product.price.priceIncTax <= parseFloat(max);
      });
    }
    setFilteredProducts(filteredData);
  }, [filters, products]);

  return (
    <div className="product-list-container">
      <div className="product-list-filter">
        <Filter filters={filters} onChange={handleFilterChange} />
      </div>
      <div className="product-list-products">
        <div className="product-list__grid">
          {filteredProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

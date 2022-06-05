import React from 'react';
import { Herobanner, Product, Footer, FooterBanner } from '../components';

const Home = () => (
  <div>
    <Herobanner />
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>The hottest laptops</p>
    </div>
    <div className="products-container">
      {['product1', 'product2'].map((product) => product)}
    </div>
    <FooterBanner />
  </div>
);

export default Home;
